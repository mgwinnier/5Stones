/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const GoogleMapComponentWithNoSSR = dynamic(
  () => import('./GoogleMapComponent'),
  { ssr: false }
);

const ContactUsComponent: React.FC = () => {
  return (
    <div className="bg-gray-700 text-white p-6 shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="flex flex-col items-center lg:items-start w-full">
          <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">Service Area</h2>
          <div className="w-full flex justify-center lg:justify-start">
            <div className="w-full h-64 lg:h-96 relative">
              <GoogleMapComponentWithNoSSR apiKey="AIzaSyBX-AUUnxc8wgiJf7IhO5FS_9qYGlCWhV0" />
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-8 lg:mt-0">
          <article className="space-y-4">
            <p className="text-lg">
              At <span className="font-semibold">5 Stones Roofing</span>, we specialize in providing top-tier roofing services across Central Texas. Our expert team is equipped to handle projects of any scale, ensuring every roof is meticulously crafted to meet the highest standards of quality and durability.
            </p>
            <p className="text-lg">
              With a commitment to excellence and customer satisfaction, we proudly serve the communities of Central Texas, delivering solutions that protect and enhance your home. From repairs to new installations, our roofing services are designed to withstand the test of time and the challenges of Central Texas weather.
            </p>
            <p className="text-lg">
              For personalized service and professional advice, reach out to us. Let's discuss how we can fortify your home with a roof that's built to last.
            </p>
          </article>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Hours of Operation</h3>
            <p>Mon - Fri: 8am - 6pm</p>
            <p>Sat: Family time - text me</p>
            <p>Sun: Closed</p>
            <p>Phone: 806-441-7737</p>
          </div>

          <div className="mt-6">
            <Link
              href="/contact-us"
              className="bg-white text-black px-6 py-3 inline-block rounded-lg shadow-lg hover:bg-blue-600 font-medium text-center transition duration-300"
            >
              Visit Contact Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsComponent;
