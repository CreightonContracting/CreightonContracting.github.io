import React from 'react';

import Layout from '../components/layout/layout';
import Video from "../components/video/video";
import About from "../components/about/about";
import Services from "../components/services/services";
import Contact from "../components/contact/contact";
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <SEO 
        // title="Creighton Contracting LLC"
      />
      <Video />
      <About />
      <Services />
      <Contact />
    </Layout>
  )
}

export default IndexPage
