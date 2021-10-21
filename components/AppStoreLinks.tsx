import Image from 'next/image';
import { ReactElement } from 'react';
import classNames from 'classnames';

export default function AppStoreLinks(): ReactElement {
  return (
    <div>
      <a
        href="https://play.google.com/store/apps/details?id=network.loki.messenger"
        aria-label="Download link to the Google Playstore"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-2"
      >
        <Image
          src="/svgs/download-playstore.svg"
          width={149}
          height={44}
          layout="intrinsic"
          alt="Download link to the Google Playstore"
        />
      </a>
      <a
        href="https://apps.apple.com/app/session-private-messenger/id1470168868?ls=1"
        aria-label="Download link to the Apple App Store"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2"
      >
        <Image
          src="/svgs/download-appstore.svg"
          width={129}
          height={46}
          layout="intrinsic"
          alt="Download link to the Apple App Store"
        />
      </a>
    </div>
  );
}
