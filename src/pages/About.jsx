import React from "react";

const About = () => {
  return (
    <div>
     <div className="w-full bg-gradient-to-b from-cyan-800/90 via-cyan-600/50 to-blue-200 px-6 py-8">
        <div className="innerbox bg-[#061A3A] ">
          <div className="about">
            <h1 className="text-3xl font-bold mb-4">About</h1>
          </div>

          <div className="heading mb-4 -mt-8">
            International Dive Training Agency
          </div>

          <div className="contents">
            The best diving experience with our professional,friendly and
            dedicated team. We offer daily diving and snorkeling trip to
            glorious reefs around the globe.
          </div>

          <div className="photos mt-4">
            <img src="" alt="photos" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
