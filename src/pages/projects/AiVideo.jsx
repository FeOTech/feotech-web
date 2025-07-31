import React from "react";
import { motion } from "framer-motion";
import ChatBotVideo from "../../assets/chatbotdemo.mp4";

const AIVideo = () => {
  return (
    <section className="flex justify-center items-center py-16 bg-transparent lg:bg-white transition-colors duration-700 ease-in-out">
      {/* Animated Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="relative z-10 w-[90vw] max-w-[320px] sm:max-w-[420px] lg:max-w-[520px] aspect-[9/16] sm:aspect-[4/5] lg:aspect-[16/10] 
                   rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/30 
                   bg-white/10 backdrop-blur-xl"
      >
        {/* Background Blobs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-60px] left-[-60px] w-[200px] h-[200px] bg-pink-400 rounded-full blur-[100px] opacity-50" />
          <div className="absolute bottom-[-60px] right-[-60px] w-[200px] h-[200px] bg-blue-400 rounded-full blur-[100px] opacity-50" />
        </div>

        {/* Video */}
        <video
          src={ChatBotVideo}
          autoPlay
          muted
          loop
          playsInline
          className="relative z-10 w-full h-full object-contain"
        />
      </motion.div>
    </section>
  );
};

export default AIVideo;


  {/* Video Container */}
        // <div className="relative z-10 w-[90vw] max-w-[320px] sm:max-w-[420px] lg:max-w-[520px] h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/30 bg-white/10 backdrop-blur-xl transition-all duration-500">
        //   {/* Background Blobs */}
        //   <div className="absolute inset-0 z-0">
        //     <div className="absolute top-[-60px] left-[-60px] w-[200px] h-[200px] bg-pink-400 rounded-full blur-[100px] opacity-50" />
        //     <div className="absolute bottom-[-60px] right-[-60px] w-[200px] h-[200px] bg-blue-400 rounded-full blur-[100px] opacity-50" />
        //   </div>

        //   {/* Video */}
        //   <video
        //     src={ChatBotVideo}
        //     autoPlay
        //     muted
        //     loop
        //     playsInline
        //     className="relative z-10 w-full h-full object-contain sm:object-cover"
        //   />
        // </div>
