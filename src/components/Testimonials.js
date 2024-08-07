import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "KKR Robotics has revolutionized our workflow with their state-of-the-art automation solutions. Their cutting-edge technology and innovative designs have significantly increased our efficiency and productivity.",
    author: "Jermaiah",
    position: "Founder",
    image: "path/to/image1.jpg" // replace with your image path
  },
  {
    quote: "KKR Robotics has revolutionized our workflow with their state-of-the-art automation solutions. Their cutting-edge technology and innovative designs have significantly increased our efficiency and productivity.",
    author: "Jermaiah",
    position: "Founder",
    image: "path/to/image2.jpg" // replace with your image path
  },
  {
    quote: "KKR Robotics has revolutionized our workflow with their state-of-the-art automation solutions. Their cutting-edge technology and innovative designs have significantly increased our efficiency and productivity.",
    author: "Jermaiah",
    position: "Founder",
    image: "path/to/image3.jpg" // replace with your image path
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}>
            <p className="quote">
              <span className="quote-symbol"> “</span>
              <span className="quote-text">{testimonial.quote}</span>
            </p>
            <div className="author">
              <img src={testimonial.image} alt={testimonial.author} className="author-image" />
              <div>
                <h3>{testimonial.author}</h3>
                <p>{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button className="arrow left" onClick={handlePrev}>&lt;</button>
        <button className="arrow right" onClick={handleNext}>&gt;</button>
      </div>
    </section>
  );
};

export default Testimonials;
