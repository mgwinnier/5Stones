import React from 'react';
import AboutHeader from '../components/About/AboutHeader';
import AboutDetails from '../components/About/AboutDetails';
import TeamSection from '../components/About/TeamSection';
import AboutExp from '../components/About/AboutExp';
import Navbar from '../components/Navbar';


const About = () => {
  return (
    <main className="bg-gray-700 text-white">
      
      <AboutHeader />
      <AboutDetails />
      <AboutExp />
      <TeamSection />
      
    </main>
  );
};

export default About;