import React from 'react';
import logo1 from '../images/logo1.png';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [MenuOpen, setMenuOpen] = React.useState(false);
  const toggle = () => setMenuOpen(!MenuOpen);
  
  return (
    <div className='Navbar sticky top-0 z-50 w-full h-20 bg-white/1 border-none flex justify-between items-center sm:px-8 px-4'>
      {/* Logo */}
      <div className="logo flex items-center ml-[10px] sm:ml-10">
        <img src={logo1} className='w-[70px] h-[55px] cursor-pointer' alt="Logo" />
      </div>
      
      {/* Desktop Menu (unchanged) */}
      <div className='w-full hidden sm:block'>
        <ul className='flex flex-wrap justify-end items-center gap-6 sm:gap-10'>
          <li className='cursor-pointer text-[16px] relative group px-4 py-2'>
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          </li>
          <li className='cursor-pointer text-[16px] relative group px-4 py-2'>
            About
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          </li>
          <li className='cursor-pointer text-[16px] relative group px-4 py-2'>
            Prices
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          </li>
          <li className='cursor-pointer text-[16px] relative group px-4 py-2'>
            Services
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          </li>
        </ul>
      </div>

      {/* Mobile Button */}
      <button className='button sm:hidden' onClick={toggle} aria-label="Toggle menu">
        <div className="w-6 flex flex-col gap-1">
          {MenuOpen ? <RxCross1 size={24}/> : <RxHamburgerMenu size={24}/>}
        </div>
      </button>

      {/* Mobile Menu with Smooth Animation */}
      <div className={`
        sm:hidden absolute top-20 left-0 right-0 bg-blue-200 shadow-lg
        overflow-hidden transition-all duration-300 ease-in-out
        ${MenuOpen ? 'max-h-96' : 'max-h-0'}
      `}>
        <ul className='flex flex-col items-center py-4'>
          <li className='cursor-pointer text-gray-700 text-[16px] w-full text-center px-4 py-3 hover:bg-blue-400'>
            Home
          </li>
          <li className='cursor-pointer text-gray-700 text-[16px] w-full text-center px-4 py-3 hover:bg-blue-400'>
            About
          </li>
          <li className='cursor-pointer text-gray-700 text-[16px] w-full text-center px-4 py-3 hover:bg-blue-400'>
            Prices
          </li>
          <li className='cursor-pointer text-gray-700 text-[16px] w-full text-center px-4 py-3 hover:bg-blue-400'>
            Services
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;