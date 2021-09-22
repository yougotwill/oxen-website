import { ReactElement } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { Contained } from '../Contained';

import sessionImage from '../../assets/svgs/session-logo.svg';

export default function GetInvolved(): ReactElement {
  return (
    <Contained
      backgroundColor="secondary"
      classes={classNames(
        'pt-4 pb-16',
        'tablet:pb-32 tablet:flex tablet:flex-col tablet:justify-center tablet:items-center',
        'desktop:h-screen desktop:flex-row',
      )}
    >
      <div
        className={classNames(
          'flex flex-col justify-center items-center text-center pt-8',
          'tablet:max-w-lg',
          'desktop:pt-0 desktop:max-w-none desktop:w-1/2 desktop:text-left desktop:items-start',
        )}
      >
        <h2
          className={classNames(
            'text-4xl font-medium font-prompt leading-tight mb-4',
          )}
        >
          Get Involved
        </h2>
        <p className={classNames('text-2xl leading-snug mb-6')}>
          Something about the community and how it important it is etc hello
          josh, where’s the food something blah blah blah something or something
          something.
        </p>
        <p className={classNames('text-xl leading-snug mb-6')}>
          Here is some more detail about the privacy. Lorem ipsum dolor sit
          amet, consectetur
        </p>
      </div>
      <div
        className={classNames(
          'flex flex-wrap justify-center items-center text-center pt-4',
          'tablet:max-w-lg',
          'desktop:max-w-none desktop:w-1/2',
        )}
      >
        <div
          className={classNames(
            'relative bg-white rounded-full w-24 h-24 my-4 mx-5',
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
            'relative bg-white rounded-full w-24 h-24 my-4 mx-5',
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
            'relative bg-white rounded-full w-24 h-24 my-4 mx-5',
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
            'relative bg-white rounded-full w-24 h-24 my-4 mx-5',
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
            'relative bg-white rounded-full w-24 h-24 my-4 mx-5',
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
            'relative bg-white rounded-full w-24 h-24 my-4 mx-5',
          )}
        >
          <Image
            src={sessionImage}
            alt={'Oxen Logo Blue Background'}
            layout="fill"
          />
        </div>
      </div>
    </Contained>
  );
}
