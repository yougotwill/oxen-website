import React from 'react';
import { useScreenSize } from '../hooks/screen';

interface IScreen {
  width: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isHuge: boolean;
}

export const ScreenContext = React.createContext<IScreen>({
  width: 0,
  isMobile: true,
  isTablet: false,
  isDesktop: false,
  isHuge: false,
});

const ScreenProvider = ({ children }) => {
  const screenParams: IScreen = useScreenSize();

  return (
    <ScreenContext.Provider value={screenParams}>
      {children}
    </ScreenContext.Provider>
  );
};

export default ScreenProvider;
