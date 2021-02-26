import React, { useState, useEffect } from 'react';

import videoStyles from './video.module.scss';
import videoMobile from "../../images/video.mp4";

const Hero = () => {
  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  
  }, []);

    return windowSize;
  }

  const production = (currentWindowSize) => {
    if(currentWindowSize < 700) {
      return (
        <video 
          className={ videoStyles.video }
          autobuffer="true"
          loop
          autoPlay
          muted
          playsInline
        >
          <source src={ videoMobile } type="video/mp4" />
        </video>
      )
    }
    else {
      return (
        null
      )
    }
  }

  return (
    <div className={ videoStyles.container }>
      { production(useWindowSize().width) }
    </div>
  )
}

export default Hero
