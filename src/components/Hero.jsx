import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="home" className="bg-white py-24 text-center px-4">
      <div className="max-w-5xl mx-auto">
        {/* 🔥 Static H1 for fast LCP */}
        <h1 className="text-4xl md:text-5xl text-gray-900 leading-tight font-extrabold">
          Innovate-with-AI
          <br className="block" />
          <span className="block md:inline">
            Shape-with-Data <br className="block md:hidden" />
            Scale-Globally
          </span>
        </h1>

        {/* ✅ Subtle fade-in for paragraph (non-blocking) */}
        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed"
        >
          We deliver advanced digital solutions to harness technology for
          smarter decision-making, operational efficiency, and sustainable
          progress.
        </motion.p>

        {/* 🎯 CTA Button with Motion */}
        <div className="mt-10">
          <Link
            to="contact"
            smooth={true}
            offset={-80}
            duration={500}
            spy={true}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative inline-flex items-center gap-2 bg-gray-900 text-white font-medium px-6 py-3 rounded-full overflow-hidden"
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute bottom-0 left-4 w-0 h-[2px] bg-purple-400 rounded-full group-hover:w-[calc(100%-2rem)] transition-all duration-500 ease-in-out"></span>
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
