import { Button } from '../Button';
import { Contained } from '../Contained';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
import classNames from 'classnames';

export default function Products(): ReactElement {
  return (
    <Contained
      backgroundColor="white"
      ditherColor="alt"
      ditherPosition={'bottom'}
      classes={classNames(
        'flex flex-col justify-center items-center pb-16',
        'tablet:pb-36',
        'desktop:items-start desktop:pb-80',
        'enormous:pt-8 enormous:pb-128',
      )}
    >
      <h2
        className={classNames(
          'text-4xl font-semibold leading-tight mt-12 mb-8',
          'desktop:mt-16 desktop:mb-4 desktop:ml-auto desktop:w-2/3',
        )}
      >
        Our Products
      </h2>
      <div
        className={classNames(
          'flex flex-col justify-center items-center mb-12',
          'tablet:flex-row tablet:mb-4',
        )}
      >
        <div
          className={classNames('relative mt-2 mx-auto w-48', 'desktop:w-56')}
        >
          <Image
            src={'/svgs/session-mockup.svg'}
            alt={'Two smartphones with the Session logo displayed'}
            width={232}
            height={318}
            quality={100}
            lazyBoundary={`500px 200px`}
          />
        </div>
        <div
          className={classNames(
            'flex flex-col justify-center items-center text-center',
            'tablet:w-2/3 tablet:items-start tablet:text-left tablet:ml-12',
          )}
        >
          <h3
            className={classNames(
              'text-3xl font-semibold leading-tight mt-8 mb-4',
            )}
          >
            Session
          </h3>
          <p className={classNames('mb-8')}>
            Anonymous and encrypted messaging. Session puts a stop to
            surveillance with anonymous sign-up, onion routed messaging, and
            end-to-end encryption. Putting the private in private chat.
          </p>
          <div
            className={classNames(
              'flex justify-center items-center mb-4 w-full',
              'tablet:justify-start',
            )}
          >
            <Button color="secondary" shape={'round'}>
              <Link href="/products/session">
                <a aria-label="Link to product Session">Learn more</a>
              </Link>
            </Button>
            <Button color="secondary" type="text">
              <a
                href="https://getsession.org/download"
                aria-label="Link to Session Download Page"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          'flex flex-col justify-center items-center mb-12',
          'tablet:flex-row tablet:mt-12 tablet:mb-16',
        )}
      >
        <div className={classNames('relative mx-auto w-48', 'desktop:w-56')}>
          <Image
            src={'/svgs/lokinet-mockup.svg'}
            alt={'A laptop with the lokinet logo displayed'}
            width={270}
            height={295}
            quality={100}
            lazyBoundary={`500px 200px`}
          />
        </div>
        <div
          className={classNames(
            'flex flex-col justify-center items-center text-center',
            'tablet:w-2/3 tablet:items-start tablet:text-left tablet:ml-12',
          )}
        >
          <h3
            className={classNames(
              'text-3xl font-semibold leading-tight mt-8 mb-4',
            )}
          >
            Lokinet
          </h3>
          <p className={classNames('mb-8')}>
            Forget VPNs. Lokinet is the future of decentralised private
            networking. A lightning fast network anonymity app that lets you
            create, host, and browse a censorship resistant internet.
          </p>
          <div
            className={classNames(
              'flex justify-center items-center mb-4 w-full',
              'tablet:justify-start',
            )}
          >
            <Button color="secondary" shape={'round'}>
              <Link href="/products/lokinet">
                <a aria-label="Link to product Lokinet">Learn more</a>
              </Link>
            </Button>
            <Button color="secondary" type="text">
              <a
                href="https://lokinet.org/"
                aria-label="Link to Lokinet Website"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Contained>
  );
}
