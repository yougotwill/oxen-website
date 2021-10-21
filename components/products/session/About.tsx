import { Contained } from '../../Contained';
import Image from 'next/image';
import { ReactElement } from 'react';
import classNames from 'classnames';

export default function About(): ReactElement {
  return (
    <Contained backgroundColor="alt" classes={classNames('py-4')}>
      <div
        className={classNames(
          'flex flex-col justify-center items-center pb-8',
          'tablet:max-w-md tablet:mx-auto',
          'desktop:flex-row desktop:max-w-none desktop:mx-0 desktop:pb-24',
          'huge:pt-8 huge:pb-96',
        )}
      >
        <div
          className={classNames(
            'text-center',
            'desktop:w-1/2 desktop:text-left',
            'xl:mr-8',
          )}
        >
          <p className={classNames('text-2xl leading-snug mb-6')}>
            Session is an end-to-end encrypted messenger that minimises
            sensitive metadata, designed and built for people.
          </p>
        </div>
        <div
          className={classNames(
            'text-xl flex flex-col justify-center items-center text-center pt-12',
            'tablet:pt-16',
            'desktop:text-lg desktop:text-left desktop:w-1/2 desktop:pt-0',
            'xl:ml-8',
          )}
        >
          <div className={classNames('desktop:flex desktop:max-w-md')}>
            <div
              className={classNames(
                'relative w-24 mx-auto mb-4',
                'desktop:w-14',
              )}
            >
              <Image
                src="/svgs/session-group-chats.svg"
                width={53}
                height={32}
                layout="responsive"
                alt="A group of people"
              />
            </div>
            <div className={classNames('mb-16', 'desktop:mb-8 desktop:ml-8')}>
              <h3 className={classNames('font-semibold mb-4', 'desktop:mb-2')}>
                Group chats
              </h3>
              <p>Something shorter about group chats. Only a couple of lines</p>
            </div>
          </div>
          <div className={classNames('desktop:flex desktop:max-w-md')}>
            <div
              className={classNames(
                'relative w-10 mx-auto mb-4',
                'desktop:w-6 desktop:ml-3 desktop:mr-3',
              )}
            >
              <Image
                src="/svgs/session-voice-messages.svg"
                width={23}
                height={40}
                layout="responsive"
                alt="A microphone"
              />
            </div>
            <div className={classNames('mb-16', 'desktop:mb-8 desktop:ml-8')}>
              <h3 className={classNames('font-semibold mb-4', 'desktop:mb-2')}>
                Group chats
              </h3>
              <p>Something shorter about group chats. Only a couple of lines</p>
            </div>
          </div>
          <div className={classNames('desktop:flex desktop:max-w-md')}>
            <div
              className={classNames(
                'relative w-12 mx-auto mb-4',
                'desktop:w-8  desktop:ml-2 desktop:mr-2',
              )}
            >
              <Image
                src="/svgs/session-attachments.svg"
                width={33}
                height={45}
                layout="responsive"
                alt="A file with a paperclip icon"
              />
            </div>
            <div className={classNames('mb-16', 'desktop:mb-8 desktop:ml-8')}>
              <h3 className={classNames('font-semibold mb-4', 'desktop:mb-2')}>
                Group chats
              </h3>
              <p>Something shorter about group chats. Only a couple of lines</p>
            </div>
          </div>
        </div>
      </div>
    </Contained>
  );
}
