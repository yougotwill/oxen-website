import AppStoreLinks from '../../AppStoreLinks';
import { Button } from '../../Button';
import { Contained } from '../../Contained';
import { ReactElement } from 'react';
import classNames from 'classnames';

export default function CallToAction(): ReactElement {
  return (
    <Contained
      backgroundColor="white"
      classes={classNames(
        'flex flex-col justify-center items-center mb-10',
        'desktop:mb-16',
      )}
    >
      <Button
        color="secondary"
        shape={'round'}
        className={classNames('my-10', 'desktop:mt-12 desktop:mb-12')}
      >
        <a
          href="https://getsession.org"
          aria-label="Link to Session Website"
          target="_blank"
          rel="noopener noreferrer"
        >
          getsession.org
        </a>
      </Button>
      <AppStoreLinks isBig={true} />
    </Contained>
  );
}
