import React from 'react'
import { assets } from '../../assets/assets';

const CallToAction = () => {
  return (
    <div className="section-intro">
      <h1 className="intro-heading">
        Learn without limits — anytime, anywhere
      </h1>
      <p className="intro-subtext">
        We don’t just teach — we ignite curiosity, inspire personal growth,
        unlock every learner’s potential, and help shape futures through
        knowledge, creativity, and connection
      </p>

      <div className="intro-actions">
        <button className="btn-primary">Get started</button>
        <button className="btn-secondary">
          Learn more <img src={assets.arrow_icon} alt="arrow_icon" />
        </button>
      </div>
    </div>
  );
}

export default CallToAction
