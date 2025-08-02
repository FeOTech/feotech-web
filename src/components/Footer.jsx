import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaMailchimp } from "react-icons/fa";
import Logo from "../assets/svg/Logo";
import { Link } from "react-router-dom";
import { SiGmail } from "react-icons/si";
// import footerAnimation from "../assets/footer-lottie.json"; // adjust path if needed

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-black via-[#0f0f0f] to-black text-white pt-20 pb-10 px-6 sm:px-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link to="/#home" className="flex items-center gap-2 group">
            <div className="flex items-center gap-3 mb-4">
              <Logo width={40} height={40} color="#FFFFFF" />
              <h3 className="text-3xl font-extrabold text-white tracking-tight">
                feotech
              </h3>
            </div>
          </Link>
          <p className="text-white/70 text-sm leading-relaxed">
            Empowering digital innovation with strategy, technology, and
            passion. Your trusted tech extension.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-white/90">
            Projects
          </h4>
          <ul className="space-y-2 text-white/60 text-sm">
            <li>
              <Link
                to="/project/web-development"
                className="hover:text-white transition"
              >
                Web Development
              </Link>
            </li>
            <li>
              <Link
                to="/project/data-engineering"
                className="hover:text-white transition"
              >
                Data Engineering
              </Link>
            </li>
            <li>
              <Link
                to="/project/recommendation-system"
                className="hover:text-white transition"
              >
                Recommendation System
              </Link>
            </li>
            <li>
              <Link
                to="/project/ai-chatbot"
                className="hover:text-white transition"
              >
                AI Chatbot
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-white/90">
            Resources
          </h4>
          <ul className="space-y-2 text-white/60 text-sm">
            <li>
              <Link to="/team-details" className="hover:text-white transition">
                Team Details
              </Link>
            </li>
            <li>
              <Link to="/#contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-white/90">
            Connect
          </h4>
          <div className="flex gap-5 text-xl">
            <a
              href="https://www.linkedin.com/company/feotech/"
              className="text-white/60 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/FeOTech"
              className="text-white/60 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:feotech.in@gmail.com"
              className="text-white/60 hover:text-white transition"
              rel="noopener noreferrer"
            >
              <SiGmail />
            </a>
          </div>
        </div>
      </div>

      {/* Lottie Animation at Bottom Right */}
      {/* <div className="absolute top-0 right-0 w-80 sm:w-48 opacity-70 pointer-events-none">
        <Lottie animationData={footerAnimation} loop={true} />
      </div> */}

      {/* Bottom Note */}
      <div className="mt-12 text-center text-xs text-white/40 border-t border-white/10 pt-6">
        &copy; {new Date().getFullYear()} Feotech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
