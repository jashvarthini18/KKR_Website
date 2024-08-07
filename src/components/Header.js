import React, { useState } from 'react';
import './Header.css'; // Create a CSS file for header specific styles
import home from '../assets/img/home.svg';
import about from '../assets/img/about.svg';
import products from '../assets/img/about.svg';
import shop from '../assets/img/shop.svg';
import services from '../assets/img/services.svg';
import events from '../assets/img/about.svg';
import contact from '../assets/img/about.svg';
import account from '../assets/img/about.svg';
import logo from '../assets/img/logo.png';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header>
      <nav className="navigation">
        <div className="logo">
          <img src={logo} alt="KarthiKesh Robotics Logo" />
        </div>
        <ul className={`menu-list ${menuActive ? 'active' : ''}`}>
          <li><a className="home" href="#"><img src={home} alt="Home Icon" /> HOME</a></li>
          <li><a href="#"><img src={about} alt="About Icon" /> ABOUT</a></li>
          <li><a href="#"><img src={products} alt="Products Icon" /> PRODUCTS</a></li>
          <li><a href="#"><img src={shop} alt="Shop Icon" /> SHOP</a></li>
          <li><a href="#"><img src={services} alt="Services Icon" /> OUR SERVICES</a></li>
          <li><a href="#"><img src={events} alt="Events Icon" /> EVENTS</a></li>
          <li><a href="#"><img src={contact} alt="Contact Icon" /> CONTACT</a></li>
          <li><a href="#"><img src={account} alt="Account Icon" id="acc" /></a></li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar bar2"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
