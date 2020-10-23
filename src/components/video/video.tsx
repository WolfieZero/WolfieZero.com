import React from 'react';

import { regexYoutube } from 'lib/links';

import styles from './video.module.scss';

export interface VideoProps {
  url: string;
}

const getYouTubeId = (url: string): string => {
  const split = url.match(regexYoutube);

  if (split !== null && split[1]) {
    return split[1];
  }

  return '';
};

export const Video: React.FC<VideoProps> = ({ url }) => {
  const youtubeId = getYouTubeId(url);

  return (
    <div className={styles.VideoContainer}>
      <iframe
        className={styles.VideoFrame}
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?ecver=1&iv_load_policy=1&rel=0&showinfo=0&yt:stretch=16:9&autohide=1&color=white`}
        width="560"
        height="315"
        frameBorder="0"
        allow="autoplay; encrypted-media"
      />
    </div>
  );
};
