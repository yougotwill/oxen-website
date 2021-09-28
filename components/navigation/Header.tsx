import React, { useContext } from 'react';
import { ScreenContext } from '../../contexts/screen';
import { DesktopHeader } from './DesktopHeader';
import { MobileHeader } from './MobileHeader';

export function Header() {
  const { isDesktop, isHuge } = useContext(ScreenContext);
  return <>{isDesktop || isHuge ? <DesktopHeader /> : <MobileHeader />}</>;
}
