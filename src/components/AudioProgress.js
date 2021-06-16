import React from 'react';
import { useAudioPosition } from 'react-use-audio-player';
import { AudioTime } from './AudioTime';

export const AudioProgress = () => {
  // TODO audioprogress check how author did it
  const { percentComplete, duration, seek, position } = useAudioPosition({
    highRefreshRate: true,
  });

  const goToPosition = React.useCallback(
    (percentage) => {
      seek(duration * percentage);
    },
    [duration, seek]
  );
  return (
    <div className="flex-1 flex flex-col ml-4">
      <AudioTime />
      <div>
        <div
          style={{ backgroundColor: 'rgba(236, 233, 228, .5)' }}
          className="cursor-pointer overflow-hidden h-1 mb-4 flex"
          onClick={(event) =>
            goToPosition(
              (event.clientX -
                event.currentTarget.getBoundingClientRect().left) /
                event.currentTarget.offsetWidth
            )
          }
        >
          <div
            style={{
              width: `${percentComplete}%`,
              backgroundColor: '#ECE9E4',
            }}
            className="flex justify-center"
          ></div>
        </div>
      </div>
    </div>
  );
};
