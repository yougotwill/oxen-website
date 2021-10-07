import { ReactElement, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import classNames from 'classnames';

import { useScreen } from '../../contexts/screen';

import { Contained, containerStyles } from '../Contained';

import { ReactComponent as OxenLogoSVG } from '../../assets/svgs/brand-dark.svg';
import { ReactComponent as TriangleSVG } from '../../assets/svgs/triangle.svg';
import { ReactComponent as TelegramSVG } from '../../assets/svgs/socials/telegram.svg';
import { ReactComponent as TwitterSVG } from '../../assets/svgs/socials/twitter.svg';

export default function Nav(): ReactElement {
  const router = useRouter();
  const { isMobile, isTablet } = useScreen();
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleNav = () => {
    setIsExpanded(!isExpanded);
  };

  const mobileNavButtonClasses = classNames(
    'w-4 h-5 fill-current text-primary transform outline-none duration-300 cursor-pointer',
  );
  const navLinkClasses = classNames(
    'w-full py-2 border-primary',
    'desktop:pt-2 desktop:px-4 desktop:w-auto desktop:border-transparent desktop:border-b-3',
    isExpanded && 'border-t',
  );
  const navLinkHoverClasses = classNames(
    'transition-colors duration-300',
    'hover:bg-gray-200 desktop:hover:border-primary desktop:hover:text-primary desktop:hover:bg-transparent',
  );
  const svgClasses = classNames(
    'bg-primary text-white fill-current w-9 h-9 rounded-full mr-4',
    'desktop:mr-3',
    'transition duration-300',
    'hover:animate-push',
  );

  const isActiveNavLink = (url: string) => {
    return router.asPath.includes(url) !== false && 'desktop:border-primary';
  };

  useEffect(() => {
    setIsExpanded(false);
  }, []);

  return (
    <nav
      role="navigation"
      className={classNames('w-full relative mx-auto py-8 z-10')}
    >
      <Contained
        backgroundColor="white"
        classes={'flex flex-wrap items-center justify-between '}
      >
        <div
          className={classNames(
            'flex items-center justify-between w-full',
            'desktop:w-1/3 desktop:p-0',
          )}
        >
          <Link href="/">
            <a aria-label="Link to Homepage">
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
          style={{
            paddingLeft:
              isMobile || isTablet ? containerStyles.paddingLeft : undefined,
            paddingRight:
              isMobile || isTablet ? containerStyles.paddingRight : undefined,
          }}
        >
          <div
            className={classNames(
              'flex flex-col items-start text-xl text-primary',
              'desktop:text-base desktop:flex-row desktop:items-center desktop:justify-end desktop:pt-0',
              'transform transition-all duration-300',
              isExpanded
                ? 'pt-2 h-screen translate-y-0'
                : 'h-0 -translate-y-full desktop:translate-y-0',
            )}
          >
            <Link href="/Products">
              <a
                aria-label="Link to Oxen Products"
                className={classNames(
                  navLinkClasses,
                  navLinkHoverClasses,
                  isActiveNavLink('/products'),
                  isActiveNavLink('/products/'),
                )}
              >
                Products
              </a>
            </Link>
            <Link href="/learn">
              <a
                aria-label="Link to learning more about Oxen"
                className={classNames(
                  navLinkClasses,
                  navLinkHoverClasses,
                  isActiveNavLink('/learn'),
                )}
              >
                Learn
              </a>
            </Link>
            <Link href="/news">
              <a
                aria-label="Link to News page"
                className={classNames(
                  navLinkClasses,
                  navLinkHoverClasses,
                  isActiveNavLink('/news'),
                )}
              >
                News
              </a>
            </Link>
            <div className={classNames(navLinkClasses, 'flex pt-4')}>
              <Link href="https://twitter.com/Oxen_io">
                <a
                  aria-label="Link to Oxen Twitter page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterSVG className={svgClasses} />
                </a>
              </Link>
              <Link href="https://t.me/Oxen_Community">
                <a
                  aria-label="Link to Oxen Telegram Group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TelegramSVG className={svgClasses} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Contained>
    </nav>
  );
}
