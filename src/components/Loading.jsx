import { useRef, useEffect } from "react";
import gsap from "gsap";
import topright from "../images/topright.jpg";
import topleft from "../images/topleft.jpg";
import bottomright from "../images/bottomright.jpg";
import bottomleft from "../images/bottomleft.jpg";

const Loading = ({ onComplete }) => {
  const imgref = useRef([]);
  const textref = useRef(null);
  const bodyref = useRef(null);
  const bubbleRefs = useRef([]);
  const loaderref = useRef(null);

  const bubbles = Array.from({ length: 30 });

  const initialStyles = [
    { opacity: 0, top: "-200px", left: "-200px", transform: "scale(0.5)" },
    { opacity: 0, top: "-200px", right: "-200px", transform: "scale(0.5)" },
    { opacity: 0, bottom: "-200px", left: "-200px", transform: "scale(0.5)" },
    { opacity: 0, bottom: "-200px", right: "-200px", transform: "scale(0.5)" },
  ];

  useEffect(() => {
    gsap.set(textref.current, { opacity: 0, y: 20 });
    gsap.set(bubbleRefs.current, {
      opacity: 0,
      y: () => Math.random() * 100 + 50,
      x: () => Math.random() * 200 - 100,
    });

    const timeline = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    // Bubble rise
    bubbleRefs.current.forEach((bubble, i) => {
      const size = Math.random() * 20 + 10;
      gsap.set(bubble, {
        width: size,
        height: size,
        borderRadius: "50%",
      });

      timeline.to(
        bubble,
        {
          opacity: Math.random() * 0.6 + 0.2,
          duration: 0.5,
          delay: i * 0.05,
        },
        0
      );

      timeline.to(
        bubble,
        {
          y: `-=${Math.random() * 500 + 200}`,
          x: `+=${Math.random() * 60 - 30}`,
          opacity: 0,
          duration: Math.random() * 3 + 2,
          ease: "none",
        },
        0.5 + i * 0.05
      );
    });

    // Loading dots fade
    timeline.to(loaderref.current, { opacity: 0 }, "-=1");

    // Fly in images to center
    imgref.current.forEach((img, i) => {
      timeline.to(img, {
        duration: 1.2,
        opacity: 1,
        top: "50%",
        left: "50%",
        x: "-50%",
        y: "-50%",
        scale: 1,
        rotation: 0,
        ease: "back.out(1.2)",
        delay: i * 0.1,
      });
    });

    timeline.to({}, { duration: 0.5 });

    // Fly out to corners
    imgref.current.forEach((img, i) => {
      timeline.to(
        img,
        {
          duration: 1.5,
          top: i % 2 === 0 ? "20%" : "80%",
          left: i < 2 ? "20%" : "80%",
          scale: 0.8,
          opacity: 0.7,
          rotation: i % 2 === 0 ? -15 : 15,
          filter: "blur(1px) brightness(0.9)",
          ease: "power2.out",
        },
        "images-out"
      );
    });

    timeline.to(
      textref.current,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        onStart: () => {
          gsap.to(".final-bubbles", {
            y: "-=150",
            opacity: 0,
            duration: 2,
            stagger: 0.1,
            ease: "power2.out",
          });
        },
      },
      "+=0.3"
    );

    timeline.to(
      bodyref.current,
      {
        backgroundColor: "#0a2e38",
        duration: 2,
        ease: "sine.inOut",
      },
      0
    );

    return () => timeline.kill();
  }, [onComplete]);

  return (
    <div
      ref={bodyref}
      className="relative h-screen w-screen bg-black overflow-hidden"
    >
      {/* Bubbles */}
      {bubbles.map((_, i) => (
        <div
          key={`bubble-${i}`}
          ref={(el) => (bubbleRefs.current[i] = el)}
          className={`absolute rounded-full bg-white ${
            i > 20 ? "final-bubbles" : ""
          }`}
          style={{
            width: `${Math.random() * 15 + 5}px`,
            height: `${Math.random() * 15 + 5}px`,
            left: `${Math.random() * 100}%`,
            bottom: "0px",
            opacity: 0,
            filter: "blur(0.5px)",
          }}
        />
      ))}

      {/* Main Title */}
      <h1
        ref={textref}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl opacity-0 px-4"
        style={{
          textShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
          fontFamily: "'Barlow Condensed', sans-serif",
          letterSpacing: "0.1em",
        }}
      >
        THE UNDERWORLD
      </h1>

      {/* Responsive Images */}
      {[topleft, topright, bottomleft, bottomright].map((src, i) => (
        <img
          key={i}
          ref={(el) => (imgref.current[i] = el)}
          src={src}
          alt={`diving-${i}`}
          className="absolute w-24 sm:w-32 md:w-40 lg:w-48 aspect-square object-cover rounded-lg shadow-xl border-2 border-cyan-300"
          style={initialStyles[i]}
        />
      ))}

      {/* Loading Dots */}
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 text-white opacity-80">
        <div ref={loaderref} className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-cyan-300 rounded-full"
              style={{
                animation: `pulse 1.4s infinite ${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
