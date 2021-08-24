import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { WaveLong } from '../icons/WaveLong';
import { Button } from './Button';

export const Hero = () => {
  return (
    <header className="relative h-screen">
      <div className="absolute inset-0">
        <StaticImage
          objectFit="cover"
          objectPosition="top"
          alt="dark sand dunes"
          role="presentation"
          src="../assets/images/hero-sand-dunes.jpg"
          formats={['auto', 'webp', 'avif']}
          quality={100}
          className="h-full w-full object-cover"
          placeholder="dominantColor"
        />
        <div
          className="absolute inset-x-0 from-transparent to-black bg-gradient-to-b"
          style={{
            bottom: 0,
            top: '80%',
          }}
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-around">
        <div className="flex flex-col justify-center h-4/6">
          <h1 className="text-center text-5xl sm:text-7xl lg:text-8xl">
            Whitesand
          </h1>
          <div className="flex justify-center items-center mt-10">
            <h3 className="text-xs sm:text-lg tracking-wider sm:tracking-widest opacity-70 px-3 sm:px-6 lg:px-8">
              Musician
            </h3>
            <div>
              <WaveLong className="w-4 sm:w-6 lg:w-10 h-1" />
              <WaveLong className="w-4 sm:w-6 lg:w-10 h-1" />
            </div>
            <h3 className="text-xs sm:text-lg tracking-wider sm:tracking-widest opacity-70 px-3 sm:px-6 lg:px-8">
              Composer
            </h3>
            <div>
              <WaveLong className="w-4 sm:w-6 lg:w-10 h-1" />
              <WaveLong className="w-4 sm:w-6 lg:w-10 h-1" />
            </div>
            <h3 className="text-xs sm:text-lg tracking-wider sm:tracking-widest opacity-70 px-3 sm:px-6 lg:px-8">
              Producer
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center pb-4 sm:pb-10">
          <Link to="/#contact">
            <Button>Get in touch</Button>
          </Link>
          <span className="text-base mt-8 opacity-70">or</span>
          <Link
            to="/#my-work"
            className="text-base border-b-2 mt-8 hover:opacity-70 transition-opacity"
          >
            Hear my work
          </Link>
        </div>
      </div>
    </header>
  );
};
