import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Card = ({ imageSrc, placeholderText, hoverContent, className }) => {
  const cardRef = useRef(null);
  const contentRef = useRef(null);
  
  useEffect(() => {
    const card = cardRef.current;
    const content = contentRef.current;
    
    if (!card || !content) return;
    
    // Initial setup - hide content
    gsap.set(content, { opacity: 0, y: 20 });
    
    // Define event handlers
    const handleMouseEnter = () => {
      gsap.to(content, { 
        opacity: 1, 
        y: 0, 
        duration: 0.3,
        ease: 'power2.out'
      });
    };
    
    const handleMouseLeave = () => {
      gsap.to(content, { 
        opacity: 0, 
        y: 20, 
        duration: 0.3,
        ease: 'power2.in'
      });
    };
    
    // Add event listeners
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    // Cleanup function
    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer group ${className}`}
    >
      {/* Background Image */}
      <img 
        src={imageSrc} 
        alt={placeholderText} 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Placeholder Text (always visible) */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
        <h3 className="text-lg font-semibold">{placeholderText}</h3>
      </div>
      
      {/* Hover Content (hidden by default) */}
      <div 
        ref={contentRef}
        className="absolute inset-0 bg-black bg-opacity-80 text-white p-6 flex flex-col justify-center items-center"
      >
        {hoverContent}
      </div>
    </div>
  );
};

export default Card;