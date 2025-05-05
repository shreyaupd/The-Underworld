import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="w-full relative z-0 min-h-screen bg-gradient-to-b from-cyan-950/90 via-cyan-600/50 to-blue-200 px-6 py-16">
      <div className="max-w-6xl h-[600px] mt-20 bg-[#061A3A] rounded-3xl px-10 py-12 text-white">
        {/* About label */}
        <div className="relative sm:ml-30 mb-5">
          <p className="about text-green-800 text-6xl italic absolute -top-8 left-35 z-10">
            About
          </p>
          <h1 className="tracking-[3px] mt-15 ml-30 text-4xl font-bold leading-snug">
            International Dive <br />
            Training Agency
          </h1>
        </div>

        {/* Description */}
        <p className="description sm:ml-30 text-gray-100  text-[20px] text-base max-w-[400px] pl-30 -mt-3 mb-10">
          The best diving experience with our professional, friendly and
          dedicated team. We offer daily diving and snorkeling trips to glorious
          reefs around the globe.
        </p>

        {/* Images Row */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <img
            src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6"
            alt="diving-1"
            className="rounded-xl h-72 w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1588582429750-57a1c514f9ef"
            alt="diving-2"
            className="rounded-xl h-64 w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d"
            alt="diving-3"
            className="rounded-xl h-64 w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1605543698510-bb5886f1e8fe"
            alt="diving-4"
            className="rounded-xl h-80 w-full object-cover"
          />
        </div> */}
      </div>
    </div>
  );
};

export default About;
