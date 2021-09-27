import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import { UI } from '../constants';

export function useScreenSize() {
  const { width } = useWindowSize();

  const [isMobile, setIsMobile] = useState(true);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHuge, setIsHuge] = useState(false);

  useEffect(() => {
    const _isMobile = width < UI.TABLET_BREAKPOINT;
    const _isTablet =
      width >= UI.TABLET_BREAKPOINT && width < UI.DESKTOP_BREAKPOINT;
    const _isDesktop =
      width >= UI.DESKTOP_BREAKPOINT && width < UI.HUGE_BREAKPOINT;
    const _isHuge = width >= UI.HUGE_BREAKPOINT;

    setIsMobile(_isMobile);
    setIsTablet(_isTablet);
    setIsDesktop(_isDesktop);
    setIsHuge(_isHuge);
  }, [width]);

  return { width, isMobile, isTablet, isDesktop, isHuge };
}
