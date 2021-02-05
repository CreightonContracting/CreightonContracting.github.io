import React from 'react';
import aboutStyles from './about.module.scss';

const About = () => {
  
  const scrollToContact = () => {
    let contact = document.getElementById("contact-section");
    contact.scrollIntoView();
  }

  return (
    <div id="about-section" className={ aboutStyles.container }>
      <div className={ aboutStyles.card }>
        <h1>About</h1>
        <p>
          Creighton Contracting LLC was established in 2017, and provides turn key packages for site work, 
          including all underground, grading, and paving.  Creighton Contracting utilizes a modern fleet of 
          maintained equipment and GPS systems to reduce time and cost while improving accuracy and quality on projects.
        </p>
        <p>Want to learn more? <a href="#contact" onClick={ scrollToContact }>Contact Us</a></p>
      </div>
    </div>
  )
}

export default About
