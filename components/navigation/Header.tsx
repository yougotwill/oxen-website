import { DesktopHeader } from './DesktopHeader';
import { MobileHeader } from './MobileHeader';
import { useScreen } from '../../contexts/screen';

export function Header() {
  const { isDesktop, isHuge, isEnormous } = useScreen();
  return (
    <>
      {isDesktop || isHuge || isEnormous ? <DesktopHeader /> : <MobileHeader />}
    </>
  );
}
