import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Logo from "../assets/logo.svg";

const navItems = [
  { label: "Home", to: "home" },
  { label: "Work", to: "work" },
  { label: "About", to: "about" },
  { label: "Team", to: "team" },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link
            to="home"
            smooth={true}
            offset={-80}
            duration={500}
            onSetActive={() => setActiveLink("home")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img src={Logo} alt="logo" className="w-8 h-8" loading="lazy"/>
            <span className="text-2xl font-bold text-gray-900">feotech</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="relative hidden md:flex gap-8 text-gray-700 font-medium">
          {navItems.map(({ label, to }) => {
            const isActive = activeLink === to;

            return (
              <Link
                key={to}
                to={to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onSetActive={() => setActiveLink(to)}
                className={`relative ${
                  isActive
                    ? "pointer-events-none text-gray-400 cursor-default"
                    : "cursor-pointer"
                }`}
              >
                <span className="relative z-10">{label}</span>
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-purple-500 rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="px-4 py-2 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800 cursor-pointer"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-gray-700 text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <motion.div
        initial={false}
        animate={{ height: mobileOpen ? "auto" : 0 }}
        className="overflow-hidden md:hidden bg-white shadow-md"
      >
        <div className="flex flex-col px-6 py-4 gap-4 text-gray-800 font-medium">
          {navItems.map(({ label, to }) => {
            const isActive = activeLink === to;

            return (
              <Link
                key={to}
                to={to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onSetActive={() => setActiveLink(to)}
                onClick={() => !isActive && setMobileOpen(false)}
                className={`relative ${
                  isActive
                    ? "pointer-events-none text-gray-400 cursor-default"
                    : "cursor-pointer"
                }`}
              >
                <span className="z-10 relative">{label}</span>
                {isActive && (
                  <motion.div
                    layoutId="bubble"
                    className="absolute inset-0 bg-purple-100 rounded-md -z-10"
                  />
                )}
              </Link>
            );
          })}
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-4 py-2 bg-black text-white rounded-full text-sm font-semibold text-center"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
