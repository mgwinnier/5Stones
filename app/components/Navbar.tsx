// Navbar.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi'; // Importing X icon for close button

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY < 10); // Or use a different value if you want some tolerance
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = `fixed top-0 w-full z-30 p-4 transition-transform duration-300 ${
    atTop ? 'bg-transparent' : 'hidden'
  }`;

  // Updated classes for link style
  const linkBaseClass = "text-sm md:text-lg font-semibold py-2 px-4 text-white hover:bg-white hover:text-navy-500 transition duration-300 rounded-lg border-2 border-white";

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Show logo only on md screens and larger */}
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
        {/* Hamburger Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-white focus:outline-none">
          {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />} {/* Switch between menu and close icon */}
          <span className="sr-only">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
        </button>
        {/* Navigation Links */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} absolute md:relative md:flex flex-col md:flex-row md:space-x-8 items-center w-full md:w-auto bg-black md:bg-transparent transition duration-300 ease-in-out`}>
          <Link href="/" className={`${linkBaseClass} mt-4 md:mt-0`}>
            Home
          </Link>
          <Link href="/about" className={`${linkBaseClass} mt-4 md:mt-0`}>
            About Us
          </Link>
          <Link href="/services" className={`${linkBaseClass} mt-4 md:mt-0`}>
            Services
          </Link>
          <Link href="/contact" className={`${linkBaseClass} mt-4 md:mt-0`}>
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
