import React from 'react'
import { assets } from '../../assets/assets';

const Companies = () => {
  return (
    <div className="section-wrapper">
      <p className="inspired-text">Inspired by the best learning platforms</p>
      <div className="platforms-container">
        <img src={assets.adobe_logo} alt="Adobe" className="icon-logo" />
        <img src={assets.accenture_logo} alt="Accenture" className="icon-logo" />
        <img src={assets.microsoft_logo} alt="Microsoft" className="icon-logo"/>
        <img src={assets.walmart_logo} alt="Walmart" className="icon-logo" />
        <img src={assets.paypal_logo} alt="Paypal" className="icon-logo" />
      </div>
    </div>
  );
}

export default Companies
