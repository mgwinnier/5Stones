import React from 'react';
import Image from 'next/image';
import { Navbar } from './components/Navbar'; 
import ValueCard from "./components/valueCard";
import { Hero } from './components';
import { InfiniteMovingCardsDemo } from './components/cards'; // Adjust this path as necessary
import AboutSection from './components/AboutSection'
import ContactUsComponent from './components/contact';
import Footer from './components/footer';

export default function Home() {
  return (
    <main>
      <Navbar /> {/* Passing isHome prop */}
      <Hero />
      <ValueCard />
      <AboutSection />
      <InfiniteMovingCardsDemo /> {/* Infinite Moving Cards Demo Component */}
      <ContactUsComponent />
      <Footer />
      {/* The rest of your home page content */}
    </main>
  );
}
