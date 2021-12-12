import { ReactElement, ReactNode, createContext, useContext } from 'react';

import { useScreenSize } from '@/hooks/screen';

interface IScreen {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isXL: boolean;
  isHuge: boolean;
  isEnormous: boolean;
}

const ScreenContext = createContext<IScreen>({
  width: 0,
  height: 0,
  isMobile: true,
  isTablet: false,
  isDesktop: false,
  isXL: false,
  isHuge: false,
  isEnormous: false,
});

export function useScreen() {
  return useContext(ScreenContext);
}

interface Props {
  children: ReactNode;
}

export function ScreenProvider(props: Props): ReactElement {
  const { children } = props;

  const value: IScreen = useScreenSize();

  return (
    <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>
  );
}
