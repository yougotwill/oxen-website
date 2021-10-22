import 'video.js/dist/video-js.min.css';
import '@silvermine/videojs-quality-selector/dist/css/quality-selector.css';

import { ReactElement, useEffect, useRef } from 'react';
import videojs, { VideoJsPlayerOptions } from 'video.js';

// @ts-ignore
import QualitySelector from '@silvermine/videojs-quality-selector';
import classNames from 'classnames';
import { useScreen } from '../contexts/screen';

type Source = {
  src: string;
  type: string;
  label?: string; // video quality label
  selected?: boolean; // default video quality to load
};

export interface VideoPlayerProps {
  hasQualityLevels?: boolean;
  poster?: string;
  sources: Source[];
  shape: 'square' | 'rounded';
}

const videoOptions: VideoJsPlayerOptions = {
  controls: true,
  controlBar: {
    children: [
      'playToggle',
      'volumePanel',
      'currentTimeDisplay',
      'timeDivider',
      'durationDisplay',
      'progressControl',
      'qualitySelector',
      'fullscreenToggle',
    ],
  },
  fluid: true,
};

export default function VideoPlayer(props: VideoPlayerProps): ReactElement {
  const { isTablet, isDesktop, isXL, isHuge, isEnormous } = useScreen();
  const { hasQualityLevels = false, poster, sources, shape = 'square' } = props;

  const videoWidth = (() => {
    let width = 320;
    if (isTablet) {
      width = 672;
    }
    if (isDesktop) {
      width = 844;
    }
    if (isXL || isHuge || isEnormous) {
      width = 1100;
    }
    return width;
  })();

  if (hasQualityLevels) {
    QualitySelector(videojs);
  }
  videoOptions.poster = poster;
  videoOptions.sources = sources;

  const key = sources[0].src;
  const videoRef = useRef<HTMLVideoElement>(null);

  const shapeClasses = [
    shape === 'square' && '',
    shape === 'rounded' && 'rounded-2xl overflow-hidden',
  ];

  useEffect(() => {
    if (null !== videoRef.current) {
      videojs(videoRef.current, videoOptions);
    }
    return () => {
      const players = videojs.getAllPlayers();
      if (players && players.length > 0) {
        players.forEach(player => {
          player.dispose();
        });
      }
    };
  }, []);

  return (
    <div className={classNames(shapeClasses)} style={{ width: videoWidth }}>
      <div data-vjs-player key={key}>
        <video ref={videoRef} className="video-js vjs-big-play-centered" />
      </div>
    </div>
  );
}
