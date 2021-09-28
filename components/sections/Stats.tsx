import { ReactElement, useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

import { UI } from '../../constants';
import { useScreen } from '../../contexts/screen';

import { Contained } from '../Contained';
import CountUp from '../animations/CountUp';

import { ReactComponent as OxenLogoSVG } from '../../assets/svgs/logo.svg';

export interface StatsProps {
  currentValue: number;
  coinsLocked: number;
}

export default function Stats(props: StatsProps): ReactElement {
  const { currentValue, coinsLocked } = props;
  const { isMobile, isTablet, isDesktop, isHuge } = useScreen();

  const [startAnimation, setStartAnimation] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollOffset =
        UI.HEADER_HEIGHT_PX + (isMobile ? -600 : isDesktop || isHuge ? 400 : 0);
      const scrollEffectStart =
        statsRef.current?.offsetTop! -
        statsRef.current?.scrollHeight! -
        scrollOffset;
      const scrollEffectStop = statsRef.current?.offsetTop! - scrollOffset;

      if (
        window.scrollY >= scrollEffectStart &&
        window.scrollY < scrollEffectStop
      ) {
        setStartAnimation(true);
      }
    };
    document.addEventListener('scroll', () => {
      onScroll();
    });
    return () => {
      document.removeEventListener('scroll', () => {
        onScroll();
      });
    };
  }, [isMobile, isTablet, isDesktop, isHuge]);

  return (
    <Contained
      backgroundColor="secondary"
      classes={classNames(
        'tablet:flex tablet:flex-col tablet:justify-center tablet:items-center',
        'desktop:flex-row desktop:pt-8 desktop:pb-16',
      )}
    >
      <div
        className={classNames(
          'flex flex-col justify-center items-center text-center pt-8',
          'tablet:w-full',
          'desktop:flex-row',
        )}
        ref={statsRef}
      >
        <OxenLogoSVG
          className={classNames('w-36 h-36 my-8', 'desktop:w-2/12')}
        />
        <div
          className={classNames(
            'flex flex-col justify-center items-center',
            'tablet:w-full tablet:max-w-xl tablet:flex-row tablet:justify-around',
            'desktop:max-w-none desktop:w-6/12 desktop:mx-3',
          )}
        >
          <div className={classNames('my-8 leading-tight')}>
            <h3
              className={classNames(
                'text-8xl font-semibold',
                'desktop:text-7xl',
              )}
            >
              <CountUp wait={!startAnimation}>{currentValue}</CountUp>c
            </h3>
            <p className={classNames('font-medium')}>CURRENT VALUE</p>
          </div>
          <div className={classNames('my-8 leading-tight')}>
            <h3
              className={classNames(
                'text-8xl font-semibold',
                'desktop:text-7xl',
              )}
            >
              <CountUp percentage={true} wait={!startAnimation}>
                {coinsLocked}
              </CountUp>
              %
            </h3>
            <p className={classNames('font-medium')}>COINS LOCKED</p>
          </div>
        </div>

        <div
          className={classNames(
            'my-8',
            'tablet:max-w-sm',
            'desktop:max-w-none desktop:w-4/12 desktop:text-left desktop:mt-4 desktop:mb-0',
          )}
        >
          <p className={classNames('font-semibold leading-snug mb-4')}>
            Something short and sweet here or maybe another stat if you have
            one?
          </p>
          <p className={classNames('mb-8', 'desktop:mb-0')}>
            Coin Market Cap Coin Gecko
          </p>
        </div>
      </div>
    </Contained>
  );
}
