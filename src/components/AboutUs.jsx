import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaBullseye } from "react-icons/fa";
import AboutBG from '../assets/aboutusbg.jpg'

const AboutUs = () => {
  return (
    <section
      id="about"
      className="bg-white text-black py-24 px-4 sm:px-8 lg:px-20 relative overflow-hidden"
    >
      {/* 🔹 Main About Us Content */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-4xl md:text-5xl text-gray-900 leading-tight font-bold"
        >
          Driven-by-Technology
          <br className="block" />
          <span className="block md:inline">
            Inspired-by-Your-Success <br className="block md:hidden" />
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5 }}
          className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto"
        >
          At the heart of our work lies a passion for innovation.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5 }}
          className="text-lg text-gray-700 max-w-2xl mx-auto"
        >
          Our purpose is simple: to inspire progress. Through collaboration and
          cutting-edge solutions, we help organizations harness technology to
          achieve their vision and create lasting value.
        </motion.p>

        <div className="mt-6 w-20 h-1 mx-auto bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
      </div>

      {/* 🔸 Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-white/30 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-purple-300/30 hover:scale-[1.02] transition duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <FaLightbulb className="text-black-400 text-4xl drop-shadow-md" />
            <h3 className="text-2xl font-semibold text-black">Our Mission</h3>
          </div>
          <p className="text-gray-700">
            To deliver impactful solutions in a collaborative environment,
            consistently exceeding expectations through quality and innovation.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-white/30 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-pink-300/30 hover:scale-[1.02] transition duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <FaBullseye className="text-black-400 text-4xl drop-shadow-md" />
            <h3 className="text-2xl font-semibold text-black">Our Vision</h3>
          </div>
          <p className="text-gray-700">
            To empower organizations through modern technology and thoughtful
            digital strategy, helping them thrive in a rapidly changing world.
          </p>
        </motion.div>
      </div>

      {/* 🔹 How We Work (Spline 3D + Text) */}
     {/* 🔹 How We Work (Static Image + Text) */}
<div className="relative z-10 bg-black text-white rounded-[2rem] overflow-hidden">
  <div className="flex flex-col lg:flex-row items-stretch h-auto lg:h-[600px]">
    {/* Left: Static Image */}
    <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-full">
      <img
        src={AboutBG} // 👈 Place your image in the public folder or import statically
        alt="How we work"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>

    {/* Right: Text Content */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 sm:p-12">
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-6"
      >
        Blending Innovation with Execution
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-gray-300 text-lg leading-relaxed"
      >
        We’re a team of passionate technologists who believe in merging
        cutting-edge tools with practical solutions. From AI-powered engines
        to scalable data pipelines, we understand how to integrate modern
        technologies seamlessly into your business needs.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-gray-300 text-lg leading-relaxed mt-6"
      >
        Whether it’s building from scratch or enhancing existing systems, we
        specialize in crafting custom, scalable, and future-ready solutions
        that align with your vision and deliver measurable impact.
      </motion.p>
    </div>
  </div>
</div>

    </section>
  );
};

export default AboutUs;
