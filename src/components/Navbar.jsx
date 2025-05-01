import logo1 from "../images/logo1.png";
import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar sticky top-0 z-50 w-full h-20 bg-white/3 border-none flex items-center px-4">
      
        <ul className="relative flex ml-10 items-center justify-center">
        <li className="cursor-pointer">
            <img src={logo1} className="w-25 h-18 cursor-pointer" />
          </li>
          </ul>
          <div className="w-full">
          <ul className="flex justify-center items-center ml-90 flex-row gap-25">
          <li className="cursor-pointer text-[16px] relative group">
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          </li>
          <li className="cursor-pointer text-[16px] relative group">
            About
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          </li>
          <li className="cursor-pointer text-[16px] relative group">
            Prices
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          </li>
          <li className="cursor-pointer text-[16px] relative group">
            Services
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
