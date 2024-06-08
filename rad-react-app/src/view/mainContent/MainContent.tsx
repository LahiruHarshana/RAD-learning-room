import React, { Component } from 'react';
import img1 from './images/Sensual-Massage-in-Lahore.jpg';
import img2 from './images/massage-center.jpg';
import img3 from './images/11031624_002_b9db.jpg';
import { Link } from 'react-router-dom';

export default class MainContent extends Component {
  render() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-100 to-amber-200">
        {/* Hero Section */}
        <section className="flex items-center justify-center py-16 px-4">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Welcome to Spa Massage Center</h1>
            <p className="text-lg text-gray-800 mb-8">Experience tranquility and relaxation with our professional massage services.</p>
            <Link to="/booking">
              <button className="px-8 py-3 bg-amber-500 text-white font-semibold rounded hover:bg-amber-600 transition duration-300">
                Book Now
              </button>
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow">
                <img src={img1} alt="Service 1" className="w-full h-64 object-cover object-center" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Relaxation Massage</h3>
                  <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              {/* Service Card 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow">
                <img src={img2} alt="Service 2" className="w-full h-64 object-cover object-center" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Hot Stone Massage</h3>
                  <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              {/* Service Card 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow">
                <img src={img3} alt="Service 3" className="w-full h-64 object-cover object-center" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Deep Tissue Massage</h3>
                  <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Us</h2>
            <p className="text-lg text-gray-800 mb-8 text-center">Have questions or want to book an appointment? Contact us today!</p>
            <div className="flex justify-center">
              <button className="px-8 py-3 bg-amber-500 text-white font-semibold rounded hover:bg-amber-600 transition duration-300">Contact Us</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
