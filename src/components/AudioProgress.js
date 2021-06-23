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
          className="cursor-pointer overflow-hidden h-1 mb-4 flex bg-gray bg-opacity-50"
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
            }}
            className="flex justify-center bg-gray"
          ></div>
        </div>
      </div>
    </div>
  );
};
