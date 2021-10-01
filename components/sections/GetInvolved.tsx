import { ReactElement } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { Contained } from '../Contained';

export default function GetInvolved(): ReactElement {
  return (
    <Contained
      backgroundColor="secondary"
      classes={classNames(
        'text-white pt-4 pb-24',
        'tablet:flex tablet:flex-col tablet:justify-center tablet:items-center',
        'desktop:pb-36 desktop:flex-row desktop:justify-between',
      )}
    >
      <div
        className={classNames(
          'flex flex-col justify-center items-center text-center pt-8',
          'tablet:max-w-lg',
          'desktop:pt-0 desktop:max-w-none desktop:w-7/12 desktop:text-left desktop:items-start',
        )}
      >
        <h2
          className={classNames(
            'text-5xl font-medium font-prompt leading-tight mt-2 mb-8',
            'tablet:my-8',
            'desktop:text-4xl desktop:mt-16',
          )}
        >
          Get Involved
        </h2>
        <p className={classNames('text-2xl leading-snug mb-6')}>
          Our community is full of people just like you — whoever you are. We’re
          all working together to restore digital privacy. Bring your friends,
          bring your family. Everyone is welcome.
        </p>
        <p
          className={classNames(
            'text-xl font-light leading-snug mb-6',
            'desktop:max-w-lg',
          )}
        >
          Enter the conversation. Buy Oxen. Write code. Contribute to privacy
          and join us.
        </p>
      </div>
      <div
        className={classNames(
          'flex flex-wrap justify-center items-center text-center',
          'tablet:max-w-lg tablet:mt-8',
          'desktop:max-w-none desktop:justify-end desktop:w-5/12 xl:-mr-16',
        )}
      >
        <a
          href="https://www.youtube.com/channel/UCN7LL0dEffQ7FSjbY5wwlnw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={classNames(
              'relative bg-alt rounded-full w-28 h-28 my-4 mx-5 p-4',
              'desktop:ml-0 desktop:mr-3',
              'transition duration-300',
              'hover:animate-push',
            )}
          >
            <Image
              src={'/svgs/community/youtube.svg'}
              alt={'Isomorphic YouTube logo'}
              width={64}
              height={73}
              quality={100}
            />
          </div>
        </a>
        <a
          href="https://twitter.com/Oxen_io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={classNames(
              'relative bg-alt rounded-full w-28 h-28 my-4 mx-5 p-4',
              'desktop:ml-0 desktop:mr-3',
              'transition duration-300',
              'hover:animate-push',
            )}
          >
            <Image
              src={'/svgs/community/twitter.svg'}
              alt={'Isomorphic Twitter logo'}
              width={64}
              height={73}
              quality={100}
            />
          </div>
        </a>
        <a
          href="https://t.me/Oxen_Community"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={classNames(
              'relative bg-alt rounded-full w-28 h-28 my-4 mx-5 p-4',
              'desktop:ml-0 desktop:mr-3',
              'transition duration-300',
              'hover:animate-push',
            )}
          >
            <Image
              src={'/svgs/community/telegram.svg'}
              alt={'Isomorphic Telegram logo'}
              width={60}
              height={71}
              quality={100}
            />
          </div>
        </a>
        <a
          href="https://github.com/oxen-io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={classNames(
              'relative bg-alt rounded-full w-28 h-28 my-4 mx-5 p-4',
              'desktop:ml-0 desktop:mr-3',
              'transition duration-300',
              'hover:animate-push',
            )}
          >
            <Image
              src={'/svgs/community/github.svg'}
              alt={'Isomorphic Github logo'}
              width={62}
              height={74}
              quality={100}
            />
          </div>
        </a>
        <a
          href="https://www.reddit.com/r/oxen_io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={classNames(
              'relative bg-alt rounded-full w-28 h-28 my-4 mx-5 p-4',
              'desktop:ml-0 desktop:mr-3',
              'transition duration-300',
              'hover:animate-push',
            )}
          >
            <Image
              src={'/svgs/community/reddit.svg'}
              alt={'Isomorphic Reddit logo'}
              width={64}
              height={80}
              quality={100}
            />
          </div>
        </a>
        <a
          href="https://sessiongroups.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={classNames(
              'relative bg-alt rounded-full w-28 h-28 my-4 mx-5 p-4',
              'desktop:ml-0 desktop:mr-3',
              'transition duration-300',
              'hover:animate-push',
            )}
          >
            <Image
              src={'/svgs/community/session.svg'}
              alt={'Isomorphic Session logo'}
              width={52}
              height={77}
              quality={100}
            />
          </div>
        </a>
      </div>
    </Contained>
  );
}
