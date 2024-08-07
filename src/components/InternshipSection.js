import React from 'react';
import './InternshipSection.css';
import internship from '../assets/img/internship.png';

const InternshipSection = () => {
  return (
    <section className="internship-section">
      <h1 className="internship-title">Internship Programs</h1>
      <div className="internship-container">
        <div className="internship-content">
          <h3>
            Start Your <span className="highlight">Professional Journey</span>
          </h3>
          <p>
            Explore our diverse internship programs designed for both students and industry experts. Gain valuable experience, enhance your skills, and work on exciting projects with our dedicated team. Apply now to take the first step towards a rewarding career.
          </p>
          <a href="#" className="join-btn">Join Now</a>
        </div>
        <div className="internship-image">
          <img src={internship} alt="Internship Programs" />
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
