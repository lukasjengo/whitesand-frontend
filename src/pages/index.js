import * as React from 'react';
import { AudioPlayerProvider } from 'react-use-audio-player';

import { About } from '../components/About';
import { Faq } from '../components/Faq';
import { Hero } from '../components/Hero';
import { Mywork } from '../components/Mywork';
import { Contact } from '../components/Contact';
import { Services } from '../components/Services';
import { Navbar } from '../components/Navbar';

const IndexPage = () => {
  return (
    <div className="bg-black text-gray">
      <Navbar />
      <main>
        <Hero />
        <About />
        <AudioPlayerProvider>
          <Mywork />
        </AudioPlayerProvider>
        {/* <Services />
        <Faq />
        <Contact /> */}
      </main>
    </div>
  );
};

export default IndexPage;
