import { ReactElement } from 'react';
import classNames from 'classnames';

import { Contained } from '../Contained';

import { ReactComponent as BittrexSVG } from '../../assets/svgs/bittrex-logo.svg';
import { ReactComponent as KucoinSVG } from '../../assets/svgs/kucoin-logo.svg';

export default function About(): ReactElement {
  return (
    <Contained backgroundColor="alt" classes={classNames('py-4')}>
      <div
        className={classNames(
          'tablet:flex tablet:flex-col tablet:justify-center tablet:items-center',
          'desktop:h-screen desktop:flex-row',
        )}
      >
        <div
          className={classNames(
            'flex flex-col justify-center items-center text-center pt-8',
            'tablet:max-w-lg',
            'desktop:max-w-none desktop:w-7/12 desktop:text-left desktop:items-start desktop:pt-0',
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
            Fast, powerful, and private. The only crypto in the world with
            instant confidential transactions.
          </p>
          <p className={classNames('text-xl leading-snug mb-6')}>
            Oxen is the first coin to bring Proof of Stake to the renowned
            CryptoNote protocol, making it the perfect network for privacy tech.
            Oxen apps utilise our groundbreaking decentralised computing
            infrastructure to deliver industry-leading privacy to mainstream
            applications. Built to burn $OXEN, Oxen apps support the
            decentralised network they run on.
          </p>
          <a href="#" className={'text-secondary text-2xl font-semibold'}>
            Learn More
          </a>
        </div>
        <div
          className={classNames(
            'flex flex-col justify-center items-center text-center pt-8',
            'tablet:pt-16',
            'desktop:w-5/12 desktop:pb-8',
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
          <p
            className={classNames(
              'text-green mt-6 mb-12 w-40',
              'tablet:w-full',
              'desktop:mb-0',
            )}
          >
            More information Coin Market Cap Coin Gecko
          </p>
        </div>
      </div>
      <hr className={classNames('border-green border-dashed w-full')} />
    </Contained>
  );
}
