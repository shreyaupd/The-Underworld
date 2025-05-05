import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import underwater from "../videos/underwater.mp4";
import people from "../videos/people.mp4";
import people2 from "../videos/people2.mp4";
import SplitText from "../imports/SplitText";

const Hero = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const containerRef = useRef(null);

  const [currentVideo, setCurrentVideo] = useState(1); 
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const texts = [
    "Welcome To The Underworld",
    "Discover What Lies Beneath",
    "Embrace the Unknown",
  ];
  const currentText = texts[currentVideo - 1];

  const animationVariants = [
    {
      initial: { opacity: 0, transform: "translate3d(0, 50px, 0)" },
      animate: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    },
    {
      initial: { opacity: 0, transform: "scale(0.8)" },
      animate: { opacity: 1, transform: "scale(1)" },
    },
    {
      initial: { opacity: 0, transform: "rotateY(90deg)" },
      animate: { opacity: 1, transform: "rotateY(0deg)" },
    },
  ];
  const currentAnimation = animationVariants[currentVideo - 1];
  useEffect(() => {
    if (!isInView) return;

    const currentRef =
      currentVideo === 1
        ? videoRef1
        : currentVideo === 2
        ? videoRef2
        : videoRef3;

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
      nextVideo === 1 ? videoRef1 : nextVideo === 2 ? videoRef2 : videoRef3;

    if (nextRef.current) {
      nextRef.current.load();
      nextRef.current
        .play()
        .catch((err) => console.log("Next autoplay error:", err));
    }
  };


  

  return (
    <motion.div
      ref={containerRef}
       className="relative w-full h-[720px] overflow-hidden -mt-20 z-10">
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

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-950/90 via-cyan-600/50 to-blue-200 opacity-40"></div>

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col">
        <SplitText
          key={currentText}
          text={currentText}
          className="relative text-[60px] font-bold text-blue-100 text-center drop-shadow-lg"
          delay={150}
          animationFrom={currentAnimation.initial}
          animationTo={currentAnimation.animate}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
        <motion.div
          className="text-white tracking-widest text-sm mt-4 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          DIVE DEEPER TO EXPLORE
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;