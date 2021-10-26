import { Contained } from '../components/Contained';
import { ReactElement } from 'react';
import classNames from 'classnames';

export default function LockedPage(): ReactElement {
  return (
    <Contained
      classes={classNames(
        'pt-8 pb-20 px-2 mx-auto text-center',
        'tablet:flex tablet:flex-col tablet:justify-center tablet:items-center tablet:h-screen tablet:-mt-32',
      )}
    >
      <h1 className={classNames('text-primary-dark text-5xl font-bold mb-8')}>
        You don&apos;t have access to this page.
      </h1>
    </Contained>
  );
}
