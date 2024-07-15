import React from 'react';
import Link from 'next/link';

const RoofCare: React.FC = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-black font-bold text-center mb-8">Roof Care</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-4 text-red-600">Have a Damaged or Leaking Roof?</h3>
          <p className="text-gray-700 mb-4">
            Roof leaks can be caused by various factors including storm damage from hail, tree damage from falling limbs, foot traffic, old worn out shingles, and sun damage. However, 90% of all roof leaks are caused by improper installation or defective metal flashing. Rarely does the actual roofing product fail. Flashing is found near any roof penetration area such as chimneys, step, apron, and valleys where roof angles join together. During a roof repair, it is crucial to inspect for any other damage that could lead to additional problems. If leaks are not addressed, the structure of your home may be weakened as the building frame continues to be exposed to dampness.
          </p>
          <p className="text-gray-700 mb-4">
            Poor installation of roof shingles, which are sometimes nailed incorrectly, may also need to be addressed. If roof shingles are missing, they will need to be replaced promptly.
          </p>
          <h4 className="text-2xl font-semibold mb-2 text-red-600">Some Causes of Roof Leaks:</h4>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Improper/Defective Flashing</li>
            <li>Storm Damage/Hail</li>
            <li>Tree Damage</li>
            <li>Worn Out Shingles</li>
            <li>Sun Damaged Shingles</li>
            <li>People Walking on the Roof</li>
            <li>Poor Shingle Installation</li>
          </ul>
          <h3 className="text-3xl font-semibold mb-4 text-red-600">How Can I Take Care of My Roof?</h3>
          <p className="text-gray-700 mb-4">
            It is very important to regularly inspect your roof for necessary repairs. Many homeowners choose to do this in the spring due to the fair weather and the fact that spring storms and heavy rains highlight roof vulnerabilities. In Central Texas, our mild weather provides year-round opportunities to repair or replace your roof, so don’t wait for a problem to cause damage. Contact 5 Stones Roofing, for a free analysis and estimate on repair or replacement.
          </p>
          <p className="text-gray-700 mb-4">
            Regular roof maintenance includes checking for damaged or missing shingles, inspecting flashing around roof penetrations, and ensuring gutters are clean and functional. Preventive maintenance can extend the life of your roof and save you money in the long run.
          </p>
          <p className="text-gray-700 mb-4">
            Call us today for a thorough free roof inspection and peace of mind knowing your home is protected.
          </p>
          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition duration-300">
              
                Contact Us for a Free Consultation
              
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoofCare;
