import { ReactElement } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { Contained } from '../Contained';
import { Button } from '../Button';

import sessionImage from '../../assets/svgs/session-logo.svg';

export default function Products(): ReactElement {
  return (
    <Contained
      backgroundColor="primary"
      classes={classNames(
        'text-white flex flex-col justify-center items-center',
        'desktop:h-screen',
      )}
    >
      <h2
        className={classNames(
          'text-4xl font-semibold font-prompt leading-tight mt-16 mb-8',
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
          className={classNames(
            'relative bg-white rounded-full mt-8 w-48 h-48',
          )}
        >
          <Image
            src={sessionImage}
            alt={'Oxen Logo Blue Background'}
            layout="fill"
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
          <p className={classNames('mb-3')}>
            Session is an end-to-end encrypted messenger that minimises
            sensitive metadata, designed and built for people who want absolute
            privacy and freedom from any form of surveillance.
          </p>
          <p className={classNames('text-alt font-light mb-6')}>
            iOS Android Desktop
          </p>
          <div
            className={classNames(
              'flex justify-around items-center mb-4 w-full',
              'tablet:justify-start',
            )}
          >
            <Button color="secondary">Learn more</Button>
            <a href="#" className={classNames('font-semibold', 'tablet:ml-8')}>
              Download
            </a>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          'flex flex-col justify-center items-center mb-12',
          'tablet:flex-row tablet:mb-16',
        )}
      >
        <div
          className={classNames(
            'relative bg-white rounded-full mt-8 w-48 h-48',
          )}
        >
          <Image
            src={sessionImage}
            alt={'Oxen Logo Blue Background'}
            layout="fill"
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
          <p className={classNames('mb-3')}>
            Lokinet is powered by a decentralised network of staked nodes.
            Nobody can shut it down. Nobody can spy on you. Lokinet traffic is
            onion-routed. Your browsing is private, secure, and anonymous.
          </p>
          <p className={classNames('text-alt font-light mb-6')}>
            iOS Android Desktop
          </p>
          <div
            className={classNames(
              'flex justify-around items-center mb-4 w-full',
              'tablet:justify-start',
            )}
          >
            <Button color="secondary">Learn more</Button>
            <a href="#" className={classNames('font-semibold', 'tablet:ml-8')}>
              Download
            </a>
          </div>
        </div>
      </div>
    </Contained>
  );
}
