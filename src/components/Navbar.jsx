import React from 'react';
import logo1 from '../images/logo1.png';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [MenuOpen, setMenuOpen] = React.useState(false);
  const toggle = () => {
    setMenuOpen(!MenuOpen);
  };

  return (
    <div className='Navbar sticky top-0 z-50 w-full h-20 bg-white/1 border-none flex justify-between items-center sm:px-8 px-4'>
      {/* Logo and Desktop Menu (unchanged) */}
      <div className="logo flex items-center ml-[10px] sm:ml-10">
        <img src={logo1} className='w-[70px] h-[55px] cursor-pointer' alt="Logo" />
      </div>
      
      <div className='w-full hidden sm:block'>
        <ul className='flex flex-wrap justify-end items-center gap-6 sm:gap-10'>
          {/* Your existing desktop menu items */}
        </ul>
      </div>

      {/* Mobile Button */}
      <button 
        className='button sm:hidden'
        onClick={toggle}
        aria-label="Toggle menu"
      >
        <div className="w-6 flex flex-col gap-1">
          {MenuOpen ? <RxCross1 size={24} /> : <RxHamburgerMenu size={24} />}
        </div>
      </button>

      {/* Improved Mobile Menu */}
      <div className={`
        sm:hidden absolute top-20 right-4 
        bg-blue-500 shadow-xl rounded-lg
        overflow-hidden transition-all duration-300 ease-in-out
        ${MenuOpen ? 'max-h-96 opacity-100 w-48' : 'max-h-0 opacity-0 w-48'}
      `}>
        <ul className='flex flex-col py-2'>
          {['Home', 'About', 'Prices', 'Services'].map((item) => (
            <li 
              key={item}
              className='cursor-pointer text-gray-100 text-[16px] 
                         px-6 py-3 hover:bg-blue-600 transition-colors'
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;