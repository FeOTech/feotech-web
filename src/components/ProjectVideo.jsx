// src/components/ProjectVideo.jsx
import React from "react";
import { motion } from "framer-motion";
import BGVideoMP4 from "../assets/bg-video2.mp4";
import BGVideoWEBM from "../assets/bg-video2.webm"; // Make sure this exists

const ProjectVideo = ({ title, description }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 animate-zoom-slow"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        {/* Prefer WebM for modern browsers */}
        <source src={BGVideoWEBM} type="video/webm" />
        <source src={BGVideoMP4} type="video/mp4" />
        <track kind="captions" label="English captions" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 text-4xl md:text-6xl font-extrabold leading-relaxed">
            {title}
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1.3, delay: 1.8 }}
        >
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/90">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectVideo;
