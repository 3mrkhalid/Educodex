import React from 'react'
import { assets } from '../../assets/assets';
import Searchbar from './Searchbar';

function Hero() {
  return (
    <div className="hero-section">
      <h1 className="custom-heading">
        Unlock your full potential with courses crafted
        <span className="highlighted-text">just for you.</span>
        <img src={assets.sketch} alt="sketch" className="my-element" />
      </h1>

      <p className="custom-paragraph">
        Learn with the best — top instructors, quality content, and a supportive
        community dedicated to your long-term success.
      </p>

      <p className="mobile-paragraph">
        we bring together world-class instructors to help you achieve your
        professional goals.
      </p>
      <Searchbar />
    </div>
  );
}

export default Hero