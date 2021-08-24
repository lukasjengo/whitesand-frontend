import React from 'react';
import YouTube from 'react-youtube';
import { useAudioPlayer } from 'react-use-audio-player';

import { AudioPlayer } from './AudioPlayer';

export const Mywork = () => {
  const { pause } = useAudioPlayer();
  return (
    <section
      className="mx-auto px-6 xl:px-0 py-8 sm:py-12 max-w-7xl"
      id="my-work"
    >
      <div className="text-center">
        <h2 className="text-4xl sm:text-6xl">My work</h2>
        <h3 className="text-2xl opacity-60 tracking-wider sm:tracking-widest mt-4">
          Listen to my music
        </h3>
      </div>
      <div className="max-w-2xl mx-auto mt-16">
        <AudioPlayer />
      </div>
      <div className="text-center">
        <h3 className="text-2xl opacity-60 tracking-wider sm:tracking-widest mt-20">
          My music featuring in
        </h3>
      </div>
      <div className="grid md:grid-cols-2 gap-y-10 gap-x-20 lg:gap-x-40 xl:gap-x-56 items-center pb-0 md:pb-20 pt-16 sm:pt-20">
        <div>
          <h3 className="text-2xl sm:text-4xl max-w-sm">
            Blade Runner Mock-up Score
          </h3>
          <p className="font-sans text-base opacity-80 mt-8">
            Collaborated with a YouTuber for an original scoring inspired by the
            Blade Runner movies and sound. The project was well received and
            appreciated by the public.
          </p>
        </div>
        <div>
          <YouTube
            videoId="O4etinsAy34"
            opts={{
              width: '100%',
              playerVars: {
                autoplay: 0,
              },
            }}
            onPlay={() => pause()}
            className="border-2 gradient-border"
          />
        </div>
      </div>
    </section>
  );
};
