import { ReactElement, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { UI } from '../../constants';
import { useScreen } from '../../contexts/screen';

import { Contained } from '../Contained';
import CountUp from '../animations/CountUp';

import dollarImage from '../../assets/svgs/dollar.svg';
import padlockImage from '../../assets/svgs/padlock.svg';
import nodeImage from '../../assets/svgs/node.svg';

export interface StatsProps {
  currentValue: number;
  coinsLocked: number;
  serviceNodes: number;
}

export default function Stats(props: StatsProps): ReactElement {
  const { currentValue, coinsLocked, serviceNodes } = props;
  const { isMobile, isTablet, isDesktop, isHuge } = useScreen();

  const [startAnimation, setStartAnimation] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollOffset =
        UI.HEADER_HEIGHT_PX +
        (isMobile ? -1100 : isDesktop || isHuge ? 200 : 500);
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
    <Contained backgroundColor="alt">
      <div
        className={classNames(
          'flex flex-col justify-center items-center text-black text-center pt-16 pb-24',
          'tablet:flex-row tablet:text-left',
        )}
        ref={statsRef}
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
                src={dollarImage}
                alt={'Dollar Sign'}
                width={122}
                height={200}
              />
            </div>
            <div className={classNames('tablet:ml-4')}>
              <p className={classNames('text-lg', 'desktop:w-24 desktop:pt-2')}>
                Current Value:
              </p>
              <h3
                className={classNames(
                  'text-7xl font-light',
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
                src={padlockImage}
                alt={'Locked Padlock'}
                width={131}
                height={200}
              />
            </div>
            <div className={classNames('tablet:ml-4')}>
              <p className={classNames('text-lg', 'desktop:w-24 desktop:pt-2')}>
                Coins Locked:
              </p>
              <h3
                className={classNames(
                  'text-7xl font-light',
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
                src={nodeImage}
                alt={'Server box'}
                width={135}
                height={200}
              />
            </div>
            <div className={classNames('tablet:ml-4')}>
              <p className={classNames('text-lg', 'desktop:w-24 desktop:pt-2')}>
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
    </Contained>
  );
}
