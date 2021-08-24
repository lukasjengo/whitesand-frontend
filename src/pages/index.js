import * as React from 'react';
import { AudioPlayerProvider } from 'react-use-audio-player';

import { About } from '../components/About';
import { Faq } from '../components/Faq';
import { Hero } from '../components/Hero';
import { Mywork } from '../components/Mywork';
import { Contact } from '../components/Contact';
import { Services } from '../components/Services';
import { Layout } from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <AudioPlayerProvider>
        <Mywork />
      </AudioPlayerProvider>
      <Services />
      <Faq />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
