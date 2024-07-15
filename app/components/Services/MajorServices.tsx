import React from 'react';
import Image from 'next/image';

const majorServices = [
    {
      title: 'Commercial Roofing',
      description: 'Providing top-notch commercial roofing services with high-quality materials and professional craftsmanship. Our services include installation, repair, replacement, and preventive maintenance for all types of commercial roofs, ensuring your business stays protected and operational.',
      imageUrl: '/assets/commercial_roofing.jpg',
    },
    {
      title: 'Residential Roofing',
      description: 'Expert residential roofing services to ensure the safety and beauty of your home. We offer comprehensive solutions including roof repair, new roof installation, roof replacement, and preventive maintenance to keep your home in top condition.',
      imageUrl: '/assets/residential_roofing.jpg',
    }
  ];

const MajorServices: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl text-black font-bold text-center mb-8">Major Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {majorServices.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-48 h-48 relative">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-black">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MajorServices;
