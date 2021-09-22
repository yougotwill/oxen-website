import { ReactElement } from 'react';
import classNames from 'classnames';

import { Contained } from '../Contained';

export default function Privacy(): ReactElement {
  return (
    <Contained
      backgroundColor="alt"
      classes={classNames(
        'pb-16',
        'tablet:flex tablet:flex-col tablet:justify-center tablet:items-center',
        'desktop:pb-24 desktop:h-screen desktop:flex-row',
      )}
    >
      <div
        className={classNames(
          'flex flex-col justify-center items-center text-center pt-8',
          'tablet:max-w-lg',
          'desktop:pt-0 desktop:max-w-none desktop:text-left desktop:items-start',
        )}
      >
        <h2
          className={classNames(
            'text-4xl font-medium font-prompt leading-tight mb-6',
          )}
        >
          Privacy
        </h2>
        <div
          className={classNames(
            'flex flex-col justify-center items-center text-center',
            'desktop:flex-row desktop:justify-start desktop:items-start desktop:text-left ',
          )}
        >
          <p
            className={classNames('text-2xl leading-snug mb-6', 'desktop:mr-4')}
          >
            Something about Privacy and why it’s important. How Privacy is built
            into the software because of these reasons. Basically convince
            people that your product is safe and that you follow some kind of
            ethos or whatever.
          </p>
          <p
            className={classNames('text-xl leading-snug mb-6', 'desktop:ml-4')}
          >
            Here is some more detail about the privacy. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <a href="#" className={'text-2xl font-semibold'}>
          Learn More
        </a>
      </div>
    </Contained>
  );
}
