import { ReactElement, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import classNames from 'classnames';

import { Contained } from '../Contained';

import { ReactComponent as OxenLogoSVG } from '../../assets/svgs/brand-dark.svg';
import { ReactComponent as TriangleSVG } from '../../assets/svgs/triangle.svg';
import { ReactComponent as TelegramSVG } from '../../assets/svgs/socials/telegram.svg';
import { ReactComponent as TwitterSVG } from '../../assets/svgs/socials/twitter.svg';

export default function Nav(): ReactElement {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleNav = () => {
    setIsExpanded(!isExpanded);
  };
  const mobileNavButtonClasses = classNames(
    'w-4 h-5 fill-current text-primary transform outline-none duration-300 cursor-pointer',
  );
  const navLinkClasses = classNames(
    'w-full py-2 border-primary',
    'desktop:pt-2 desktop:px-2 desktop:w-auto desktop:border-transparent desktop:border-b-3',
    isExpanded && 'border-t',
  );
  const navLinkHoverClasses = classNames(
    'transition-colors duration-300',
    'hover:bg-gray-200 desktop:hover:border-primary desktop:hover:text-primary desktop:hover:bg-transparent',
  );
  const svgClasses = classNames(
    'bg-primary text-white fill-current w-9 h-9 rounded-full mr-4',
    'transition duration-300',
    'hover:animate-push',
  );
  const isActiveNavLink = (url: string) => {
    return router.asPath.split(url).length > 1 && 'desktop:border-primary';
  };

  return (
    <Contained backgroundColor="white">
      <nav
        className={classNames(
          'relative flex flex-wrap items-center justify-between mx-auto py-8 z-10',
        )}
      >
        <div
          className={classNames(
            'flex items-center justify-between w-full',
            'desktop:w-1/3 desktop:p-0',
          )}
        >
          <Link href="/">
            <a>
              <OxenLogoSVG className={classNames('fill-current', 'h-10')} />
            </a>
          </Link>
          <div className={classNames('block ml-4', 'desktop:hidden')}>
            <button
              className="z-10 flex items-center py-2 pr-4 text-gray"
              onClick={toggleNav}
            >
              <TriangleSVG
                className={classNames(
                  mobileNavButtonClasses,
                  isExpanded ? 'rotate-90' : '',
                )}
              />
            </button>
          </div>
        </div>
        <div
          className={classNames(
            'bg-white absolute left-0 right-0 w-full overflow-hidden top-20',
            'desktop:relative desktop:overflow-visible desktop:w-2/3 desktop:top-0',
          )}
        >
          <div
            className={classNames(
              'flex flex-col items-start text-xl text-primary pt-2',
              'desktop:text-base desktop:flex-row desktop:items-center desktop:justify-end desktop:pt-0',
              'transform transition-all duration-300',
              isExpanded
                ? 'h-screen translate-y-0'
                : 'h-0 -translate-y-full desktop:translate-y-0',
            )}
          >
            <Link href="/blog">
              <a
                className={classNames(
                  navLinkClasses,
                  navLinkHoverClasses,
                  isActiveNavLink('/blog'),
                )}
              >
                Blog
              </a>
            </Link>
            <Link href="https://docs.oxen.io/">
              <a
                className={classNames(navLinkClasses, navLinkHoverClasses)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Docs
              </a>
            </Link>
            <Link href="/faq">
              <a
                className={classNames(
                  navLinkClasses,
                  navLinkHoverClasses,
                  isActiveNavLink('/faq'),
                )}
              >
                FAQ
              </a>
            </Link>
            <Link href="/team">
              <a
                className={classNames(
                  navLinkClasses,
                  navLinkHoverClasses,
                  isActiveNavLink('/team'),
                )}
              >
                Team
              </a>
            </Link>
            <Link href="/downloads">
              <a
                className={classNames(
                  navLinkClasses,
                  navLinkHoverClasses,
                  isActiveNavLink('/downloads'),
                )}
              >
                Downloads
              </a>
            </Link>
            <div className={classNames(navLinkClasses, 'flex pt-4')}>
              <Link href="https://twitter.com/Oxen_io">
                <a target="_blank" rel="noopener noreferrer">
                  <TwitterSVG className={svgClasses} />
                </a>
              </Link>
              <Link href="https://t.me/Oxen_Community">
                <a target="_blank" rel="noopener noreferrer">
                  <TelegramSVG className={svgClasses} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Contained>
  );
}
