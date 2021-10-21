import { ReactElement, useState, useEffect } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { useScreen } from '../../contexts/screen';

import { Contained, containerStyles } from '../Contained';

import { ReactComponent as OxenLogoSVG } from '../../assets/svgs/brand-dark.svg';
import { ReactComponent as TriangleSVG } from '../../assets/svgs/triangle-outlined.svg';
import { ReactComponent as TelegramSVG } from '../../assets/svgs/socials/telegram.svg';
import { ReactComponent as TwitterSVG } from '../../assets/svgs/socials/twitter.svg';
import { NAVIGATION } from '../../constants';
import NavItem, { navLinkClasses } from './NavItem';

export default function Nav(): ReactElement {
  const { isMobile, isTablet } = useScreen();
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleNav = () => {
    setIsExpanded(!isExpanded);
  };

  const mobileNavButtonClasses = classNames(
    'w-4 h-5 fill-current transform outline-none duration-300 cursor-pointer',
  );

  const svgClasses = classNames(
    'bg-primary text-white fill-current w-9 h-9 rounded-full mr-4',
    'desktop:mr-3',
    'transition duration-300',
    'hover:animate-push',
  );

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
                  isExpanded ? 'rotate-90 text-primary' : 'text-transparent',
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
            {Object.entries(NAVIGATION.NAV_ITEMS).map(([key, value], index) => {
              return (
                <NavItem
                  key={`${key}${index}`}
                  navItem={value}
                  title={key}
                  isExpanded={isExpanded}
                />
              );
            })}
            <div
              className={classNames(navLinkClasses(isExpanded), 'flex pt-4')}
            >
              <NavItem
                navItem={{
                  href: 'https://twitter.com/Oxen_io',
                  alt: 'Link to Oxen Twitter page',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                }}
                title={<TwitterSVG className={svgClasses} />}
                isIcon={true}
                hoverEffect={false}
              />
              <NavItem
                navItem={{
                  href: 'https://t.me/Oxen_Community',
                  alt: 'Link to Oxen Telegram Group',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                }}
                title={<TelegramSVG className={svgClasses} />}
                isIcon={true}
                hoverEffect={false}
              />
            </div>
          </div>
        </div>
      </Contained>
    </nav>
  );
}
