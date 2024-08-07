import React from 'react';
import rosImage from '../assets/img/ROS.png'; // Update with the correct image path
import raspberryPiImage from '../assets/img/Pi.png';
import arduinoImage from '../assets/img/arduino.png';
import icetImage from '../assets/img/IOT.png';
import rosImage2 from '../assets/img/ROS.png';
import './ImageMarquee.css';

const images = [
  { src: rosImage, alt: 'ROS' },
  { src: raspberryPiImage, alt: 'Raspberry Pi' },
  { src: arduinoImage, alt: 'Arduino' },
  { src: icetImage, alt: 'ICET' },
  { src: rosImage2, alt: 'ROS2' },
];

const ImageMarquee = () => {
  return (
    <div className="marquee-wrapper">
      <div className="marquee">
        {images.map((image, index) => (
          <div key={index} className="marquee-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageMarquee;
