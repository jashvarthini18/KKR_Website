import React from 'react';
import './CommunitySection.css';
import roscomm from '../assets/img/community.png';

const CommunitySection = () => {
  return (
    <section className="community-section">
      <h1 className="community-title">Join Our <span className="highlight">ROS</span> Community</h1>
      <div className="community-container">
        <div className="community-content">
          <h3>Unite with unified thinkers</h3>
          <h3>Join our <span className="highlight">ROS Community</span>!</h3>
          <p>
            Join our ROS Community at <span className="highlight">Karthikesh Robotics</span>!
            Connect & create projects with fellow enthusiasts, share knowledge, and collaborate on projects in robotics and AI.
            Be a beginner or a seasoned professional, our community offers a platform for growth, innovation, and making impactful contributions.
            Team up with us to play an inevitable role in the future of robotics!
          </p>
          <a href="#" className="join-btn">Join with us</a>
        </div>
        <div className="community-image">
          <img src={roscomm} alt="Community" />
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
