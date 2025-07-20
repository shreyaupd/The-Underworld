import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import topright from "../images/topright.jpg";
import topleft from "../images/topleft.jpg";
import bottomright from "../images/bottomright.jpg";
import bottomleft from "../images/bottomleft.jpg";

// Register plugins
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const aboutLabelRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
 useEffect(()=>{
   const ctx=gsap.context(()=>{
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:aboutRef.current,
        markers: true,
        // start:"top 70%",
        end:"40% center",
        toggleActions:"restart none none reverse",
        scrub:1
      }
    });

   tl.from(aboutLabelRef.current, {
     opacity: 0, 
     x: -50,
     duration: 1,
     ease: "power2.out",
   })
   .from(titleRef.current, {
     opacity: 0, 
     x: -50,
     duration: 1,
     ease: "power4.out",
   })
   .from(descRef.current, {
     opacity: 0, 
     x: -50,
     duration: 1,
     ease: "power4.out",
   })


   },aboutRef)
   return () => ctx.revert()
 },[])
  return (
    <div 
      ref={aboutRef}
      id="about-section"
      className="w-full relative z-0 min-h-screen bg-gradient-to-b from-cyan-950/90 via-cyan-600/50 to-blue-200 px-6 py-16"
    >
      <div className="max-w-6xl h-[600px] mt-20 bg-[#061A3A] rounded-3xl px-10 py-12 text-white">
        {/* About label */}
        <div className="relative sm:ml-30 mb-5">
          <p 
            ref={aboutLabelRef}
            className="about text-green-800 text-6xl italic absolute -top-8 left-35 z-10"
          >
            About
          </p>
          <h1 
            ref={titleRef}
            className="tracking-[3px] mt-15 ml-30 text-4xl font-bold leading-snug"
          >
            International Dive <br />
            Training Agency
          </h1>
        </div>

        {/* Description */}
        <p 
          ref={descRef}
          className="description sm:ml-30 text-gray-100 text-[20px] text-base max-w-[400px] pl-30 -mt-3 mb-10"
        >
          The best diving experience with our professional, friendly and
          dedicated team. We offer daily diving and snorkeling trips to glorious
          reefs around the globe.
        </p>
          {/* Images Row 
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <img
            src={topright}
            alt="diving-1"
            className="rounded-xl h-72 w-full object-cover"
          />
          <img
            src={bottomleft}
            alt="diving-2"
            className="rounded-xl h-64 w-full object-cover"
          />
          <img
            src={bottomright}
            alt="diving-3"
            className="rounded-xl h-64 w-full object-cover"
          />
          <img
            src={topleft}
            alt="diving-4"
            className="rounded-xl h-80 w-full object-cover"
          />
        </div> */}
      </div>
    </div>
  );
};

export default About;