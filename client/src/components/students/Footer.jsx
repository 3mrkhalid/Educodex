import React from 'react'
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h1 className="logo logo_dark" style={{ cursor: "default" }}>
            <img src={assets.logo_dark} alt="logo" />
            <span style={{ color: "white" }}>Educodex</span>
          </h1>
          <p
            style={{
              color: "#DCDCDC",
              padding: "1rem 0 0 0",
              maxWidth: "270px",
              fontSize: "0.9rem",
              fontWeight: "300",
            }}
            className="footer_p"
          >
            Empowering learners everywhere to grow, achieve, and build the
            future they imagine
          </p>
        </div>
        <div className="footer-section1">
          <h2>Company</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-section2">
          <h2>Resources</h2>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Help&nbsp;Center</a>
            </li>
            <li>
              <a href="#">Guides</a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="gray-line" />
      <p className="footer-copy">
        Copyright 2025 © Educodex. All Right Reserved.
      </p>
    </footer>
  );
}

export default Footer
