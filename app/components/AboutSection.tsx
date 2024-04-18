/* eslint-disable react/no-unescaped-entities */
// components/AboutSection.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gray-700 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white">Expert Roofing Since 2000</h2>
          <p className="text-gray-300 leading-relaxed">
            Spanning over two decades of service, 5 Stones Construction & Roofing remains a cornerstone of trust in the Hill Country area. Our expertise in both residential and commercial roofing projects is the bedrock upon which we've built our legacy of exceptional workmanship and stellar customer service.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Covering a vast region, we serve areas including Spring Branch, New Braunfels, Boerne, Kerrville, Comfort, Blanco, and San Marcos. Place your confidence in us to fortify your home or business with superior roofing solutions.
          </p>
          <div className="flex space-x-4 mt-4">
            <Link
              href="/contact"
              className="bg-white text-black px-6 py-2 inline-flex items-center justify-center text-sm font-medium rounded shadow hover:bg-gray-200 transition duration-300">
              
                Get in Touch
              
            </Link>
            <Link
              href="/about"
              className="bg-white text-black px-6 py-2 inline-flex items-center justify-center text-sm font-medium rounded shadow hover:bg-gray-200 transition duration-300">
              
                Learn More
              
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <Image 
            src="/assets/family.jpg" 
            alt="5 Stones Construction & Roofing Team"
            width={500} 
            height={300} 
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
