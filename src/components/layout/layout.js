import React from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';
import "../../styles/index.scss";
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
  // const componentDidMount = () => {
  //   document.addEventListener('scroll', this.handleScroll);
  // }

  // const handleScroll = (event) => {
  //   //handle your event base on scroll in pixels or what ever for example :
  //   if(window.scrollY > 100) {
  //     let aEl = document.getElementById('your_link_ID')
  //     aEl.setAttribute("style", "color: red")
  //   }
  // }


  return (
    <div className={ layoutStyles.container }>
      <div className={ layoutStyles.content }>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
