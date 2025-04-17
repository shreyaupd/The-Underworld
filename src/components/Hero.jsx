import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import underwater from "../videos/underwater.mp4";

const Hero = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch((err) => {
          console.log("Autoplay error:", err);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <>
      <motion.div
        ref={containerRef}
        className="relative w-full h-[720px] overflow-hidden -mt-4"
      >
        <video
          ref={videoRef}
          src={underwater}
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </motion.div>

      <div className="h-[900px] flex items-center justify-center bg-blue-100">
        <p className="text-2xl font-semibold">Scroll section after video</p>
      </div>
    </>
  );
};

export default Hero;
