import { ReactElement } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { Contained } from '../Contained';
import { Button } from '../Button';

import sessionMockup from '../../assets/svgs/session-mockup.svg';
import lokinetMockup from '../../assets/svgs/lokinet-mockup.svg';

export default function Products(): ReactElement {
  return (
    <Contained
      backgroundColor="white"
      classes={classNames(
        'flex flex-col justify-center items-center pb-8',
        'tablet:pb-24',
        'desktop:items-start desktop:pb-16',
      )}
    >
      <h2
        className={classNames(
          'text-4xl font-semibold font-prompt leading-tight mt-16 mb-8',
          'desktop:mt-12 desktop:mb-4 desktop:ml-auto desktop:w-2/3',
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
            src={sessionMockup}
            alt={'Two smartphones with the Session logo displayed'}
            width={232}
            height={318}
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
              'text-3xl font-semibold font-prompt leading-tight mt-8 mb-4',
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
              Learn more
            </Button>
            <Button color="secondary" type="text">
              Download
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
            src={lokinetMockup}
            alt={'A laptop with the lokinet logo displayed'}
            width={270}
            height={295}
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
              'text-3xl font-semibold font-prompt leading-tight mt-8 mb-4',
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
              Learn more
            </Button>
            <Button color="secondary" type="text">
              Download
            </Button>
          </div>
        </div>
      </div>
    </Contained>
  );
}
