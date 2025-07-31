import React from "react";
import { motion } from "framer-motion";
import ProjectImg from '../../assets/dark-bg1.jpg'

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A full-featured admin dashboard built with React, TailwindCSS, and Chart.js to monitor orders, users, and sales metrics.",
    image: ProjectImg,
    tech: ["React", "TailwindCSS", "Chart.js"]
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio site showcasing projects, blogs, and contact form integration using React and Framer Motion.",
    image: ProjectImg,
    tech: ["React", "Framer Motion", "EmailJS"]
  },
  {
    title: "Startup Landing Page",
    description: "A responsive, modern landing page built with HTML5, CSS3, and vanilla JavaScript optimized for conversions.",
    image: ProjectImg,
    tech: ["HTML", "CSS", "JavaScript"]
  },
];

const WebDev = () => {
  return (
    <section className="bg-white text-gray-800 py-20 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-8"
        >
          Web Development Excellence
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-16"
        >
          We specialize in building responsive, scalable, and aesthetic websites
          using modern web technologies. Here's a glimpse of our expertise and featured projects.
        </motion.p>

        {/* Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-20 text-center">
          {["HTML5", "CSS3", "JavaScript", "React", "Tailwind", "Next.js"].map((tech, idx) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-50 border border-gray-200 rounded-xl py-6 px-4 shadow-md hover:shadow-lg transition"
            >
              <p className="text-lg font-semibold">{tech}</p>
            </motion.div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img loading="lazy" src={project.image} alt={project.title} className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDev;
