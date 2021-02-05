import React from 'react';
import { graphql, useStaticQuery } from "gatsby";

import footerStyles from "./footer.module.scss";

const Footer = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //       name
  //       }
  //     }
  //   }
  // `)

  return (
    <footer className={ footerStyles.footer }>
      <p className={ footerStyles.copy }>PWL License: 032472-D-4 | Contractors License: Idaho RCE-44627</p>
      {/* <p className={ footerStyles.copy }>&#169; 2020 {data.site.siteMetadata.name}</p> */}
      <p className={ footerStyles.copy }>&#169; 2020 Creighton Contracting LLC</p>
    </footer>
  )
}

export default Footer
