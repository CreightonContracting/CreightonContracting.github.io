import React from 'react';

import servicesStyles from './services.module.scss';

const Services = () => {
  return (
    <div id="services-section" className={ servicesStyles.container }>
      <div className={ servicesStyles.card }>
        <h1>Services</h1>
        <p>
          We strive to produce high quality workmanship and maintain project schedules to increase repeat business.  
          Clients choose us because we're honest, reasonable, timely, and produce quality service.
        </p>
        <p>
          We provide the following services: Building Pads, Land clearing and leveling,  wet and dry underground 
          utilities, concrete and asphalt preparation, Asphalt Paving, Project Management, Value Engineering.
        </p>
      </div>
    </div>
  )
}

export default Services
