import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import ContactForm from '../components/contact/ContactForm';

const GoogleMapComponentWithNoSSR = dynamic(
  () => import('../components/GoogleMapComponent'),
  { ssr: false }
);

const Contact: React.FC = () => {
  return (
    <>
      
      <main className="bg-gray-500 text-white py-36">
        <div className="container mx-auto px-2">
          <h1 className="text-2xl font-bold text-center mb-6">Contact Us</h1>
          <div className="grid grid-cols-1 gap-8 items-start">
            <ContactForm />
            <div className="text-center mt-12">
              <h2 className="text-2xl font-bold mb-4">Service Area</h2>
              <div className="w-full h-64 lg:h-96 relative mx-auto">
                <GoogleMapComponentWithNoSSR apiKey="AIzaSyBX-AUUnxc8wgiJf7IhO5FS_9qYGlCWhV0" />
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </>
  );
};

export default Contact;
