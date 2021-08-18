import React from 'react';
import { useAudioPosition } from 'react-use-audio-player';

import { formatTimeClock } from '../utils';

export const AudioTime = () => {
  const { duration, position } = useAudioPosition({ highRefreshRate: true });
  if (duration === Infinity) return null;
  const elapsed = typeof position === 'number' ? position : 0;

  return (
    <time className="text-4xl sm:text-6xl">
      {`${formatTimeClock(elapsed)} / ${formatTimeClock(duration)}`}
    </time>
  );
};
