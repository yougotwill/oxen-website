import { ReactElement } from 'react';
import classNames from 'classnames';

import { METADATA } from '../constants';

import CustomHead from '../components/CustomHead';
import { Contained } from '../components/Contained';

export default function Custom404(): ReactElement {
  return (
    <>
      <CustomHead title={'404'} metadata={METADATA[404]} />
      <Contained
        classes={classNames(
          'pt-8 pb-20 px-2 mx-auto text-center',
          'tablet:flex tablet:flex-col tablet:justify-center tablet:items-center tablet:h-screen tablet:-mt-32',
        )}
      >
        <h1 className={classNames('text-primary-dark text-5xl font-bold mb-8')}>
          This page doesn&apos;t seem to exist.
        </h1>
        <p
          className={classNames(
            'text-gray text-xl font-medium',
            'desktop:text-2xl',
          )}
        >
          {METADATA[404].DESCRIPTION}
        </p>
      </Contained>
    </>
  );
}
