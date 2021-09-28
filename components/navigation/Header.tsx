import { useScreen } from '../../contexts/screen';

import { DesktopHeader } from './DesktopHeader';
import { MobileHeader } from './MobileHeader';

export function Header() {
  const { isDesktop, isHuge } = useScreen();
  return <>{isDesktop || isHuge ? <DesktopHeader /> : <MobileHeader />}</>;
}
