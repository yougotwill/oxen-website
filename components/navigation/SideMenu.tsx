import { IState } from '@/state/reducers';
import { PageType } from '@/state/navigation';
import { SideMenuFullscreen } from '@/components/navigation/SideMenuFullscreen';
import { SideMenuSplit } from '@/components/navigation/SideMenuSplit';
import { useScreen } from '@/contexts/screen';
import { useSelector } from 'react-redux';

export interface ISideMenuItem {
  id: number;
  label: string;
  href: string;
  isExternal?: boolean;
  hasOwnRoute?: boolean;
  shouldHide?: boolean;
}

export function SideMenu() {
  const { isMobile, isTablet } = useScreen();
  const { sideMenuExpanded: expanded, pageType, postTitle } = useSelector(
    (state: IState) => state.navigation,
  );

  const isBlog = pageType === PageType.BLOG;
  const isPost = pageType === PageType.POST;

  return (isMobile || isTablet) && !isBlog && !isPost ? (
    <SideMenuFullscreen withSideBar={isTablet} />
  ) : (
    <SideMenuSplit />
  );
}
