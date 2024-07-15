"use client"
import React from 'react';
import ServiceHeader from '../components/Services/ServiceHeader';
import MajorServices from '../components/Services/MajorServices';
import RoofCare from '../components/Services/RoofCare';
import TeamSection from '../components/About/TeamSection';
import AboutExp from '../components/About/AboutExp';
import Navbar from '../components/Navbar';


const Services = () => {
  return (
    <main className="bg-gray-700 text-white">
     
      <ServiceHeader />
      <MajorServices />
      <RoofCare />
      
      
    </main>
  );
};

export default Services;