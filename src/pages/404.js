import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { WaveLong } from '../icons/WaveLong';
import { Navbar } from '../components/Navbar';

const NotFoundPage = () => {
  return (
    <div className="bg-black text-gray">
      <main>
        <Navbar />
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
              <h1 className="text-center text-7xl lg:text-8xl">404</h1>
              <div className="flex justify-center items-center mt-10">
                <div>
                  <WaveLong className="w-6 lg:w-10 h-1" />
                  <WaveLong className="w-6 lg:w-10 h-1" />
                </div>
                <h3 className="text-lg tracking-wider sm:tracking-widest opacity-70 px-3 sm:px-6 lg:px-8">
                  Page not found
                </h3>
                <div>
                  <WaveLong className="w-6 lg:w-10 h-1" />
                  <WaveLong className="w-6 lg:w-10 h-1" />
                </div>
              </div>
            </div>
          </div>
        </header>
      </main>
    </div>
  );
};

export default NotFoundPage;
