import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo1 from '../images/logo1.png';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [MenuOpen, setMenuOpen] = useState(false);
  const toggle = () => setMenuOpen(!MenuOpen);
  const navRef = useRef(null);
  const showAnim = useRef();

  // GSAP animation setup
  useEffect(() => {
    showAnim.current = gsap.from(navRef.current, {
      yPercent: -100,
      paused: true,
      duration: 0.2
    }).progress(1); // Start with animation completed (navbar visible)

    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        if (self.direction === -1) {
          // Scrolling up - show navbar
          showAnim.current.play();
        } else {
          // Scrolling down - hide navbar
          showAnim.current.reverse();
        }
      }
    });

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Background color change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        navRef.current.classList.add('bg-cyan-800', 'shadow-md');
        navRef.current.classList.remove('bg-transparent');
      } else {
        navRef.current.classList.remove('bg-cyan-800', 'shadow-md');
        navRef.current.classList.add('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={navRef}
      className="Navbar fixed top-0 z-50 w-full h-20 border-none flex justify-between items-center sm:px-8 px-4 bg-transparent transition-colors duration-300"
    >
      {/* Logo */}
      <div className="logo flex items-center ml-[10px] sm:ml-10">
        <img src={logo1} className='w-[70px] h-[55px] cursor-pointer' alt="Logo" />
      </div>
      
      {/* Desktop Menu */}
      <div className='w-full hidden sm:block'>
        <ul className='flex flex-wrap justify-end items-center gap-6 sm:gap-10'>
          {['Home', 'About', 'Prices', 'Services'].map((item) => (
            <li key={item} className='cursor-pointer text-[16px] relative group px-4 py-2'>
              {item}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Button */}
      <button className='button sm:hidden' onClick={toggle} aria-label="Toggle menu">
        <div className="w-6 flex flex-col gap-1">
          {MenuOpen ? <RxCross1 size={24}/> : <RxHamburgerMenu size={24}/>}
        </div>
      </button>

      {/* Mobile Menu */}
      <div className={`
        sm:hidden absolute top-20 left-0 right-0 bg-blue-200 shadow-lg
        overflow-hidden transition-all duration-300 ease-in-out
        ${MenuOpen ? 'max-h-96' : 'max-h-0'}
      `}>
        <ul className='flex flex-col items-center py-4'>
          {['Home', 'About', 'Prices', 'Services'].map((item) => (
            <li key={item} className='cursor-pointer text-gray-700 text-[16px] w-full text-center px-4 py-3 hover:bg-blue-400'>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
 };

export default Navbar;