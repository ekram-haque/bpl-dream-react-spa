import React from 'react';
// import bannerBg from '../assets/bg-shadow.png'
import img from '../assets/banner-main.png'

const Banner = () => {
    return (
    <div className="px-4 mt-6 w-300 mx-auto ">
      <div className="rounded-2xl overflow-hidden bg-linear-to-r from-black via-gray-900 to-gray-700 text-white py-16 flex flex-col items-center justify-center text-center relative">
        
        {/* Overlay blur effect */}
        <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 via-transparent to-yellow-300/20 blur-2xl"></div>

        {/* Content */}
        <div className="relative z-10">
          
          {/* Logo */}
          <img
            src={img} 
            alt="cricket"
            className="mx-auto w-28 mb-4"
          />

          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 mt-3">
            Beyond Boundaries Beyond Limits
          </p>

          {/* Button */}
          <button className="mt-6 px-5 py-2 rounded-lg border border-white/30 bg-linear-to-r from-pink-500 via-yellow-400 to-blue-500 text-black font-semibold shadow-md hover:scale-105 transition">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
    );
};

export default Banner;