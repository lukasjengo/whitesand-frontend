import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { WaveLong } from '../icons/Wave';

export const Hero = () => {
  return (
    <header className="relative h-screen">
      <div className="absolute inset-0">
        <StaticImage
          // layout="constrained"
          objectFit="cover"
          objectPosition="top"
          alt=""
          role="presentation"
          src="../assets/images/sands-50.jpg"
          formats={['auto', 'webp', 'avif']}
          quality={100}
          className="h-full w-full object-cover"
        />
        {/*Maybe use this insead of bg image linear gradient*/}
        {/* <div className="absolute inset-0 bg-gray-700 mix-blend-multiply" /> */}
      </div>
      <div className="absolute inset-0 flex flex-col justify-around">
        {/* <div className="mt-40"> */}
        <div className="flex flex-col justify-center h-4/6">
          <h1 className="text-center text-6xl sm:text-8xl lg:text-9xl">
            Whitesand
          </h1>
          <div className="flex justify-center items-center mt-10">
            <h3 className="text-lg lg:text-2xl tracking-widest opacity-70 px-6 lg:px-12">
              Musician
            </h3>
            <div>
              <WaveLong className="w-12 h-1" />
              <WaveLong className="w-12 h-1" />
            </div>
            <h3 className="text-lg lg:text-2xl tracking-widest opacity-70 px-6 lg:px-12">
              Composer
            </h3>
            <div>
              <WaveLong className="w-12 h-1" />
              <WaveLong className="w-12 h-1" />
            </div>
            <h3 className="text-lg lg:text-2xl tracking-widest opacity-70 px-6 lg:px-12">
              Producer
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <button
            className="uppercase block text-xl border-2 px-10 py-3"
            style={{
              borderImage:
                'linear-gradient(to left top, #464646, rgba(255,255,255, 0))',
              borderImageSlice: 1,
            }}
          >
            Get in touch
          </button>
          <span className="uppercase text-lg mt-8">or</span>
          <a href="" className="uppercase text-lg border-b-2 mt-8">
            Hear my work
          </a>
        </div>
      </div>
    </header>
  );
};
