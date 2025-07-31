// src/components/ProjectVideo.jsx
import React from "react";
import { motion } from "framer-motion";
import BGVideo from "../assets/bg-video2.mp4";

const ProjectVideo = ({ title, description }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 animate-zoom-slow"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={BGVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 text-4xl md:text-6xl font-extrabold leading-relaxed"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 1.8 }} // <-- longer delay here
          className="mt-6 max-w-2xl text-lg md:text-xl text-white/90"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};

export default ProjectVideo;