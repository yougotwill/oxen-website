import { ReactElement } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { Contained } from '../Contained';

export interface Props {}

export default function Footer(props: Props): ReactElement {
  const {} = props;

  return (
    <Contained backgroundColor="primary" classes={classNames('text-white')}>
      <footer>
        <div className="flex flex-grow pt-8 pb-24"></div>
      </footer>
    </Contained>
  );
}
