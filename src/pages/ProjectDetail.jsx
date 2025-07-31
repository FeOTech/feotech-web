// src/pages/ProjectDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import ProjectVideo from "../components/ProjectVideo";
import { motion } from "framer-motion";
// import RecommendationSystem from '../projects/RecommendationSystem';
// import DataEngineering from '../projects/DataEngineering';
// import WebDevelopment from '../projects/WebDevelopment';
import AIChatbot from "./projects/AiChatbot";
import ProjectNavbar from "../components/BreadCrumbs";
import DataEngineeringProject from "./projects/DataEngineering";
import Footer from "../components/Footer";
import RecommendationEngine from "./projects/RecommendationEgine";
import WebDev from "./projects/WebDev";
const projectMap = {
  "ai-chatbot": {
    title: "AI Chatbot",
    description: "A GPT-powered assistant for smart conversations.",
    // videoSrc: chatBotBGVideo,
    Component: AIChatbot,
  },
  "recommendation-system": {
    title: "Recommendation System",
    description: "Personalized suggestions engine for e-commerce & media.",
    // videoSrc: chatBotBGVideo,
    Component: RecommendationEngine,
  },
  "data-engineering": {
    title: "Data Engineering",
    description:
      "Build data pipelines, transform and warehouse massive datasets.",
    // videoSrc: chatBotBGVideo,
    Component: DataEngineeringProject,
  },
  "web-development": {
    title: "Web Development",
    description: "Scalable full-stack applications with React, Node & MongoDB.",
    Component: WebDev,
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectMap[id];

  if (!project)
    return (
      <div className="p-10 text-center text-red-600">Project not found</div>
    );

  const { videoSrc, title, description, Component } = project;

  return (
    <>
      <ProjectNavbar />
      <ProjectVideo
        videoSrc={videoSrc}
        title={title}
        description={description}
      />
      <Component />
      {/* More Projects Section */}
      <section className="bg-white text-black py-24 px-6 md:px-12">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-14 text-center bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text"
        >
          Explore More Projects
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {Object.entries(projectMap)
            .filter(([key]) => key !== id)
            .map(([key, project], i) => (
              <motion.a
                key={key}
                href={`/project/${key}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white hover:shadow-xl rounded-2xl p-6 border border-gray-200 transition-transform duration-300 hover:-translate-y-1"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 text-sm">{project.description}</p>
                <span className="inline-block mt-4 text-indigo-600 hover:underline font-medium">
                  View Project →
                </span>
              </motion.a>
            ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProjectDetails;
