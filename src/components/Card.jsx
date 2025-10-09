import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Card = ({ imageSrc, placeholderText, hoverContent, className }) => {
  const cardRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const content = contentRef.current;

    if (!card || !content) return;

    // Hide hover content initially
    gsap.set(content, { opacity: 0, y: 20 });

    const handleMouseEnter = () => {
      gsap.to(content, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(content, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: 'power2.in',
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer group z-0 ${className}`}
    >
      {/* Background Image */}
      <img
        src={imageSrc}
        alt={placeholderText}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Placeholder Text */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 z-5">
        <h3 className="text-lg font-semibold">{placeholderText}</h3>
      </div>

      {/* Hover Content */}
      <div
        ref={contentRef}
        className="absolute inset-0 bg-black bg-opacity-80 text-white p-6 flex flex-col justify-center items-center z-10"
      >
        {hoverContent}
      </div>
    </div>
  );
};

export default Card;
