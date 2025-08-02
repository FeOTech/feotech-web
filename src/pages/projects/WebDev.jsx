import React from "react";
import { motion } from "framer-motion";
import Project1 from "../../assets/quantumweb.png";
import Project2 from "../../assets/fashionweb.png";
import whitebg from "../../assets/white-bg.jpg";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaChartLine,
  FaLink,
} from "react-icons/fa";
import { SiTailwindcss, SiVite, SiFramer, SiJavascript } from "react-icons/si";

const projects = [
  {
    title: "QuantumFlow – Fintech Web App",
    description:
      "QuantumFlow is a modern, responsive fintech website designed for startups and enterprises. It showcases financial metrics, service offerings, and call-to-action sections with a professional UI. Built with React and TailwindCSS for scalability and performance.",
    image: Project1,
    tech: ["React", "TailwindCSS", "Framer Motion"],
    flip: false,
    link: "https://qunatum-flow.vercel.app/",
  },
  {
    title: "Fashion Studio Portfolio – Creative Agency Site",
    description:
      "A visually immersive portfolio site for fashion studios and creative agencies. Featuring full-screen visuals, elegant typography, and modern scroll animations, it delivers a striking brand identity using React and Framer Motion.",
    image: Project2,
    tech: ["React", "Framer Motion", "EmailJS"],
    flip: true,
    link: "https://fashion-studio-portfolio.vercel.app/",
  },
];

const techStack = [
  {
    icon: <FaReact className="text-cyan-400 text-4xl" />,
    title: "React.js",
    desc: "Component-based framework for building dynamic user interfaces.",
  },
  {
    icon: <SiTailwindcss className="text-blue-400 text-4xl" />,
    title: "Tailwind CSS",
    desc: "Utility-first CSS framework for building responsive, modern UIs.",
  },
  {
    icon: <SiFramer className="text-pink-400 text-4xl" />,
    title: "Framer Motion",
    desc: "Declarative animations and transitions for React components.",
  },
  {
    icon: <FaNodeJs className="text-purple-400 text-4xl" />,
    title: "EmailJS",
    desc: "Send emails directly from the frontend with zero backend hassle.",
  },
  {
    icon: <FaChartLine className="text-green-400 text-4xl" />,
    title: "Chart.js",
    desc: "Beautiful charts and graphs for dashboards and analytics.",
  },
  {
    icon: <SiVite className="text-yellow-400 text-4xl" />,
    title: "Vite",
    desc: "Next-gen frontend build tool for lightning-fast development.",
  },
];

const WebDev = () => {
  return (
    <section className="bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* HERO SECTION */}
      <div
        loading='lazy'
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${whitebg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white z-10 text-3xl sm:text-4xl md:text-6xl font-extrabold text-center px-4 leading-tight"
        >
          Crafting Modern Web Experiences
        </motion.h1>
      </div>

      {/* PROJECTS SECTION */}
      {projects.map((proj, i) => (
        <section
          key={i}
          className={`relative py-20 px-4 sm:px-6 md:px-20 flex flex-col ${
            proj.flip ? "md:flex-row-reverse" : "md:flex-row"
          } gap-12 items-center`}
        >
          <motion.div
            initial={{ opacity: 0, x: proj.flip ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl w-full md:w-1/2"
          >
            <img
              loading="lazy"
              src={proj.image}
              alt={proj.title}
              className="w-full h-64 sm:h-80 md:h-[360px] object-cover rounded-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: proj.flip ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center w-full md:w-1/2"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              {proj.title}
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-6">
              {proj.description}
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              {proj.tech.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-white text-sm px-4 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-fit bg-gradient-to-r from-purple-600 to-teal-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-200"
              >
                <FaLink className="text-white" />
                Live Demo
              </a>
            )}
          </motion.div>
        </section>
      ))}

      {/* KEY FEATURES */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
          Key Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Real-Time Interactions
            </h3>
            <p className="text-gray-700 text-base">
              Both projects use real-time animations and interactions powered by
              Framer Motion for immersive user experiences.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Fully Responsive</h3>
            <p className="text-gray-700 text-base">
              Each design is optimized for all screen sizes with TailwindCSS,
              ensuring a seamless mobile-to-desktop transition.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Fast & Optimized</h3>
            <p className="text-gray-700 text-base">
              Powered by Vite, the build and load times are lightning fast with
              minimal performance trade-offs.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Professional Design</h3>
            <p className="text-gray-700 text-base">
              Carefully curated typography, color schemes, and layout principles
              to align with real-world design standards.
            </p>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="max-w-6xl mx-auto py-20 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
          Tech Stack
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {techStack.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-black text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <div className="mb-4">{item.icon}</div>
              <h4 className="font-semibold text-xl mb-2">{item.title}</h4>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default WebDev;
