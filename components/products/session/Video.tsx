import { Contained } from '../../Contained';
import { ReactElement } from 'react';
import VideoPlayer from '../../VideoPlayer';
import { VideoPlayerProps } from '../../VideoPlayer';
import classNames from 'classnames';

export default function Video(): ReactElement {
  const videoProps: VideoPlayerProps = {
    shape: 'rounded',
    hasQualityLevels: true,
    poster: '/videos/this-is-session/thumbnail.webp',
    sources: [
      {
        src: '/videos/this-is-session/1080p.mp4',
        type: 'video/mp4',
        label: '1080p',
      },
      {
        src: '/videos/this-is-session/720p.mp4',
        type: 'video/mp4',
        label: '720p',
        selected: true,
      },
      {
        src: '/videos/this-is-session/480p.mp4',
        type: 'video/mp4',
        label: '480p',
      },
      {
        src: '/videos/this-is-session/360p.mp4',
        type: 'video/mp4',
        label: '360p',
      },
      {
        src: '/videos/this-is-session/240p.mp4',
        type: 'video/mp4',
        label: '240p',
      },
      {
        src: '/videos/this-is-session/144p.mp4',
        type: 'video/mp4',
        label: '144p',
      },
    ],
  };
  return (
    <Contained
      backgroundColor="primary"
      classes={classNames(
        'flex justify-center items-center',
        'enormous:pt-8 enormous:pb-16',
      )}
    >
      <div
        className={classNames(
          'py-16 mx-auto',
          'tablet:py-32',
          'desktop:py-64 desktop:-mt-24',
          'xl:-mt-32',
          'huge:-mt-16',
        )}
      >
        <VideoPlayer {...videoProps} />
      </div>
    </Contained>
  );
}
