import React from "react";
import RecomDemo from "../../assets/recommandation-demo.mp4";
import { motion } from "framer-motion";
import { FaPython, FaDocker, FaDatabase } from "react-icons/fa";
import { SiScikitlearn, SiMongodb, SiFlask } from "react-icons/si";

const techStack = [
  { icon: <FaPython className="text-yellow-500 text-2xl" />, label: "Python" },
  { icon: <SiScikitlearn className="text-blue-500 text-2xl" />, label: "Scikit-Learn" },
  { icon: <SiFlask className="text-gray-700 text-2xl" />, label: "Flask" },
  { icon: <FaDatabase className="text-pink-500 text-2xl" />, label: "SQL" },
  { icon: <SiMongodb className="text-green-500 text-2xl" />, label: "MongoDB" },
  { icon: <FaDocker className="text-blue-400 text-2xl" />, label: "Docker" },
];

const keyFeatures = [
  "Personalized recommendations with collaborative filtering",
  "Matrix factorization with SVD",
  "Real-time inference from user behavior",
  "Cold-start handling with hybrid strategies",
  "Evaluation using RMSE and Precision@K"
];

const RecommendationEngine = () => {
  return (
    <section className="w-full bg-white text-gray-800 overflow-hidden py-16 px-4 sm:px-8">

 {/* Title and Description */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-600 text-transparent bg-clip-text mb-6 leading-normal"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Product Recommendation Engine
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Built using collaborative filtering, real-time behavior tracking, and hybrid ML models to personalize product discovery and elevate e-commerce conversions.
        </motion.p>
      </div>
      {/* Centered Video */}
      <motion.div
        className="w-full max-w-4xl mx-auto h-[220px] sm:h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl mb-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <video
          src={RecomDemo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>

     

      {/* Key Features Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <motion.h2
          className="text-3xl font-bold text-indigo-600 mb-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🚀 Key Features
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-xl p-5 border hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <p className="text-gray-700">{feature}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-indigo-600 mb-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🛠 Tech Stack
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {techStack.map(({ icon, label }, index) => (
            <motion.div
              key={label}
              className="bg-white shadow-md rounded-xl flex flex-col items-center justify-center p-4 border hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="mb-2">{icon}</div>
              <p className="text-gray-800 text-sm font-semibold">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Impact Section */}
      <motion.div
        className="max-w-4xl mx-auto text-center mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">✨ Real-World Impact</h2>
        <p className="text-gray-600 text-lg px-2">
          Transformed e-commerce platforms with AI-driven personalization. Increased engagement by 35% and conversion rates by 22%. Businesses gain smarter insights and improved product visibility across user segments.
        </p>
      </motion.div>
    </section>
  );
};

export default RecommendationEngine;
