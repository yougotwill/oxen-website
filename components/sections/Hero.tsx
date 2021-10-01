import { ReactElement } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { Button } from '../Button';
import { Contained } from '../Contained';

export default function Hero(): ReactElement {
  return (
    <Contained
      backgroundColor="white"
      classes={classNames(
        'h-full',
        'tablet:flex tablet:flex-col tablet:justify-start tablet:items-center tablet:pt-8',
        'desktop:h-screen desktop:flex-row desktop:items-start desktop:pt-32 desktop:overflow-x-hidden',
      )}
    >
      <div
        className={classNames(
          'flex flex-col justify-center items-center text-center pt-2',
          'tablet:max-w-lg',
          'desktop:max-w-none desktop:w-1/2 desktop:text-left desktop:items-start',
        )}
      >
        <h1
          className={classNames(
            'text-primary text-4xl font-semibold font-prompt leading-tight mb-4',
            'desktop:w-3/4',
          )}
        >
          Privacy is possible
        </h1>
        <p className={classNames('text-2xl leading-tight')}>
          Oxen is a cryptocurrency powering a new class of interconnected
          privacy apps.
        </p>
        <div
          className={classNames(
            'flex justify-center items-center my-8 w-full',
            'desktop:justify-start',
          )}
        >
          <Button color="secondary" shape={'round'}>
            Learn more
          </Button>
          <Button color="secondary" type="text" className={''}>
            Our apps
          </Button>
        </div>
      </div>
      <div
        className={classNames(
          'relative py-8 mx-auto',
          'tablet:pt-16 tablet:pb-24 tablet:max-w-lg',
          'desktop:pt-0 desktop:pb-0 desktop:max-w-none desktop:-mt-24 desktop:-mr-24',
        )}
      >
        <Image
          src={'/svgs/hero.svg'}
          alt={'Oxen written in Neon Pink'}
          width={643}
          height={426}
          quality={100}
          priority={true}
        />
      </div>
    </Contained>
  );
}
