import { ReactElement } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { Contained } from '../Contained';

export default function About(): ReactElement {
  return (
    <Contained backgroundColor="alt" classes={classNames('py-4')}>
      <div
        className={classNames(
          'tablet:flex tablet:flex-col tablet:justify-center tablet:items-center',
          'desktop:flex-row desktop:-mt-16',
        )}
      >
        <div
          className={classNames(
            'flex flex-col justify-center items-center text-center',
            'tablet:max-w-lg',
            'desktop:max-w-none desktop:w-7/12 desktop:text-left desktop:items-start',
          )}
        >
          <h2 className={classNames('text-4xl font-medium leading-tight mb-4')}>
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
            'desktop:w-5/12 desktop:pb-16',
          )}
        >
          <h3
            className={classNames('text-3xl font-semibold leading-tight mb-4')}
          >
            Buy Oxen
          </h3>
          <a
            href="#"
            target="_blank"
            aria-label="Link to Bittrex website"
            className={classNames('block my-6')}
          >
            <Image
              src={'/svgs/bittrex-logo.svg'}
              alt="Bittrex Logo"
              width={96}
              height={96}
              quality={100}
              priority={true}
            />
            <span className={classNames('text-5xl ml-4 font-medium align-top')}>
              Bittrex
            </span>
          </a>
          <a
            href="#"
            target="_blank"
            aria-label="Link to Kucoin website"
            className={classNames('block my-6')}
          >
            <Image
              src={'/svgs/kucoin-logo.svg'}
              alt="Bittrex Logo"
              width={96}
              height={96}
              quality={100}
              priority={true}
            />
            <span className={classNames('text-5xl ml-4 font-medium align-top')}>
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
