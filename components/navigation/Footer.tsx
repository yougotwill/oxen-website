import { ReactElement } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { Contained } from '../Contained';

import { ReactComponent as OxenLogoSVG } from '../../assets/svgs/brand-light.svg';

export interface Props {}

export default function Footer(props: Props): ReactElement {
  const {} = props;

  return (
    <Contained backgroundColor="primary" classes={classNames('text-white')}>
      <footer>
        <div className="flex flex-grow pt-8 pb-24">
          <Link href="/">
            <a className="flex items-center flex-shrink-0 text-primary">
              <OxenLogoSVG className={classNames('fill-current', 'h-8')} />
            </a>
          </Link>
        </div>
      </footer>
    </Contained>
  );
}
