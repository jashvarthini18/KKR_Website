import React from 'react';
import './Hero.css';
import roscomm from '../assets/img/robot.jpg';

const Hero = () => {
  return (
    <section className="hero-section">
      
      <div className="hero-container">
        <div className="hero-content">
        <h1>Our Autonomous Robots Will Simplify Your Work!</h1>
         
          <a href="#" className="join-btn">Explore</a>
        </div>
        <div className="hero-image">
          <img src={roscomm} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
