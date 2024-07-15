"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = `fixed top-0 left-0 w-full z-30 p-4 bg-transparent transition-transform duration-300 ${
    isVisible ? 'translate-y-0' : '-translate-y-full'
  }`;

  const linkBaseClass = "text-sm md:text-lg font-semibold py-2 px-4 text-white border-2 border-white rounded-lg hover:bg-white hover:text-navy-500 transition duration-300";

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="hidden md:flex items-center">
          <Link href="/" legacyBehavior>
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={150}
              height={150}
              priority
            />
          </Link>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-white focus:outline-none">
          {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          <span className="sr-only">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
        </button>
        <div className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } flex-col items-center justify-center w-full h-screen fixed top-0 left-0 bg-white text-black md:hidden`}>
          <button onClick={() => setIsMenuOpen(false)} className="p-4 absolute top-4 right-4">
            <FiX size={30} className="text-black" />
          </button>
          <div className="flex flex-col items-center space-y-6 mt-12">
            <Link href="/" className="py-2 text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="py-2 text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/services" className="py-2 text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="/contact" className="py-2 text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
        </div>
        <div className={`hidden md:flex md:flex-row md:space-x-8 items-center`}>
          <Link href="/" className={linkBaseClass}>
            Home
          </Link>
          <Link href="/about" className={linkBaseClass}>
            About Us
          </Link>
          <Link href="/services" className={linkBaseClass}>
            Services
          </Link>
          <Link href="/contact" className={linkBaseClass}>
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
