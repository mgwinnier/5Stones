import React from 'react';
import Image from 'next/image';

const TeamSection = () => {
  return (
    <section className="bg-gray-400 py-12 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-black">Meet Our Team</h2>
        <div className="flex justify-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg flex flex-col items-center">
              <div className="mb-4">
                <Image
                  src="/assets/stace.png"
                  alt="Stace Debusk"
                  width={150}
                  height={150}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-black">Stace Debusk</h3>
              <p className="text-gray-400">Founder</p>
            </div>
          </div>
          {/* Repeat for other team members */}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
