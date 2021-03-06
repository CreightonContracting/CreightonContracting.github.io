import React from 'react';

import contactStyles from './contact.module.scss';

const Contact = () => {
  return (
    <div id="contact-section" className={ contactStyles.container }>
      <div className={ contactStyles.card }>
        <h1>Contact</h1>
        <p>Want to learn more? Interested in our services? Email or give us a call:</p>
        <address>
          Phone: <a href="tel:208-866-1160">208-866-1160</a><br/>
          Email: <a href="mailto:creightoncontractingllc@gmail.com">creightoncontractingllc@gmail.com</a><br/>
        </address>
      </div>
    </div>
  )
}

export default Contact
