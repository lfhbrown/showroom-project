import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header className="header-main">
        <h1>Logo</h1>
        <div className="nav-container">
          <nav>
            <ul>
              <li>Kitchens</li>
              <li>Design Services</li>
              <li>Brochure & Book</li>
              <li>Shop</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
            <div className="Cart">
              <a>
                <span>Basket (0)</span>
              </a>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
