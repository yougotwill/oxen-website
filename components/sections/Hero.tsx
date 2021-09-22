import { ReactElement } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { Button } from '../Button';
import bannerImage from '../../public/site-banner.png';
import { Contained } from '../Contained';

export default function Hero(): ReactElement {
  return (
    <Contained
      backgroundColor="secondary"
      classes={classNames(
        'h-screen',
        'tablet:flex tablet:flex-col tablet:justify-center tablet:items-center',
        'desktop:flex-row desktop:items-start desktop:pt-40',
      )}
    >
      <div
        className={classNames(
          'flex flex-col justify-center items-center text-center pt-8',
          'tablet:max-w-2xl',
          'desktop:max-w-none desktop:w-1/2 desktop:text-left desktop:items-start',
        )}
      >
        <h1
          className={classNames(
            'text-primary text-4xl font-semibold font-prompt leading-tight mb-4',
            'desktop:w-3/4',
          )}
        >
          Crypto powering private applications
        </h1>
        <p className={classNames('text-2xl leading-tight')}>
          Oxen is this and that, and we use the power of blockchain blah blah
          blah.
        </p>
        <div
          className={classNames(
            'flex justify-around items-center mt-6 mb-4 w-full',
            'tablet:justify-center',
            'desktop:justify-start',
          )}
        >
          <Button color="primary">Learn more</Button>
          <Button color="primary" type="text" className={'underline'}>
            View our products
          </Button>
        </div>
      </div>
      <div
        className={classNames(
          'relative mt-8',
          'tablet:max-w-lg',
          'desktop:max-w-none desktop:w-1/2 desktop:px-8',
        )}
      >
        <Image src={bannerImage} alt={'Oxen Logo Blue Background'} />
      </div>
    </Contained>
  );
}
