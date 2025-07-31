import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/svg/Logo";

const ProjectNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <AnimatePresence>
        <motion.header
          className={`w-full fixed top-0 z-50 transition-colors duration-500 ${
            scrolled
              ? "bg-white text-black shadow-md"
              : "bg-black/30 text-white backdrop-blur-md"
          }`}
          initial={{ y: -60 }}
          animate={{ y: 0 }}
          exit={{ y: -60 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
            {/* Left: Back + Logo */}
            <div className="flex items-center gap-4 sm:gap-6">
              <button
                onClick={() => navigate(-1)}
                className={`flex items-center gap-2 text-sm transition duration-300 px-3 py-1 rounded-full border ${
                  scrolled
                    ? "border-black/20 text-black hover:bg-black/10"
                    : "border-white/20 text-white hover:bg-white/10"
                }`}
              >
                <FaArrowLeft />
                <span className="hidden sm:inline">Back</span>
              </button>

              <Link to="/" className="flex items-center gap-2 group">
                <Logo width={28} height={28} color={scrolled ? '' : '#FFFFFF'} />
                <span
                  className={`text-xl sm:text-2xl font-extrabold tracking-tight ${
                    scrolled
                      ? "text-black"
                      : "bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
                  }`}
                >
                  feotech
                </span>
              </Link>
            </div>

            {/* Desktop CTA */}
            <Link
              to="/#contact"
              className={`hidden md:inline-block px-5 py-2 rounded-full text-sm font-medium transition duration-300 ${
                scrolled
                  ? "bg-black text-white hover:bg-gray-900"
                  : "bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white hover:from-fuchsia-700 hover:to-indigo-700"
              }`}
            >
              Contact Us
            </Link>
          </div>
        </motion.header>
      </AnimatePresence>

      {/* Mobile Contact Button (Sticky Bottom FAB) */}
      <div className="fixed bottom-4 right-4 z-40 md:hidden">
        <Link
          to="/#contact"
          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium hover:from-purple-700 hover:to-indigo-700 transition"
        >
          <FaEnvelope />
          Contact
        </Link>
      </div>
    </>
  );
};

export default ProjectNavbar;
