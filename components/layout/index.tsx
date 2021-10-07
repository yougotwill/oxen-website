import { useRouter } from 'next/router';
import { ReactNode, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { UI } from '../../constants';
import { useScreen } from '../../contexts/screen';
import { PageType } from '../../state/navigation';
import { IState } from '../../state/reducers';

import Nav from '../navigation/Nav';
import Footer from '../navigation/Footer';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const { isMobile, isTablet, isDesktop, isHuge } = useScreen();
  const { pageType, headerMobileMenuExpanded } = useSelector(
    (state: IState) => state.navigation,
  );

  const router = useRouter();

  // const marginLeft = `${
  //   pageType === PageType.NORMAL && (isMobile || isTablet)
  //     ? UI.SIDE_MENU_SIDE_BAR_WIDTH_PX
  //     : 0
  // }px`;
  const marginLeft = '0px';

  const mobileMenuOpen =
    (pageType === PageType.BLOG || pageType === PageType.POST) &&
    headerMobileMenuExpanded;

  const ref = useRef<HTMLDivElement>(null);
  const handleLocationChange = () => {
    // Reset scroll position
    ref.current.scrollTo(0, 0);
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleLocationChange);

    return () => {
      router.events.off('routeChangeComplete', handleLocationChange);
    };
  }, []);

  return (
    <div className="relative flex flex-col justify-between w-full text-primary">
      <Nav />

      <div
        style={{
          height: `calc(100vh - ${UI.HEADER_HEIGHT_PX}px`,
        }}
        className="w-full"
      >
        <main
          role="main"
          ref={ref}
          style={{
            marginLeft,
            filter: `brightness(${mobileMenuOpen ? 0.85 : 1})`,
          }}
          className="relative w-full duration-300"
        >
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
