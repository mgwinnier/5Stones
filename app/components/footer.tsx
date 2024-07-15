// Footer.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
        {/* Logo and Company Name on the left */}
        <div className="flex justify-center md:justify-start mb-4 md:mb-0">
          <Link href="/" className="flex items-center" legacyBehavior>

            <Image
              src="/assets/logo.png"
              alt="5 Stones Roofing LLC Logo"
              width={64}
              height={64}
              priority
            />

          </Link>
          <span className="ml-2 text-lg font-bold">5 Stones Roofing LLC</span>
        </div>

        {/* Centered Navigation Links */}
        <div className="flex justify-center order-3 md:order-2">
          <nav className="flex flex-row justify-center space-x-6">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About Us</Link>
            <Link href="/services" className="hover:underline">Services</Link>
            <Link href="/contact" className="hover:underline">Contact Us</Link>
          </nav>
        </div>

        {/* Contact Information on the right */}
        <div className="flex justify-center md:justify-end order-2 md:order-3">
          <div className="text-center md:text-right">
            <p className="font-semibold mb-2">Contact Information</p>
            <p>Mon - Fri: 8am - 6pm</p>
            <p>Sat: Family time - text me</p>
            <p>Sun: Closed</p>
            <p>Phone: 806-441-7737</p>
          </div>
        </div>
      </div>

      {/* Copyright Info centered at the bottom */}
      <div className="text-center text-black">
        <p>© {new Date().getFullYear()} 5 Stones Roofing LLC. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
