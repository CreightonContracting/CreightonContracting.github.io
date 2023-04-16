import React, { useState } from 'react';
import { Link } from "gatsby";

import headerStyles from './header.module.scss';
import creightonLogo from "../../images/Creighton Contracting- FInal Beige-01.png";

import "../../fonts/GoodTimesRg-Bold.otf";

const Header = () => {
  const [ click, setClick ] = useState(false);
  const handleClick = () => setClick(!click);

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setClick(false);
  }

  const scrollToAbout = () => {
    let aboutSection = document.getElementById("about-section");
    aboutSection.scrollIntoView();
    setClick(false);
  }

  const scrollToSection = () => {
    let aboutSection = document.getElementById("services-section");
    aboutSection.scrollIntoView();
    setClick(false);
  }

  const scrollToContact = () => {
    let aboutSection = document.getElementById("contact-section");
    aboutSection.scrollIntoView();
    setClick(false);
  }

  return (
    <header className={ headerStyles.header }>
      <Link to="/">
        <img 
          className={ headerStyles.logo }
          alt="insert logo here" 
          src={ creightonLogo } 
          onClick={ scrollToTop }
        />
      </Link>
      <ul className={click ? headerStyles.navListActive : headerStyles.navList}>
        <li className={ headerStyles.option }>
          <Link 
            className={ headerStyles.navItem } 
            //activeClassName={ headerStyles.activeNavItem } 
            to="/"
            onClick={ scrollToTop }
          >
            Home
          </Link>
        </li>
        <li className={ headerStyles.option }>
          <Link 
            className={ headerStyles.navItem } 
            //activeClassName={ headerStyles.activeNavItem } 
            to="#about"
            onClick={ scrollToAbout }
          >
            About
          </Link>
        </li>
        <li className={ headerStyles.option }>
          <Link 
            className={ headerStyles.navItem } 
            //activeClassName={ headerStyles.activeNavItem } 
            to="#services"
            onClick={ scrollToSection }
          >
            Services
          </Link>
        </li>
        <li className={ headerStyles.option }>
          <Link 
            className={ headerStyles.navItem } 
            //activeClassName={ headerStyles.activeNavItem } 
            to="#contact"
            onClick={ scrollToContact }
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className={click ? headerStyles.hideLogo : headerStyles.icon } onClick={ handleClick }>
        &#9776;
      </div>
      <div className={ headerStyles.empty }></div>
      <div className={ headerStyles.contact }>
        <p className={ headerStyles.copy }></p>
        <p className={ headerStyles.copy }></p>
      </div>
    </header>
  )
}


export default Header;
