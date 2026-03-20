import React from "react";
import logo from '../assets/logo.png'

const FooterSection = () => {
  return (
    <div className="mt-20">
      
      {/* Newsletter Section */}
      <div className="max-w-5xl mx-auto bg-linear-to-r from-gray-100 via-blue-100 to-yellow-100 p-8 rounded-2xl shadow-lg text-center relative z-10">
        
        <h2 className="text-2xl font-bold mb-2">
          Subscribe to our Newsletter
        </h2>
        <p className="text-gray-600 mb-4">
          Get the latest updates and news right in your inbox!
        </p>

        <div className="flex justify-center gap-3 flex-wrap">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg border outline-none w-64"
          />
          <button className="px-4 py-2 rounded-lg bg-linear-to-r from-pink-500 via-yellow-400 to-orange-400 text-black font-semibold hover:scale-105 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#020617] text-white -mt-15 pt-28 pb-8 px-6">
        
        {/* Top Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          
          {/* About */}
          <div>
            <h3 className="font-semibold mb-3">About Us</h3>
            <p className="text-gray-400 text-sm">
              It's a platform where any team came to buy their favorite player for bpl .
            </p>
          </div>

          {/* Logo + Links */}
          <div className="text-center">
            <img
              src={logo}
              alt="logo"
              className="mx-auto w-16 mb-3"
            />

            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="font-semibold mb-3">Subscribe</h3>
            <p className="text-gray-400 text-sm mb-3">
              Subscribe to our newsletter for the latest updates.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded-l-lg outline-none text-black w-full"
              />
              <button className="px-4 py-2 rounded-r-lg bg-linear-to-r from-pink-500 via-yellow-400 to-orange-400 text-black font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
          ©2026 All Rights Reserved by BPL DREAM.
        </div>
      </div>
    </div>
  );
};

export default FooterSection;