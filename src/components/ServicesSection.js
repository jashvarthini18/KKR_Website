import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section id="servicesPage">
      <h1 className="services">Our Services</h1>
      <div className="container-service">
        {[
          { title: 'AUTONOMOUS ROBOTS', desc: 'Autonomous robots represent the cutting edge of modern technology, designed to operate independently without human intervention.' },
          { title: 'IoT SOLUTIONS', desc: 'By connecting everyday objects to the internet and enabling them to communicate and share data, IoT solutions offer unprecedented levels of insight, efficiency, and convenience.' },
          { title: 'MENTORSHIP PROGRAMS', desc: 'In this mentorship program, mentors typically provide guidance, advice, and feedback to mentees based on their own experiences and expertise.' }
        ].map((service, index) => (
          <div className={`card-service ${index % 2 === 0 ? 'fade-right' : 'fade-left'}`} data-aos-delay="800" key={index}>
            <div className="box">
              <div className="content-service">
                <h2>{`0${index + 1}`}</h2>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
