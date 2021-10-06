import { ReactElement } from 'react';
import classNames from 'classnames';

import { Contained } from '../Contained';
import { Button } from '../Button';

export default function Privacy(): ReactElement {
  return (
    <Contained
      backgroundColor="alt"
      ditherColor="secondary"
      ditherPosition={'bottom'}
      classes={classNames(
        'pb-16',
        'tablet:flex tablet:flex-col tablet:justify-center tablet:items-center tablet:pb-48',
        'desktop:flex-row desktop:pb-96',
      )}
    >
      <div
        className={classNames(
          'flex flex-col justify-center items-center text-center',
          'desktop:pt-0 desktop:text-left desktop:items-start',
        )}
      >
        <div
          className={classNames(
            'text-6xl font-medium font-prompt leading-tight mt-2 mb-6',
            'tablet:mb-8',
            'desktop:text-5xl desktop:mt-0 desktop:mb-12',
          )}
        >
          <h2 className={classNames('mb-2', 'tablet:inline')}>Work. </h2>
          <h2 className={classNames('mb-2', 'tablet:inline')}>Play. </h2>
          <h2 className={classNames('mb-2', 'tablet:inline')}>Privacy.</h2>
        </div>
        <div
          className={classNames(
            'flex flex-col justify-center items-center text-center',
            'tablet:max-w-lg',
            'desktop:max-w-none desktop:flex-row desktop:justify-start desktop:items-start desktop:text-left ',
          )}
        >
          <p
            className={classNames(
              'text-2xl leading-snug mb-6',
              'desktop:text-xl desktop:mr-8 desktop:w-1/2',
            )}
          >
            The internet is a whole new world. The internet is where we learn,
            work, and play every single day. It’s the biggest meeting place in
            human history, a 24/7 digital party where you can be yourself and
            find other people just like you. But what about our private lives?
            Moments you want to share with one person, not 7 billion? Private
            life has been left behind by the internet. Oxen is bringing it back.
          </p>
          <p
            className={classNames(
              'text-xl font-light leading-snug mb-6',
              'desktop:text-lg desktop:ml-8 desktop:w-1/2',
            )}
          >
            We’re programming privacy into the technology you use, so that your
            rights are protected. A line in the declaration of human rights. A
            line of code. Both of these are important to defending your rights.
            Remember, privacy doesn’t mean isolation — we’re stronger together.
            We’re bringing peace and privacy to the digital world, and you’re
            invited.
            <Button
              color="secondary"
              fontWeight="semibold"
              type="text"
              className={classNames('text-2xl mt-10 mx-auto', 'desktop:-ml-8')}
            >
              Learn More
            </Button>
          </p>
        </div>
      </div>
    </Contained>
  );
}
