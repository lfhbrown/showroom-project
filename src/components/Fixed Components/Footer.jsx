import { useState, useEffect } from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-column-container">
        <div className="footer-column-1">
          <div className="logo-container">
            <h1>Logo</h1>
          </div>
          <div className="social-icon-containter">
            <h2>Social Images</h2>
          </div>
        </div>
        <div className="footer-column-2">
          <h2>About</h2>
          <ul>
            <li>
              <a href="">Our Story</a>
            </li>
            <li>
              <a href="">Media</a>
            </li>
            <li>
              <a href="">Press</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Feedback</a>
            </li>
          </ul>
        </div>
        <div className="footer-column-3">
          <h2>Support</h2>
          <ul>
            <li>
              <a href="">Ordering Online</a>
            </li>
            <li>
              <a href="">Delivery</a>
            </li>
            <li>
              <a href="">Returns</a>
            </li>
            <li>
              <a href="">Help & FAQs</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-column-4">
          <h2>Contact</h2>
          <ul>
            <li>
              <a href="">
                <address>Location </address>
              </a>
            </li>
            <li>
              <address>Phone</address>
            </li>
            <li>
              <address>Email</address>
            </li>
            <li>
              <a href="">
                <address>Location </address>
              </a>
            </li>
            <li>
              <address>Phone</address>
            </li>
            <li>
              <address>Email</address>
            </li>
          </ul>
        </div>
        <div className="footer-column-5">
          <ul>
            <li>
              <a href="">
                <address>Location </address>
              </a>
            </li>
            <li>
              <address>Phone</address>
            </li>
            <li>
              <address>Email</address>
            </li>
            <li>
              <a href="">
                <address>Location </address>
              </a>
            </li>
            <li>
              <address>Phone</address>
            </li>
            <li>
              <address>Email</address>
            </li>
          </ul>
        </div>
        <div className="footer-column-6">
          <ul>
            <li>
              <a href="">
                <address>Location </address>
              </a>
            </li>
            <li>
              <address>Phone</address>
            </li>
            <li>
              <address>Email</address>
            </li>
            <li>
              <a href="">
                <address>Location </address>
              </a>
            </li>
            <li>
              <address>Phone</address>
            </li>
            <li>
              <address>Email</address>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-links-container">
        <div>
          <span>© ABC Inc. 2024</span>
        </div>
        <div className="legal-links">
          <a>Cookies</a>
          <a>Privacy</a>
          <a>Terms & Conditions</a>
        </div>
        <div className="region">
          <a>USA & Canada</a>
          <a>Rest of the World</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
