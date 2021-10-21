import AppStoreLinks from '../../AppStoreLinks';
import { Button } from '../../Button';
import { Contained } from '../../Contained';
import Image from 'next/image';
import { ReactElement } from 'react';
import classNames from 'classnames';

export default function Hero(): ReactElement {
  return (
    <Contained
      backgroundColor="white"
      ditherColor="alt"
      ditherPosition="bottom"
      classes={classNames(
        'h-full pb-16',
        'tablet:flex tablet:flex-col tablet:justify-start tablet:items-center tablet:pt-8',
        'desktop:h-screen desktop:flex-row desktop:items-start desktop:pt-32 desktop:overflow-hidden',
        'huge:h-full huge:pt-48 huge:pb-128',
      )}
    >
      <div
        className={classNames(
          'flex flex-col justify-center items-center text-center pt-2',
          'tablet:max-w-lg',
          'desktop:max-w-none desktop:w-1/2 desktop:text-left desktop:items-start',
        )}
        tabIndex={0}
      >
        <h1
          className={classNames(
            'text-primary text-4xl font-semibold leading-tight',
            'desktop:w-3/4',
          )}
        >
          Session
        </h1>
        <h2
          className={classNames(
            'text-primary text-xl font-semibold leading-tight mb-4',
            'tablet:text-2xl',
            'desktop:w-3/4',
          )}
        >
          Send messages, not metadata
        </h2>
        <p className={classNames('text-lg leading-tight', 'tablet:text-xl')}>
          <span className={classNames('tablet:whitespace-nowrap')}>
            No phone numbers. No central servers.
          </span>{' '}
          <span className={classNames('tablet:whitespace-nowrap')}>
            Fully open-source encrypted messaging.
          </span>{' '}
          <span className={classNames('tablet:whitespace-nowrap')}>
            Session is a truly private messenger.
          </span>
        </p>
        <div
          className={classNames(
            'flex flex-col justify-center items-center my-8 w-full',
            'desktop:items-start',
          )}
        >
          <AppStoreLinks />
          <Button
            color="secondary"
            shape={'round'}
            className={classNames('mt-8')}
          >
            <a
              href="https://getsession.org"
              aria-label="Link to Session Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </a>
          </Button>
        </div>
      </div>
      <div
        className={classNames(
          'relative mt-4 mb-8 mx-auto w-full h-80',
          'tablet:mt-8 tablet:mb-16 tablet:h-120',
          'desktop:mt-0 desktop:mb-0',
        )}
      >
        <Image
          src={'/svgs/session-mockup-1.svg'}
          alt={
            'Two phones next to each other. One showing the Session logo and the other showing a conversation.'
          }
          layout="fill"
          className={classNames('object-cover')}
          quality={100}
          priority={true}
          loading="eager"
        />
      </div>
    </Contained>
  );
}
