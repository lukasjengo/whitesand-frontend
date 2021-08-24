import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const About = () => {
  return (
    <section
      className="grid md:grid-cols-2 gap-y-12 sm:gap-y-16 gap-x-20 lg:gap-x-40 xl:gap-x-56 items-center mx-auto px-6 pt-16 sm:pt-24 pb-12 sm:pb-20 max-w-7xl"
      id="about"
    >
      <div>
        <h2 className="text-4xl sm:text-6xl">About me</h2>
        <p className="font-sans text-base opacity-80 mt-8">
          I am a self-taught 26-year-old musician from Vilnius, Lithuania. In
          2016 I started a project 'Whitesand'. Throughout these years I have
          developed as a musician, learned and improved in my field, made
          amazing friendships and collaborations. My music is used by YouTubers
          throughout the world. I am inspired by cinema music as well as popular
          music bands like Red Hot Chilli Peppers. I don't like to be labeled as
          a cinematic music composer, but making this type of music currently is
          my main occupation.
        </p>
        <p className="font-sans text-base opacity-80 mt-4">
          I am a simple guy, who just loves music and finds meaning in it. I do
          believe in the ethic of hard work and doing your best.
        </p>
      </div>
      <div>
        <StaticImage
          alt="Whitesand sitting on a road curb with a distant look."
          src="../assets/images/whitesand-profile.jpg"
          formats={['auto', 'webp', 'avif']}
          quality={80}
          className="w-full"
          placeholder="tracedSVG"
        />
      </div>
    </section>
  );
};
