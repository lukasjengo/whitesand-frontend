import React from 'react';
import { useAudioPlayer } from 'react-use-audio-player';

import { Pause, Play } from '../icons';
import { AudioProgress } from './AudioProgress';
import { PlayList } from './PlayList';

export const AudioPlayer = () => {
  const { togglePlayPause, playing, ready } = useAudioPlayer();

  return (
    <>
      <div className="flex items-center mt-16">
        <button
          onClick={() => {
            togglePlayPause();
          }}
          disabled={!ready}
          className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray hover:opacity-70 transition-opacity"
        >
          {playing ? (
            <Pause className="w-14 sm:w-20 h-w-14 sm:h-20" />
          ) : (
            <Play className="w-14 sm:w-20 h-w-14 sm:h-20" />
          )}
        </button>
        <AudioProgress />
      </div>
      <PlayList />
    </>
  );
};
