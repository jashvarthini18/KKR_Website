import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/img/logo.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h2>Join Our Newsletter</h2>
        <p>Be the first to know about our latest updates, exclusive offers, and more.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-content">
        <div className="footer-column">
          <img src={ logo } alt="KKR Logo" className="logo" />
          <p>Future is Here!</p>
          <div className="social-media">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Home</h3>
          <ul>
            <li><a href="#">Products</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        
          <h3>Community</h3>
          <ul>
            <li><a href="#">ROS</a></li>
            <li><a href="#">Artificial Intelligence</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Events</h3>
          <ul>
            <li><a href="#">Internships</a></li>
            <li><a href="#">Workshops <span className="new-badge">New</span></a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>About</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Vision and Mission</a></li>
            <li><a href="#">Key Values</a></li>
            <li><a href="#">Team</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>All Rights Reserved @Karthikesh Robotics Private Limited</p>
      </div>
    </footer>
  );
};

export default Footer;
