import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { UI } from '../../constants';
import { useScreen } from '../../contexts/screen';
import {
  collapseMobileHeader,
  collapseSideMenu,
  expandMobileHeaderMenu,
  expandSideMenu,
  PageType,
} from '../../state/navigation';
import { IState } from '../../state/reducers';

import { MobileMenu } from './MobileMenu';

import { ReactComponent as OxenLogoSVG } from '../../assets/svgs/brand.svg';
import { ReactComponent as TriangleSVG } from '../../assets/svgs/triangle.svg';

export function MobileHeader() {
  const { isMobile, isTablet } = useScreen();
  const { sideMenuExpanded, headerMobileMenuExpanded, pageType } = useSelector(
    (state: IState) => state.navigation,
  );
  const dispatch = useDispatch();

  // On blog page, the sidebar disappears so we need a
  // hamburger menu for topbar linksn
  const isBlog = pageType === PageType.BLOG || pageType === PageType.POST;

  const toggleSideMenu = () =>
    dispatch(sideMenuExpanded ? collapseSideMenu() : expandSideMenu());

  const toggleMobileMenu = () =>
    dispatch(
      headerMobileMenuExpanded
        ? collapseMobileHeader()
        : expandMobileHeaderMenu(),
    );

  return (
    <div
      style={{
        zIndex: UI.Z_INDEX_HEADER,
        paddingLeft: `${UI.PAGE_CONTAINED_PADDING_VW}vw`,
        paddingRight: `${UI.PAGE_CONTAINED_PADDING_VW}vw`,
        height: `${UI.HEADER_HEIGHT_PX}px`,
      }}
      className={classNames('w-full bg-alt border-b border-primary')}
    >
      <div className="relative flex items-center justify-between w-full h-full">
        <div className="antialiased">
          <Link href="/">
            <a className="flex items-center flex-shrink-0 text-primary">
              <OxenLogoSVG className="h-8 fill-current" />
            </a>
          </Link>
        </div>

        {(isMobile || isTablet) && !isBlog && (
          <TriangleSVG
            onClick={() => toggleSideMenu()}
            className={classNames(
              'h-4 fill-current text-primary transform outline-none duration-300 cursor-pointer',
              sideMenuExpanded ? 'rotate-90' : '',
            )}
          />
        )}

        {(isMobile || isTablet) && isBlog && (
          <>
            <TriangleSVG
              onClick={() => toggleMobileMenu()}
              className={classNames(
                'h-4 fill-current text-primary transform outline-none duration-300 cursor-pointer',
                headerMobileMenuExpanded ? 'rotate-90' : '',
              )}
            />
            <MobileMenu />
          </>
        )}
      </div>
    </div>
  );
}
