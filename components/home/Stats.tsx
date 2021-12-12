import { Contained, containerStyles } from '../Contained';
import { ReactElement, useEffect, useRef, useState } from 'react';

import CountUp from '../animations/CountUp';
import Image from 'next/image';
import { UI } from '../../constants';
import classNames from 'classnames';
import { useScreen } from '../../contexts/screen';

export interface StatsProps {
  currentValue: number;
  coinsLocked: number;
  serviceNodes: number;
}

export default function Stats(props: StatsProps): ReactElement {
  const { currentValue, coinsLocked, serviceNodes } = props;
  const { isMobile, isTablet, isDesktop, isHuge, isEnormous } = useScreen();

  const [startAnimation, setStartAnimation] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollOffset =
      UI.HEADER_HEIGHT_PX +
      (isMobile ? -1100 : isDesktop || isHuge || isEnormous ? 200 : 500);
    const onScroll = () => {
      if (startAnimation) return;

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
  }, [startAnimation, isMobile, isDesktop, isHuge, isEnormous]);

  return (
    <Contained
      backgroundColor="white"
      ditherColor="alt"
      ditherPosition={'bottom'}
      ditherFlipAxis="y"
      fullWidth={true}
      classes={classNames(
        'pb-16',
        'tablet:pb-36',
        'desktop:pb-48',
        'enormous:pb-96',
      )}
    >
      <div className={classNames('bg-alt w-full my-0 mx-auto pb-8')}>
        <div
          className={classNames(
            'flex flex-col justify-center items-center text-center pt-16',
            'tablet:flex-row tablet:text-left',
          )}
          ref={statsRef}
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: `${containerStyles.paddingLeft}`,
            paddingRight: `${containerStyles.paddingRight}`,
            maxWidth: `${containerStyles.maxWidth}`,
          }}
        >
          <div
            className={classNames(
              'flex flex-col justify-center items-center',
              'tablet:flex-row tablet:w-full',
            )}
          >
            <div
              className={classNames(
                'leading-tight',
                'tablet:flex tablet:items-center tablet:mr-8',
                'desktop:w-1/3 desktop:leading-snug desktop:pr-16',
              )}
            >
              <div
                className={classNames(
                  'relative mx-auto pb-4',
                  'desktop:ml-0 desktop:mr-2',
                )}
              >
                <Image
                  src={'/svgs/dollar.svg'}
                  alt={'Dollar Sign'}
                  width={122}
                  height={200}
                  quality={100}
                  priority={true}
                  lazyBoundary={`500px 200px`}
                />
              </div>
              <div className={classNames('tablet:ml-4')}>
                <p
                  className={classNames(
                    'text-lg font-light',
                    'desktop:w-24 desktop:pt-2',
                  )}
                >
                  Current Value:
                </p>
                <h3
                  className={classNames(
                    'text-7xl font-extralight',
                    'tablet:text-5xl tablet:w-28',
                    'desktop:text-7xl',
                  )}
                >
                  <CountUp
                    decimal={true}
                    wait={!startAnimation}
                    classes={'font-semibold'}
                  >
                    {currentValue}
                  </CountUp>
                  c
                </h3>
              </div>
            </div>
            <div
              className={classNames(
                'mt-16 leading-tight',
                'tablet:mt-0 tablet:flex tablet:items-center tablet:mr-8',
                'desktop:w-1/3 desktop:leading-snug desktop:pr-16',
              )}
            >
              <div
                className={classNames(
                  'relative mx-auto pb-4',
                  'desktop:ml-0 desktop:mr-2',
                )}
              >
                <Image
                  src={'/svgs/padlock.svg'}
                  alt={'Locked Padlock'}
                  width={131}
                  height={200}
                  quality={100}
                  priority={true}
                  lazyBoundary={`500px 200px`}
                />
              </div>
              <div className={classNames('tablet:ml-4')}>
                <p
                  className={classNames(
                    'text-lg font-light',
                    'desktop:w-24 desktop:pt-2',
                  )}
                >
                  Coins Locked:
                </p>
                <h3
                  className={classNames(
                    'text-7xl font-extralight',
                    'tablet:text-5xl tablet:w-28',
                    'desktop:text-7xl',
                  )}
                >
                  <CountUp
                    percentage={true}
                    wait={!startAnimation}
                    classes={'font-semibold'}
                  >
                    {coinsLocked}
                  </CountUp>
                  %
                </h3>
              </div>
            </div>
            <div
              className={classNames(
                'mt-16 leading-tight',
                'tablet:mt-0 tablet:flex tablet:items-center',
                'desktop:w-1/3 desktop:leading-snug desktop:pr-16',
              )}
            >
              <div
                className={classNames(
                  'relative mx-auto pb-4',
                  'desktop:ml-0 desktop:mr-2',
                )}
              >
                <Image
                  src={'/svgs/node.svg'}
                  alt={'Server box'}
                  width={135}
                  height={200}
                  quality={100}
                  priority={true}
                  lazyBoundary={`500px 200px`}
                />
              </div>
              <div className={classNames('tablet:ml-4')}>
                <p
                  className={classNames(
                    'text-lg font-light',
                    'desktop:w-24 desktop:pt-2',
                  )}
                >
                  Service Nodes:
                </p>
                <h3
                  className={classNames(
                    'text-7xl font-semibold',
                    'tablet:text-5xl tablet:w-28',
                    'desktop:text-7xl',
                  )}
                >
                  <CountUp wait={!startAnimation}>{serviceNodes}</CountUp>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Contained>
  );
}