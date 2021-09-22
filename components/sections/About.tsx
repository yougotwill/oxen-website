import { ReactElement } from 'react';
import classNames from 'classnames';

import { Contained } from '../Contained';

import { ReactComponent as BittrexSVG } from '../../assets/svgs/bittrex-logo.svg';
import { ReactComponent as KucoinSVG } from '../../assets/svgs/kucoin-logo.svg';

export default function About(): ReactElement {
  return (
    <Contained
      backgroundColor="alt"
      classes={classNames(
        'tablet:h-screen tablet:flex tablet:flex-col tablet:justify-center tablet:items-center',
        'desktop:flex-row',
      )}
    >
      <div
        className={classNames(
          'flex flex-col justify-center items-center text-center pt-8',
          'tablet:max-w-lg',
          'desktop:max-w-none desktop:w-1/2 desktop:text-left desktop:items-start',
        )}
      >
        <h2
          className={classNames(
            'text-4xl font-medium font-prompt leading-tight mb-4',
          )}
        >
          Oxen
        </h2>
        <p className={classNames('text-2xl leading-snug mb-6')}>
          Something here about Oxen coin, what it is, maybe the tech behind it,
          why its good, where did it start all this kind of shit. In summary.
        </p>
        <p className={classNames('text-xl leading-snug mb-6')}>
          Here is some more detail about the privacy. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <a href="#" className={'text-2xl font-semibold'}>
          Learn More
        </a>
      </div>
      <div
        className={classNames(
          'flex flex-col justify-center items-center text-center pt-8',
          'tablet:pt-16',
          'desktop:max-w-none desktop:w-1/2 desktop:pt-20',
        )}
      >
        <h3
          className={classNames(
            'text-3xl font-semibold font-prompt leading-tight mb-4',
          )}
        >
          Buy Oxen
        </h3>
        <a href="#" target="_blank" className={classNames('block my-6')}>
          <BittrexSVG className={classNames('inline w-24 h-24')} />
          <span className={classNames('text-5xl ml-4 font-medium')}>
            Bittrex
          </span>
        </a>
        <a href="#" target="_blank" className={classNames('block my-6')}>
          <KucoinSVG className={classNames('inline w-24 h-24')} />
          <span className={classNames('text-5xl ml-4 font-medium')}>
            Kucoin
          </span>
        </a>
        <p className={classNames('my-6')}>
          More information Coin Market Cap Coin Gecko
        </p>
      </div>
    </Contained>
  );
}
