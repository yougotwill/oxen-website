import { ReactElement, ReactNode, useEffect, useState } from 'react';

import { INavItem } from '../../constants/navigation';
import Link from 'next/link';
import { ReactComponent as TriangleSVG } from '../../assets/svgs/triangle-outlined.svg';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useScreen } from '../../contexts/screen';

export interface DropdownProps {
  title: string | ReactNode; // social icons can be nav items
  navItem: INavItem;
}

export interface NavItemProps extends DropdownProps {
  isExpanded?: boolean;
  isIcon?: boolean;
  hoverEffect?: boolean;
}

function NavDropdown(props: DropdownProps): ReactElement {
  const { title, navItem } = props;
  const router = useRouter();

  const isActiveNavLink = (url: string) => {
    return router.asPath.includes(url) !== false;
  };

  const navItemClasses = url => {
    return classNames(
      'block w-full py-2',
      'desktop:pl-0 desktop:my-2 desktop:border desktop:rounded-xl desktop:text-center desktop:w-full',
      isActiveNavLink(url)
        ? 'desktop:bg-secondary desktop:text-white desktop:border-secondary'
        : 'desktop:bg-white desktop:border-gray-100',
    );
  };
  const navItemHoverClasses = classNames(
    'transition-colors duration-100',
    'hover:bg-secondary hover:text-white hover:border-secondary',
    'desktop:duration-300',
  );

  return (
    <span className={classNames('desktop:rounded-xl desktop:drop-shadow')}>
      <Link href={navItem.href}>
        <a
          aria-label={navItem.alt}
          target={navItem.target}
          ref={navItem.rel ?? undefined}
          className={classNames(
            navItemClasses(navItem.href),
            navItemHoverClasses,
          )}
        >
          {title}
        </a>
      </Link>
    </span>
  );
}

export const navLinkClasses = (expanded: boolean) =>
  classNames(
    'block w-full py-2 border-primary cursor-pointer',
    'desktop:pt-2 desktop:px-4 desktop:w-auto desktop:border-transparent desktop:border-b-3',
    expanded && 'border-t',
  );

const navLinkHoverClasses = classNames(
  'transition-colors duration-300',
  'hover:bg-gray-200 desktop:hover:border-primary desktop:hover:text-primary desktop:hover:bg-transparent',
);

export default function NavItem(props: NavItemProps): ReactElement {
  const {
    title,
    navItem,
    isExpanded,
    isIcon: isSVG = false,
    hoverEffect = true,
  } = props;
  const router = useRouter();
  const { isMobile, isTablet } = useScreen();
  const [IsDropdownExpanded, setIsDropdownExpanded] = useState(false);

  const isActiveNavLink = (url: string) => {
    return router.asPath.includes(url) !== false && 'desktop:border-primary';
  };

  useEffect(() => {
    setIsDropdownExpanded(false);
  }, [isExpanded]);

  return (
    <>
      {!navItem.items ? (
        <Link href={navItem.href}>
          <a
            aria-label={navItem.alt}
            target={navItem.target}
            rel={navItem.rel ?? undefined}
            className={classNames(
              !isSVG && navLinkClasses(isExpanded),
              isActiveNavLink(navItem.href),
              hoverEffect && navLinkHoverClasses,
            )}
          >
            {title}
          </a>
        </Link>
      ) : (
        <span className={classNames('w-full relative group', 'desktop:w-auto')}>
          <span
            aria-label={navItem.alt}
            className={classNames(
              !isSVG && navLinkClasses(isExpanded),
              'desktop:border-transparent desktop:border-b-3',
              'desktop:transform desktop:transition-colors duration-500',
              'desktop:group-hover:border-primary',
              isActiveNavLink(`${navItem.href}/`),
            )}
            onClick={() => setIsDropdownExpanded(!IsDropdownExpanded)}
          >
            {title}
            {(isMobile || isTablet) && (
              <TriangleSVG
                className={classNames(
                  'inline w-3 h-4 -mt-0.5 ml-3 fill-current transform outline-none duration-300',
                  IsDropdownExpanded
                    ? 'rotate-90 text-primary'
                    : 'text-transparent',
                )}
              />
            )}
          </span>
          <div
            className={classNames(
              'w-full overflow-hidden',
              'transform transition-all duration-300',
              'desktop:w-full desktop:overflow-visible desktop:opacity-0 desktop:absolute desktop:top-12',
              'desktop:duration-500',
              'desktop:group-hover:opacity-100 desktop:group-hover:duration-700',
              (isMobile || isTablet) && IsDropdownExpanded
                ? 'h-24 translate-y-0 -mb-1'
                : 'h-0 translate-y-auto desktop:h-auto desktop:translate-y-0',
            )}
          >
            {Object.entries(navItem.items).map(([key, value], index) => {
              return (
                <NavDropdown
                  key={`${key}${index}`}
                  navItem={value}
                  title={key}
                />
              );
            })}
          </div>
        </span>
      )}
    </>
  );
}
