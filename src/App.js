import React from 'react';
import './App.css'; // Main CSS file for global styles
import Header from './components/Header';

import ChoiceSection from './components/ChoiceSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import CommunitySection from './components/CommunitySection';
import WorkshopSection from './components/WorkshopSection';
import Testimonials from './components/Testimonials';
import InternshipSection from './components/InternshipSection';
import Potential from './components/Potential';
import StatisticsSection from './components/StatisticsSection';
import ImageCarousel from './components/ImageMarquee';
import Hero from './components/Hero';

const App = () => {
  return (
    <div>
      <Header />
      {/* <HeroSection /> */}
      <Hero />
      <StatisticsSection />
      <ChoiceSection />
      <AboutSection />
      <ServicesSection />
      <CommunitySection />
      <WorkshopSection />
      <Testimonials />
      <InternshipSection />
      <Potential />
      <ImageCarousel />
      <Footer />
    </div>
  );
};

export default App;
