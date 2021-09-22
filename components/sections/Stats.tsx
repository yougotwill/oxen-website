import { ReactElement } from 'react';
import classNames from 'classnames';

import { Contained } from '../Contained';

import { ReactComponent as OxenLogoSVG } from '../../assets/svgs/logo.svg';

export default function Stats(): ReactElement {
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
      >
        <OxenLogoSVG
          className={classNames('w-36 h-36 my-8', 'desktop:w-2/12')}
        />

        {/* TODO Count up animation on first load */}
        {/* Fetch latest value from somewhere? */}
        <div
          className={classNames(
            'flex flex-col justify-center items-center',
            'tablet:w-full tablet:max-w-xl tablet:flex-row tablet:justify-around',
            'desktop:max-w-none desktop:w-6/12 desktop:mx-4',
          )}
        >
          <div className={classNames('my-8 leading-tight')}>
            <h3
              className={classNames(
                'text-8xl font-semibold',
                'desktop:text-7xl',
              )}
            >
              .65c
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
              48%
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
