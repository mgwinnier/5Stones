/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface ValueCardProps {
  iconSrc: string; // Define the type of iconSrc as string
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ iconSrc, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center transition duration-300 hover:bg-gray-50 hover:shadow-lg">
      <div className="mb-4">
        <img src={iconSrc} alt={title} className="w-16 h-16" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const ValuesComponent: React.FC = () => {
  return (
    <section className="bg-gray-100 p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <ValueCard
          iconSrc="/assets/quality.png"
          title="Quality Craftsmanship"
          description="At 5 Stones Roofing, we deliver superior craftsmanship, using top-grade materials and meticulous attention to detail for lasting protection and stunning aesthetics."
        />
        <ValueCard
          iconSrc="/assets/honesty.png"
          title="Integrity and Transparency"
          description="Integrity is key at 5 Stones Roofing. We're transparent about costs, timelines, and potential issues, building trust through honest communication and upfront service."
        />
        <ValueCard
          iconSrc="/assets/support.png"
          title="Customer Satisfaction"
          description="At 5 Stones Roofing, your satisfaction drives everything we do. Expect personalized attention, prompt responses, and a seamless, enjoyable roofing experience from start to finish."
        />
      </div>
    </section>
  );
};

export default ValuesComponent;
