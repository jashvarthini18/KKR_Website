import React from 'react';
import './Potential.css';
import technologies from '../assets/img/technologies.png';
// import ros from './path/to/ros-logo.png';
// import raspberryPi from './path/to/raspberry-pi-logo.png';
// import arduino from './path/to/arduino-logo.png';
// import iot from './path/to/iot-logo.png';

const Potential = () => {
  return (
    <div className="phero-section">
      <div className="phero-content">
        <img src={technologies} alt="Wall-E" className="phero-image" />
        <div className="phero-text">
          <h1>
            Unlock The Potential Of AI And Robotics With <span className="highlight">KKR</span>
          </h1>
          <p>
            We’d love to hear from you! Whether you have a question about our services, pricing, need a demo, or anything else, our team is ready to answer all your questions.
          </p>
          <button className="contact-button">Contact Us</button>
        </div>
      </div>
      <div className="phero-logos">
        {/* <img src={ros} alt="ROS" className="logo" />
        <img src={raspberryPi} alt="Raspberry Pi" className="logo" />
        <img src={arduino} alt="Arduino" className="logo" />
        <img src={iot} alt="IoT" className="logo" />
        <img src={ros} alt="ROS" className="logo" /> */}
      </div>
    </div>
  );
};

export default Potential;
