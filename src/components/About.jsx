import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./Card";
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
  const cardRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Master timeline for text
      const textTl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 90%",
          end: "bottom 0%",
          scrub: 1,
          markers: true
        }
      });

      textTl
        .from(aboutLabelRef.current, {
          opacity: 0,
          x: -100,
          duration: 1.2,
          ease: "power3.out",
        })
        .from(titleRef.current, {
          opacity: 0,
          x: -80,
          duration: 1,
          ease: "power2.out",
        }, "-=0.8")
        .from(descRef.current, {
          opacity: 0,
          x: -60,
          duration: 0.3,
          ease: "power2.out",
        }, "-=0.9");

      //except last card
      cardRefs.current.slice(0, 3).forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            y: 100,
            opacity: 0,
            scale: 0.9,
            z: 10 + i,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            z: 0,
            x: 100,
            duration: 5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 30%",
              scrub: 1,
            }
          }
        );
      });

      // Animate the last card (expanding)
      gsap.fromTo(cardRefs.current[3],
        { y: 0, scale: 0.9, opacity: 0, z: 0 },
        {
          y: -300,
          x: -100,
          scale: 1.3,
          opacity: 1,
          z: -10, 
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRefs.current[3],
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          }
        }
      );

    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="about-section"
      className="w-full relative z-0 min-h-screen bg-gradient-to-b from-cyan-950/90 via-cyan-600/50 to-blue-200 px-6 py-16"
    >
      <div ref={aboutRef} className="max-w-6xl min-h-[800px] ml-12 mt-20 bg-[#061A3A] rounded-3xl px-10 py-12 text-white">
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

        <p
          ref={descRef}
          className="description sm:ml-30 text-gray-100 text-[20px] text-base max-w-[400px] pl-30 -mt-3 mb-10"
        >
          The best diving experience with our professional, friendly and
          dedicated team. We offer daily diving and snorkeling trips to glorious
          reefs around the globe.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div ref={addToRefs}>
            <Card
              imageSrc={topleft}
              placeholderText="Diving Experience"
              hoverContent={
                <div>
                  <h3 className="text-xl font-bold mb-2">Premium Diving</h3>
                  <p>Experience the underwater world like never before with our expert guides.</p>
                </div>
              }
              className="h-80"
            />
          </div>

          <div ref={addToRefs}>
            <Card
              imageSrc={topright}
              placeholderText="Marine Life"
              hoverContent={
                <div>
                  <h3 className="text-xl font-bold mb-2">Rich Marine Ecosystem</h3>
                  <p>Discover vibrant coral reefs and diverse sea creatures.</p>
                </div>
              }
              className="h-72"
            />
          </div>

          <div ref={addToRefs}>
            <Card
              imageSrc={bottomleft}
              placeholderText="Diving Gear"
              hoverContent={
                <div>
                  <h3 className="text-xl font-bold mb-2">Top Quality Equipment</h3>
                  <p>We use only the best maintained diving gear for your safety.</p>
                </div>
              }
              className="h-64"
            />
          </div>

          <div ref={addToRefs}>
            <Card
              imageSrc={bottomright}
              placeholderText="Training"
              hoverContent={
                <div>
                  <h3 className="text-xl font-bold mb-2">Certified Instructors</h3>
                  <p>Learn from PADI-certified professionals with years of experience.</p>
                </div>
              }
              className="h-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
