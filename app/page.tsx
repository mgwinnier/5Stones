import React from 'react';
import Image from 'next/image';
import { Navbar } from './components/Navbar'; 
import ValueCard from "./components/valueCard";
import { Hero } from './components';
import { InfiniteMovingCardsDemo } from './components/cards'; // Adjust this path as necessary
import AboutSection from './components/AboutSection'
import ContactUsComponent from './components/contact';
import Footer from './components/footer';
import Link from 'next/link'


const Home = () => {
  return (
    <>
      <Hero />
      <ValueCard />
      <AboutSection />
      <InfiniteMovingCardsDemo />
      <ContactUsComponent />
    </>
  );
};

export default Home;