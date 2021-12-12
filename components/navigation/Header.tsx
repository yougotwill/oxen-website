import { DesktopHeader } from '@/components/navigation/DesktopHeader';
import { MobileHeader } from '@/components/navigation/MobileHeader';
import { useScreen } from '@/contexts/screen';

export function Header() {
  const { isDesktop, isHuge, isEnormous } = useScreen();
  return (
    <>
      {isDesktop || isHuge || isEnormous ? <DesktopHeader /> : <MobileHeader />}
    </>
  );
}
