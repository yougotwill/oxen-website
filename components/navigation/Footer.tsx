import { ReactElement } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { useScreen } from '../../contexts/screen';

import { Contained } from '../Contained';
import EmailSignup from '../EmailSignup';

export interface Props {}

export default function Footer(props: Props): ReactElement {
  const {} = props;
  const { isMobile } = useScreen();
  const headingClasses = classNames(
    'text-white text-xl font-semibold mb-2',
    'desktop:text-2xl',
  );
  const linkClasses = (isOrgLink = false) => {
    return classNames(
      'text-md py-2 mr-2',
      'tablet:text-sm tablet:mr-8',
      'desktop:text-lg',
      'transition-colors duration-300',
      isOrgLink
        ? 'text-secondary font-light hover:text-white'
        : 'hover:text-secondary',
    );
  };

  return (
    <Contained
      backgroundColor="primary"
      classes={classNames('text-white', 'tablet:flex tablet:pt-16 tablet:pb-8')}
    >
      <EmailSignup
        backgroundColor="primary"
        border={false}
        buttonAlign={isMobile ? 'center' : 'left'}
        textAlign={isMobile ? 'center' : 'left'}
        classes={classNames(
          'pt-16 px-8',
          'tablet:pt-0 tablet:px-0 tablet:mx-0 tablet:w-1/2',
          'desktop:w-2/3 desktop:px-0',
        )}
      />
      <footer className={classNames('tablet:w-1/2')}>
        <div
          className={classNames(
            'flex flex-row-reverse justify-between pt-6 px-8 pb-12',
            'tablet:flex-row tablet:pt-0 tablet:pl-16 tablet:pr-0 tablet:pb-8',
            'desktop:pt-12',
          )}
        >
          <div
            className={classNames(
              'flex flex-col mb-4',
              'tablet:flex-wrap tablet:h-48 tablet:-mt-1',
              'desktop:mt-0',
              'xl:ml-12',
            )}
          >
            <Link href="/tag/dev-update">
              <a className={linkClasses()}>Dev Updates</a>
            </Link>
            <Link href="https://ethereum.oxen.io">
              <a
                className={linkClasses()}
                target="_blank"
                rel="noopener noreferrer"
              >
                $WOXEN
              </a>
            </Link>
            <Link href="/terms-of-service">
              <a className={linkClasses()}>Explorer</a>
            </Link>
            <Link href="/downloads">
              <a className={linkClasses()}>Downloads</a>
            </Link>
            <Link href="/faq">
              <a className={linkClasses()}>FAQ</a>
            </Link>
            <Link href="/team">
              <a className={linkClasses()}>Team</a>
            </Link>
            <Link href="/blog">
              <a className={linkClasses()}>Blog</a>
            </Link>
            <Link href="https://docs.oxen.io'">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={linkClasses()}
              >
                Docs
              </a>
            </Link>
          </div>
          <div
            className={classNames(
              'flex flex-col mt-1 mb-4',
              'tablet:mt-0',
              'desktop:-mr-12',
              'xl:-mr-36',
            )}
          >
            <h3 className={headingClasses}>Links</h3>
            <Link href="https://getsession.org/">
              <a
                className={linkClasses(true)}
                target="_blank"
                rel="noopener noreferrer"
              >
                getsession.org
              </a>
            </Link>
            <Link href="https://lokinet.org/">
              <a
                className={linkClasses(true)}
                target="_blank"
                rel="noopener noreferrer"
              >
                lokinet.org
              </a>
            </Link>
            <Link href="https://optf.ngo/">
              <a
                className={linkClasses(true)}
                target="_blank"
                rel="noopener noreferrer"
              >
                optf.ngo
              </a>
            </Link>
          </div>
        </div>
      </footer>
    </Contained>
  );
}
