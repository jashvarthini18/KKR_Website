import React from 'react';
import './ChoiceSection.css'; // Make sure to create a CSS file for this component
import gif from '../assets/img/gif.gif';

const ChoiceSection = () => {
  return (
    <section id="choice">
      <div className="head">
        <p className="title">Why Choose <span className="com">KKR</span> ?</p>
        <p className="about">KarthiKesh Robotics Private Limited offers user-friendly robotic solutions designed to enhance safety, productivity, and efficiency. Join hands with us to push the boundaries of technology and elevate your living and industrial standards.</p>
      </div>
      <div className="main">
        <div className="block">
          <p className="head"><span>Cost-Effective Robotics Solutions</span></p>
          <p>Our budget-friendly Autonomous robots and IoT projects are tailored to meet diverse needs, ensuring accessibility without compromising quality across various sectors.</p>
        </div>
        <div className="gif">
          <img src={gif} alt="GIF" />
        </div>
        <div className="block">
          <p className="head"><span>Empowering Future Innovators</span></p>
          <p>Committed to education and innovation, we empower the next generation through specialized mentorship programs like bootcamps & workshops</p>
        </div>
      </div>
    </section>
  );
};

export default ChoiceSection;
