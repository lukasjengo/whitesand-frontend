import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { ButtonLink } from './ButtonLink';

export const Services = () => {
  return (
    // <section
    //   className="grid grid-rows-1 grid-cols-8 items-center mx-auto max-w-7xl bg-gray my-8 sm:my-12"
    //   id="about"
    // >
    <section
      className="grid md:grid-cols-2 gap-x-20 lg:gap-x-40 items-center mx-auto max-w-7xl bg-gray my-8 sm:my-12"
      id="about"
    >
      {/* <div className="z-10 row-start-1 row-end-1 md:col-start-1 xl:col-start-2 md:col-span-4 xl:col-span-3 text-black py-12 px-6 xl:px-0"> */}
      <div className="text-black px-6 xl:px-12 py-12 sm:py-16">
        <h2 className="text-4xl sm:text-6xl">Services</h2>
        <p className="font-sans text-base opacity-80 mt-8">
          I am continuously looking for meaningful and inspiring partnerships or
          collaborations. My fees start at 500$ per 3-4 minutes of music
          material. For short films and movie soundtracks price varies and we
          discuss this on an individual basis.
        </p>
        <p className="font-sans text-base opacity-80 mt-4 mb-12">
          I usually charge a deposit before the work is started. Continuous
          interaction with a client is maintained throughout the process to make
          sure that music reaches intended emotional impact. The whole process
          is collaborative.
        </p>
        <ButtonLink to="/#contact" dark>
          Get in touch
        </ButtonLink>
      </div>
      {/* <div className="row-start-1 row-end-1"> */}
      <div className="md:max-w-lg h-80 md:h-full place-self-end">
        <StaticImage
          alt=""
          src="../assets/images/piano-keys.jpg"
          formats={['auto', 'webp', 'avif']}
          quality={80}
          placeholder="tracedSVG"
          className="h-80 md:h-full"
        />
      </div>
    </section>
  );
};
