import React from 'react';
import Image from 'next/image';

const AboutHeader = () => {
  return (
    <section className="relative w-full h-96">
      <Image
        src="/assets/banner.png"
        alt="About 5 Stones Roofing LLC"
        layout="fill"
        objectFit="cover"
        className="opacity-80"
      />
      <div className="absolute bottom-0 left-0 w-full p-6">
        <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
      </div>
    </section>
  );
};

export default AboutHeader;
