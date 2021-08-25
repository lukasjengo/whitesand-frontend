import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { Button } from '../components';

export const Services = () => {
  return (
    <section
      className="grid md:grid-cols-2 gap-x-20 lg:gap-x-40 items-center mx-auto max-w-7xl bg-gray mt-6 sm:mt-10 mb-12 sm:mb-20"
      id="services"
    >
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
        <Link to="/#contact">
          <Button dark>Get in touch</Button>
        </Link>
      </div>
      <div className="md:max-w-xl h-80 md:h-full place-self-end">
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
