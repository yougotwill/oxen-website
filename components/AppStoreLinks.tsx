import Image from 'next/image';
import { LINKS } from '../constants';
import { ReactElement } from 'react';
import classNames from 'classnames';

interface Props {
  product: 'session' | 'lokinet';
  isBig?: boolean;
}

export default function AppStoreLinksSession(props: Props): ReactElement {
  const { product, isBig = false } = props;
  return (
    <div className={classNames('flex items-start')}>
      <a
        href={LINKS[product.toUpperCase()]['PLAYSTORE']}
        aria-label="Download link to the Google Playstore"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-2"
      >
        <Image
          src="/svgs/download-playstore.svg"
          width={isBig ? 224 : 149}
          height={isBig ? 66 : 44}
          layout="intrinsic"
          alt="Download link to the Google Playstore"
        />
      </a>
      <a
        href={LINKS[product.toUpperCase()]['APPSTORE']}
        aria-label="Download link to the Apple App Store"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2"
      >
        <Image
          src="/svgs/download-appstore.svg"
          width={isBig ? 196 : 128}
          height={isBig ? 67 : 45}
          layout="intrinsic"
          alt="Download link to the Apple App Store"
        />
      </a>
    </div>
  );
}
