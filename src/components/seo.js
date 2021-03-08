import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  return(
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>Creighton Contracting LLC</title>
      <meta name="description" content="Creighton Contracting LLC was established in 2017, and provides turn key packages for site work, 
          including all underground, grading, and paving.  Creighton Contracting utilizes a modern fleet of 
          maintained equipment and GPS systems to reduce time and cost while improving accuracy and quality on projects."
      />
      <meta name="url" content="https://www.creightoncontracting.com/" />
      <meta name="image" content="../images/Creighton_Contracting_Logo_White.png" />
      <meta name="author" content="Creighton Contracting LLC" />
      <meta property="og:url" content="https://www.creightoncontracting.com/"/>
      {/* <meta property="og:type" content=""/> */}
      <meta property="og:title" content="Creighton Contracting LLC"/>
      <meta property="og:description" content="Creighton Contracting LLC was established in 2017, and provides turn key packages for site work, 
          including all underground, grading, and paving.  Creighton Contracting utilizes a modern fleet of 
          maintained equipment and GPS systems to reduce time and cost while improving accuracy and quality on projects."
      />
      <meta property="og:image" content="../images/Creighton_Contracting_Logo_White.png" />
    </Helmet>
  )
}

export default SEO

// Add english lang tab
// add features to make this searchable 
// url
// image
// twitter
// author
