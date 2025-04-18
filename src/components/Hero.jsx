import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import underwater from "../videos/underwater.mp4";
import people from "../videos/people.mp4";
import people2 from "../videos/people2.mp4";

const Hero = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const containerRef = useRef(null);

  const [currentVideo, setCurrentVideo] = useState(1);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;

    const currentRef =
      currentVideo === 1 ? videoRef1 :
      currentVideo === 2 ? videoRef2 :
      videoRef3;

    if (currentRef.current) {
      currentRef.current.currentTime = 0;
      currentRef.current
        .play()
        .catch((err) => console.log("Autoplay error:", err));
    }
  }, [isInView, currentVideo]);

  const handleVideoEnd = () => {
    let nextVideo = currentVideo === 1 ? 2 : currentVideo === 2 ? 3 : 1;
    setCurrentVideo(nextVideo); 

    const nextRef =
      nextVideo === 1 ? videoRef1 :
      nextVideo === 2 ? videoRef2 :
      videoRef3;

  
    if (nextRef.current) {
      nextRef.current.load(); 
      nextRef.current.play().catch((err) => console.log("Next autoplay error:", err));
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full h-[720px] overflow-hidden -mt-4"
    >
      <motion.video
        ref={videoRef1}
        src={underwater}
        muted
        playsInline
        onEnded={handleVideoEnd}
        initial={{ opacity: 0 }}
        animate={{ opacity: currentVideo === 1 ? 1 : 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }} 
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <motion.video
        ref={videoRef2}
        src={people}
        muted
        playsInline
        onEnded={handleVideoEnd}
        initial={{ opacity: 0 }}
        animate={{ opacity: currentVideo === 2 ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }} 
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <motion.video
        ref={videoRef3}
        src={people2}
        muted
        playsInline
        onEnded={handleVideoEnd}
        initial={{ opacity: 0 }}
        animate={{ opacity: currentVideo === 3 ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }} 
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-600 to-blue-900 opacity-40"></div>

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <p className="text-white text-4xl font-bold">
          Welcome to the Underworld
        </p>
      </div>
    </motion.div>
  );
};

export default Hero;