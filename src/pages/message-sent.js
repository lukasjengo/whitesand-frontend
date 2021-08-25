import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';
import { WaveLong } from '../icons/WaveLong';

const NotFoundPage = () => {
  return (
    <>
      <Seo
        title="Message sent"
        description="Thank you, your message has been sent."
      />
      <Layout>
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
          <div className="absolute inset-0 flex flex-col justify-center">
            <div className="flex flex-col justify-center h-4/6">
              <h1 className="text-center text-5xl sm:text-7xl lg:text-8xl">
                Thank you
              </h1>
              <div className="flex justify-center items-center mt-10">
                <div>
                  <WaveLong className="w-6 lg:w-10 h-1" />
                  <WaveLong className="w-6 lg:w-10 h-1" />
                </div>
                <h3 className="text-xs sm:text-lg tracking-wider sm:tracking-widest opacity-70 px-3 sm:px-6 lg:px-8">
                  Your message has been sent
                </h3>
                <div>
                  <WaveLong className="w-6 lg:w-10 h-1" />
                  <WaveLong className="w-6 lg:w-10 h-1" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center pb-4 sm:pb-10">
              <Link
                to="/"
                className="text-base border-b-2 mt-8 hover:opacity-70 transition-opacity"
              >
                Go back
              </Link>
            </div>
          </div>
        </header>
      </Layout>
    </>
  );
};

export default NotFoundPage;
