import * as React from 'react';
import { AudioPlayerProvider } from 'react-use-audio-player';

import { About } from '../components/About';
import { Faq } from '../components/Faq';
import { Hero } from '../components/Hero';
import { Layout } from '../components/Layout';
import { Mywork } from '../components/Mywork';
import { Contact } from '../components/Contact';
import { Services } from '../components/Services';

const IndexPage = () => {
  return (
    <AudioPlayerProvider>
      <Layout>
        <Hero />
        <About />
        {/* <Mywork />
        <Services />
        <Faq />
        <Contact /> */}
      </Layout>
    </AudioPlayerProvider>
  );
};

export default IndexPage;
