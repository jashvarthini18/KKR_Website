import React from 'react';
import './WorkshopSection.css';
import Workshop from '../assets/img/workshop.png';

const WorkshopSection = () => {
  return (
    <section className="workshop-section">
      <h1 className="workshop-title">BOOK WORKSHOPS NOW!</h1>
      <div className="workshop-container">
        <div className="workshop-image">
          <img src={Workshop} alt="Workshop" />
        </div>
        <div className="workshop-content">
          <h3>
            Wanna Conduct <span className="highlight">Workshops</span> in Your Institute?
          </h3>
          <p>
            Unlock the future with our exclusive robotics and AI workshops. Limited availability – Book your spot now. Join us and be part of the next technological breakthrough!
          </p>
          <a href="#" className="book-btn">Book Now</a>
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;
