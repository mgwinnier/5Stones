import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-black h-[50vh] md:h-[75vh]">
      <video autoPlay loop muted className="object-cover w-full h-full">
        <source src="/assets/roof.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-white mb-2 md:mb-4 drop-shadow-md">5 Stones Roofing LLC</h1>
        <p className="text-xs md:text-xl lg:text-3xl text-white mb-4 md:mb-8 font-light drop-shadow-md">Doing Business the Right Way</p>
        <Link
          href="/contact"
          className="text-xs md:text-lg font-semibold py-1 md:py-2 px-2 md:px-4 border-2 border-navy-500 text-white bg-transparent hover:bg-navy-500 hover:text-white transition duration-300 rounded-lg">
          
            Schedule A Consultation
          
        </Link>
      </div>
    </div>
  );
};

export default Hero;
