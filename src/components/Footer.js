import React from 'react';

import { Spotify, Youtube } from '../icons';

export const Footer = () => {
  return (
    <footer className="px-6 pt-12 sm:pt-20 pb-6">
      <div className="flex justify-center">
        <a
          href="https://open.spotify.com/artist/3GXunV3wsCpSdKp0L5tcNH"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <Spotify className="w-6 h-6" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCe96JG5gdgSRtmqStx0isXA"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <Youtube className="w-6 h-6 ml-4" />
        </a>
      </div>
      <div className="lowercase text-xs opacity-70 mt-6 text-center">
        Design & code by{' '}
        <a
          href="https://ljandev.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline opacity-70 hover:opacity-100 transition-opacity"
        >
          ljandev.com
        </a>
      </div>
    </footer>
  );
};
