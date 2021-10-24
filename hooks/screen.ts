import { useEffect, useState } from 'react';

import { UI } from '../constants';
import { useWindowSize } from 'react-use';

export function useScreenSize() {
  const { width, height } = useWindowSize();

  // Mobile first
  const [isMobile, setIsMobile] = useState(true);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isXL, setIsXL] = useState(false);
  const [isHuge, setIsHuge] = useState(false);
  const [isEnormous, setIsEnormous] = useState(false);

  useEffect(() => {
    const _isMobile = width < UI.TABLET_BREAKPOINT;
    const _isTablet =
      width >= UI.TABLET_BREAKPOINT && width < UI.DESKTOP_BREAKPOINT;
    const _isDesktop =
      width >= UI.DESKTOP_BREAKPOINT && width < UI.HUGE_BREAKPOINT;
    // we only use this for the video player
    const _isXL = width >= UI.XLARGE_BREAKPOINT && width < UI.HUGE_BREAKPOINT;
    const _isHuge =
      width >= UI.HUGE_BREAKPOINT && width < UI.ENORMOUS_BREAKPOINT;
    const _isEnormous = width >= UI.ENORMOUS_BREAKPOINT;

    setIsMobile(_isMobile);
    setIsTablet(_isTablet);
    setIsDesktop(_isDesktop);
    setIsXL(_isXL);
    setIsHuge(_isHuge);
    setIsEnormous(_isEnormous);
  }, [width]);

  return {
    width,
    height,
    isMobile,
    isTablet,
    isDesktop,
    isHuge,
    isXL,
    isEnormous,
  };
}
