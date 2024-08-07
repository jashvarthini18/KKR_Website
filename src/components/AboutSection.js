import React from 'react';
import './AboutSection.css'; // Make sure to create a CSS file for this component
import logo from '../assets/img/logo.jpg';

const AboutSection = () => {
  return (
    <section id="aboutPage">
      <div className="title">
        <p>About Us</p>
      </div>
      <div className="content">
        <div className="image">
          <img src={logo} alt="logo" />
        </div>
        <div className="text">
          <div className="head">
            <p className="first">We are here to Change the Future</p>
            <p><span className="col">I</span>magine - <span className="col">I</span>nnovate - <span className="col">I</span>mplement</p>
          </div>
          <div className="para">
            <p>We're venturing into the exciting world of startups, offering advanced products like
              AGVs, humanoids, and more. Our company not only merchandise groundbreaking industrial robots,
              domestic robots and real-time solutions, but also dedicated to enlightening the younger
              generation about the latest technology trends through mentorship program. We firmly believe in
              equipping the young minds with the knowledge they require to transform the future.</p>
          </div>
        </div>
      </div>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default AboutSection;
