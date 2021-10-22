import { Contained } from '../../Contained';
import Image from 'next/image';
import { ReactElement } from 'react';
import classNames from 'classnames';

export default function Benefits(): ReactElement {
  const cardContainerClasses = classNames(
    'desktop:w-1/3 desktop:flex desktop:flex-col desktop:items-center',
  );
  const cardDescriptionClasses = classNames(
    'mt-12 mb-24 w-64',
    'desktop:w-60 desktop:h-36 desktop:my-0',
  );
  const cardHeadingClasses = classNames('font-semibold mb-4', 'desktop:mb-2');

  return (
    <Contained backgroundColor="alt" classes={classNames('py-4')}>
      <div
        className={classNames(
          'flex flex-col justify-center items-center pb-8',
          'tablet:max-w-lg tablet:mx-auto',
          'desktop:max-w-none desktop:mx-0 desktop:pb-24',
          'enormous:pt-8 enormous:pb-96',
        )}
      >
        <h2
          className={classNames(
            'text-3xl font-semibold leading-snug mb-6 mx-6 text-center',
            'desktop:w-full',
          )}
        >
          Session puts privacy first
        </h2>
        <div
          className={classNames(
            'text-xl flex flex-col justify-center items-center text-center pt-8',
            'tablet:w-full tablet:pt-16',
            'desktop:flex-row desktop:items-end desktop:text-lg desktop:px-16',
            'enormous:px-0',
          )}
        >
          <div className={cardContainerClasses}>
            <div
              className={classNames(
                'relative w-36 mx-auto mb-4',
                'desktop:mb-16',
              )}
            >
              <Image
                src="/svgs/session-no-numbers.svg"
                width={172}
                height={172}
                layout="responsive"
                alt="A crossed out sim card"
              />
            </div>
            <div className={cardDescriptionClasses}>
              <h3 className={cardHeadingClasses}>No Phone Numbers</h3>
              <p>
                Use Session anonymously. Message your friends using
                cryptographically secure Session IDs.
              </p>
            </div>
          </div>
          <div className={cardContainerClasses}>
            <div
              className={classNames(
                'relative w-40 mx-auto mb-4',
                'desktop:w-48 desktop:mb-16',
              )}
            >
              <Image
                src="/svgs/session-censorship-resistant.svg"
                width={227}
                height={172}
                layout="responsive"
                alt="A crossed out eye"
              />
            </div>
            <div className={cardDescriptionClasses}>
              <h3 className={cardHeadingClasses}>Censorship Resistant</h3>
              <p>
                No central servers make Session near-impossible to shut down.
              </p>
            </div>
          </div>
          <div className={cardContainerClasses}>
            <div
              className={classNames(
                'relative w-36 mx-auto mb-4',
                'desktop:pb-2 desktop:mb-12',
              )}
            >
              <Image
                src="/svgs/session-no-footprints.svg"
                width={173}
                height={195}
                layout="responsive"
                alt="Cross out footprints"
              />
            </div>
            <div className={cardDescriptionClasses}>
              <h3 className={cardHeadingClasses}>No Footprints </h3>
              <p>
                Session doesn’t track you or collect your data — so you never
                have to worry about data leaks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Contained>
  );
}
