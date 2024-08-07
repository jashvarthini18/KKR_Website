import React from 'react';
import './StatisticsSection.css'; 
// Create a CSS file for statistics section specific styles
import stats from '../assets/img/stats.svg';

const StatisticsSection = () => {
  return (
    <section id="herostat">
      <div className="statistics">
        {['Projects', 'Workshops', 'Bootcamps', 'Students'].map((item, index) => (
          <div className="stat-item" key={index}>
            
            <div className="stat-info">
              <div className="stat-number"><span className="count">50</span><span className="col">+</span></div>
              <span className="stat-label">{item.toUpperCase()}</span>
            </div>
            <img src={stats} alt={`${item} Icon`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatisticsSection;
