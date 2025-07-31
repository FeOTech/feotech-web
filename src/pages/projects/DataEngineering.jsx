import React from "react";
import { motion } from "framer-motion";
import { FaDatabase, FaChartLine, FaCogs } from "react-icons/fa";
import ProjectGallery from "./DEProjectGallery";
import Darkbg from '../../assets/dark-bg1.jpg';
import ETLIMG from '../../assets/etlimg.png';
 
const techStack = [
  {
    icon: <FaDatabase className="text-yellow-400 text-4xl" />,
    title: "Apache Spark",
    desc: "For real-time data processing and transformation.",
  },
  {
    icon: <FaCogs className="text-cyan-400 text-4xl" />,
    title: "ETL Pipelines",
    desc: "Streamlined batch & streaming data orchestration.",
  },
  {
    icon: <FaChartLine className="text-green-400 text-4xl" />,
    title: "Apache Superset",
    desc: "Interactive dashboards and visualizations.",
  },
];

const impacts = [
  "Real-time insights into regional sales performance",
  "Trend detection for stock optimization",
  "Visual dashboard with time-series and categorical breakdowns",
];

const DataEngineeringProject = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 py-16 bg-gradient-to-br from-white to-gray-100 relative overflow-hidden">
        <div className="w-full md:w-1/2 text-center md:text-left z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
          >
            Retail Sales Analytics ETL Pipeline
          </motion.h1>
          <p className="text-gray-600 max-w-xl text-lg leading-relaxed">
            Real-time sales insights powered by Spark & Superset, delivering
            actionable intelligence for modern retail.
          </p>
        </div>
        <motion.img
          loading="lazy"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          src={Darkbg}
          alt="ETL Visual"
          className="w-full md:w-1/2 mt-10 md:mt-0 object-contain z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-100 opacity-30 z-0" />
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">Overview</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          This end-to-end data engineering project simulates real-time retail
          sales data, processes it using Apache Spark, and visualizes
          business-critical insights using Apache Superset. It’s a scalable
          solution ideal for high-velocity retail environments.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Tech Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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

      {/* Project Image Gallery */}
      <ProjectGallery />

      {/* ETL Workflow */}
      <section className="max-w-6xl mx-auto py-20 px-6 bg-gray-50 rounded-xl">
        <h2 className="text-3xl font-bold mb-8 text-center">ETL Workflow</h2>
        <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-10">
          The system ingests simulated sales data, transforms it via Spark, and
          loads the results into a PostgreSQL data warehouse, ready for Superset
          dashboarding.
        </p>
        <motion.img
          loading="lazy"
          src={ETLIMG}
          alt="ETL Pipeline Diagram"
          className="rounded-xl mx-auto max-w-full shadow-md"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </section>

      {/* Business Impact */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Business Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg text-center"
            >
              <p className="text-gray-700 font-medium">{impact}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Navigation CTA */}
      {/* <div className="text-center py-16">
        <a
          href="/projects/next"
          className="inline-block bg-gradient-to-r from-pink-500 to-orange-500 px-8 py-3 rounded-full text-lg font-semibold text-white hover:scale-105 transition transform"
        >
          Next Project →
        </a>
      </div> */}
    </div>
  );
};

export default DataEngineeringProject;
