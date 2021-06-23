import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const About = () => {
  return (
    <section className="flex mx-auto px-4 my-32 max-w-8xl">
      <div className="flex flex-col justify-center w-6/12">
        <h2 className="text-7xl">About me</h2>
        <p className="font-sans text-lg opacity-80 mt-16">
          I am a self-thought 26-year-old musician from Vilnius, Lithuania. In
          2016 I started a project 'Whitesand'. Throughout these years I have
          developed as a musician, learned and improved in my field, made
          amazing friendships and collaborations. My music is continuously used
          by YouTubers throughout the world. I am inspired by cinema music as
          well as popular music, bands like Red Hot Chilli Peppers. I don't like
          to be labeled as a cinematic music composer, but making this type of
          music currently is my main occupation.
        </p>
        <p className="font-sans text-lg opacity-80 mt-6">
          I am a simple guy, who just loves music and finds meaning in it. I do
          believe in the ethic of hard work and doing your best.
        </p>
      </div>
      <div className="w-6/12">
        <StaticImage
          // layout="constrained"
          alt="Whitesand sitting on a road curb with a distant look."
          src="../assets/images/whitesand-profile.jpg"
          formats={['auto', 'webp', 'avif']}
          quality={100}
          className="w-full"
        />
      </div>
    </section>
  );
};
