import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

import { Contained } from '../Contained';

export default function GetInvolved(): ReactElement {
  return (
    <Contained
      backgroundColor="secondary"
      classes={classNames(
        'text-white pb-24',
        'tablet:flex tablet:flex-col tablet:justify-center tablet:items-center',
        'desktop:pb-64 desktop:flex-row desktop:justify-between',
      )}
    >
      <div
        className={classNames(
          'flex flex-col justify-center items-center text-center',
          'tablet:max-w-lg',
          'desktop:max-w-none desktop:w-1/2 desktop:text-left desktop:items-start desktop:-mt-8',
          'xl:w-7/12',
        )}
      >
        <h2
          className={classNames(
            'text-5xl font-medium font-prompt leading-tight mt-2 mb-8',
            'tablet:my-8',
            'desktop:text-4xl',
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
          'tablet:max-w-2xl tablet:mt-8',
          'desktop:max-w-none desktop:justify-end desktop:w-1/2 desktop:mt-16',
          'xl:-mr-16',
        )}
      >
        <a
          href="https://discord.com/invite/67GXfD6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={classNames(
              'bg-alt rounded-full w-28 h-28 my-4 mx-5 flex justify-center items-center',
              'desktop:ml-0 desktop:mr-3 desktop:w-24 desktop:h-24',
              'transition duration-300',
              'hover:animate-push',
            )}
          >
            <div
              className={classNames(
                'relative w-20 h-20',
                'desktop:w-16 desktop:h-16',
              )}
            >
              <Image
                src={'/svgs/community/discord.svg'}
                alt={'Isomorphic Discord logo'}
                layout={'fill'}
                quality={100}
                priority={true}
                lazyBoundary={`500px 200px`}
              />
            </div>
          </div>
        </a>
        <a
          href="https://www.youtube.com/channel/UCN7LL0dEffQ7FSjbY5wwlnw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={classNames(
              'bg-alt rounded-full w-28 h-28 my-4 mx-5 flex justify-center items-center',
              'desktop:ml-0 desktop:mr-3 desktop:w-24 desktop:h-24',
              'transition duration-300',
              'hover:animate-push',
            )}
          >
            <div
              className={classNames(
                'relative w-20 h-20',
                'desktop:w-16 desktop:h-16',
              )}
            >
              <Image
                src={'/svgs/community/youtube.svg'}
                alt={'Isomorphic YouTube logo'}
                layout={'fill'}
                quality={100}
                priority={true}
                lazyBoundary={`500px 200px`}
              />
            </div>
          </div>
        </a>
        <a
          href="https://twitter.com/Oxen_io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={classNames(
              'bg-alt rounded-full w-28 h-28 my-4 mx-5 flex justify-center items-center',
              'desktop:ml-0 desktop:mr-3 desktop:w-24 desktop:h-24',
              'transition duration-300',
              'hover:animate-push',
            )}
          >
            <div
              className={classNames(
                'relative w-20 h-20',
                'desktop:w-16 desktop:h-16',
              )}
            >
              <Image
                src={'/svgs/community/twitter.svg'}
                alt={'Isomorphic Twitter logo'}
                layout={'fill'}
                quality={100}
                priority={true}
                lazyBoundary={`500px 200px`}
              />
            </div>
          </div>
        </a>
        <a
          href="https://t.me/Oxen_Community"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={classNames(
              'bg-alt rounded-full w-28 h-28 my-4 mx-5 flex justify-center items-center',
              'desktop:ml-0 desktop:mr-3 desktop:w-24 desktop:h-24',
              'transition duration-300',
              'hover:animate-push',
            )}
          >
            <div
              className={classNames(
                'relative w-20 h-20',
                'desktop:w-16 desktop:h-16',
              )}
            >
              <Image
                src={'/svgs/community/telegram.svg'}
                alt={'Isomorphic Telegram logo'}
                layout={'fill'}
                quality={100}
                priority={true}
                lazyBoundary={`500px 200px`}
              />
            </div>
          </div>
        </a>
        <a
          href="https://github.com/oxen-io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={classNames(
              'bg-alt rounded-full w-28 h-28 my-4 mx-5 flex justify-center items-center',
              'desktop:ml-0 desktop:mr-3 desktop:w-24 desktop:h-24',
              'transition duration-300',
              'hover:animate-push',
            )}
          >
            <div
              className={classNames(
                'relative w-20 h-20',
                'desktop:w-16 desktop:h-16',
              )}
            >
              <Image
                src={'/svgs/community/github.svg'}
                alt={'Isomorphic Github logo'}
                layout={'fill'}
                quality={100}
                priority={true}
                lazyBoundary={`500px 200px`}
              />
            </div>
          </div>
        </a>
        <a
          href="https://www.reddit.com/r/oxen_io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={classNames(
              'bg-alt rounded-full w-28 h-28 my-4 mx-5 flex justify-center items-center',
              'desktop:ml-0 desktop:mr-3 desktop:w-24 desktop:h-24',
              'transition duration-300',
              'hover:animate-push',
            )}
          >
            <div
              className={classNames(
                'relative w-20 h-20',
                'desktop:w-16 desktop:h-16',
              )}
            >
              <Image
                src={'/svgs/community/reddit.svg'}
                alt={'Isomorphic Reddit logo'}
                layout={'fill'}
                quality={100}
                priority={true}
                lazyBoundary={`500px 200px`}
              />
            </div>
          </div>
        </a>
        <a
          href="https://sessiongroups.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={classNames(
              'bg-alt rounded-full w-28 h-28 my-4 mx-5 flex justify-center items-center',
              'desktop:ml-0 desktop:mr-3 desktop:w-24 desktop:h-24',
              'transition duration-300',
              'hover:animate-push',
            )}
          >
            <div
              className={classNames(
                'relative w-20 h-20',
                'desktop:w-16 desktop:h-16',
              )}
            >
              <Image
                src={'/svgs/community/session.svg'}
                alt={'Isomorphic Session logo'}
                layout={'fill'}
                quality={100}
                priority={true}
                lazyBoundary={`500px 200px`}
              />
            </div>
          </div>
        </a>
        <Link href="/feed">
          <a target="_self">
            <div
              className={classNames(
                'bg-alt rounded-full w-28 h-28 my-4 mx-5 flex justify-center items-center',
                'desktop:ml-0 desktop:mr-3 desktop:w-24 desktop:h-24',
                'transition duration-300',
                'hover:animate-push',
              )}
            >
              <div
                className={classNames(
                  'relative w-20 h-20',
                  'desktop:w-16 desktop:h-16',
                )}
              >
                <Image
                  src={'/svgs/community/rss.svg'}
                  alt={'Isomorphic RSS logo'}
                  layout={'fill'}
                  quality={100}
                  priority={true}
                  lazyBoundary={`500px 200px`}
                />
              </div>
            </div>
          </a>
        </Link>
      </div>
    </Contained>
  );
}
