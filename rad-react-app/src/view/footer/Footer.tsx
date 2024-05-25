import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            {/* Company Info */}
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <h2 className="text-xl font-bold mb-2">Company Name</h2>
              <p>
                Address Line 1<br />
                Address Line 2<br />
                City, State, ZIP
              </p>
            </div>

            {/* Links */}
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <h2 className="text-xl font-bold mb-2">Links</h2>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <h2 className="text-xl font-bold mb-2">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.5c-.9.4-1.8.6-2.8.8 1-.6 1.7-1.5 2-2.7-.9.5-2 .9-3 1.1C19.3 2.5 18 2 16.5 2c-3 0-5.5 2.5-5.5 5.5 0 .4 0 .7.1 1C7.3 8.5 4 6.5 1.7 3.4c-.4.6-.6 1.3-.6 2 0 1.5.8 2.8 2 3.6-.8 0-1.5-.2-2.1-.6v.1c0 2.1 1.5 3.9 3.5 4.3-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 2 2.4 3.5 4.5 3.5-1.6 1.2-3.5 1.9-5.7 1.9-.4 0-.8 0-1.2-.1C2.6 20.8 5.7 22 9 22c10.8 0 16.7-9 16.7-16.7v-.8c1.2-.8 2.2-1.8 3-3z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h6v2H9V8zm6 4H9v2h6v-2zm-1 4H9v2h5v-2zm3-14H7C4.8 2 3 3.8 3 6v12c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4zM7 4h10c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 4.1 2.5 7.6 6.1 9.1v-6.5h-1.8v-2.6h1.8V9.8c0-1.8 1.1-2.8 2.7-2.8.8 0 1.5.1 1.7.2v2h-1.2c-1 0-1.2.5-1.2 1.2v1.5h2.4l-.3 2.6h-2.1V21c3.6-1.5 6.1-5 6.1-9.1 0-5.4-4.4-9.8-9.8-9.8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
            &copy; 2024 Company Name. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
}
