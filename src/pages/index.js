import * as React from 'react';

import { Hero } from '../components/Hero';
import { Layout } from '../components/Layout';

const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  //   {
  //     allFile(filter: { sourceInstanceName: { eq: "music" } }) {
  //       edges {
  //         node {
  //           name
  //           publicURL
  //         }
  //       }
  //     }
  //   }
  // `);
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default IndexPage;
