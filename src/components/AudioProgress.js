import React from 'react';
import { useAudioPosition } from 'react-use-audio-player';
import { AudioTime } from '../components';

export const AudioProgress = () => {
  const { percentComplete, duration, seek } = useAudioPosition({
    highRefreshRate: true,
  });

  const [barWidth, setBarWidth] = React.useState('0%');

  const seekBarRef = React.useRef(null);

  React.useEffect(() => {
    setBarWidth(`${percentComplete}%`);
  }, [percentComplete]);

  const goToPosition = React.useCallback(
    (event) => {
      const { pageX: eventOffsetX } = event;

      if (seekBarRef.current) {
        const elementOffsetX = seekBarRef.current.offsetLeft;
        const elementWidth = seekBarRef.current.clientWidth;
        const percent = (eventOffsetX - elementOffsetX) / elementWidth;
        seek(percent * duration);
      }
    },
    [duration, seek]
  );

  return (
    <div className="flex-1 flex flex-col ml-4">
      <AudioTime />
      <div>
        <div
          className="cursor-pointer overflow-hidden h-1 mb-4 flex bg-gray bg-opacity-50"
          onClick={goToPosition}
          ref={seekBarRef}
        >
          <div
            style={{
              width: barWidth,
            }}
            className="flex justify-center bg-gray"
          ></div>
        </div>
      </div>
    </div>
  );
};
