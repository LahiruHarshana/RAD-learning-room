import React from 'react';
import img1 from './images/Serenity-spa-about-THERAPISTS1-1024x683.jpg';
import img2 from './images/shutterstock-desktop.webp';
import img3 from './images/t600x362.jpg';

const Service = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={img1} alt="Spa Massage" className="w-full h-64 object-cover object-center" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Relaxation Massage</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        {/* Service Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={img2} alt="Hot Stone Massage" className="w-full h-64 object-cover object-center" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Hot Stone Massage</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        {/* Service Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={img3} alt="Deep Tissue Massage" className="w-full h-64 object-cover object-center" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Deep Tissue Massage</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
