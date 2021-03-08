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
    </Helmet>
  )
}

export default SEO

// Add english lang tab
// add features to make this searchable 
//\
