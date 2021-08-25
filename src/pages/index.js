import * as React from 'react';
import { AudioPlayerProvider } from 'react-use-audio-player';

import {
  About,
  Faq,
  Hero,
  Mywork,
  Contact,
  Services,
  Layout,
  Seo,
} from '../components';

const IndexPage = () => {
  return (
    <>
      <Seo />
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
    </>
  );
};

export default IndexPage;
