import React from "react";
import { motion } from "framer-motion";
import sampleImg from "../assets/dark-bg.jpg";
import sampleImg1 from "../assets/dark-bg1.jpg";
import { Link } from "react-router-dom";
const cards = [
  {
    slug: "ai-chatbot",
    tag: "Artificial Intelligence",
    title: "AI Chatbot",
    description:
      "Elevate customer engagement and simplify support with AI chatbot experiences. Seamlessly integrated into your app, they deliver effortless, consistent interactions your users will appreciate",
    image: sampleImg,
    link: "#",
  },
  {
    slug: "recommendation-system",
    tag: "Machine Learning",
    title: "Recommendation System",
    description:
      "Enable personalized AI recommendation systems that boost engagement and drive sales. Integrated into your eCommerce app, they help customers discover products they’ll love with every visit.",
    image: sampleImg1,
    link: "#",
  },
  {
    slug: "data-engineering",
    tag: "Data Engineering",
    title: "Analytics ETL Pipeline",
    description:
      "A clear vision of your processes to identify high-potential AI use cases. Discover artificial intelligence applications that will bring the most value to your business.",
    image: sampleImg,
    link: "#",
  },
  {
    slug: "web-development",
    tag: "Web/App Development",
    title: "Web Development",
    description:
      "We help you take your business online with a meticulously crafted website, tailored to your goals. From planning to launch, we deliver an end-to-end experience that brings your brand to life.",
    image: sampleImg,
    link: "#",
  },
];

const Project = () => {
  return (
    <section
      id="work"
      className="bg-black text-white py-20 px-4 sm:px-6 lg:px-12 relative"
    >
      {/* 🟣 Section Header */}
      
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Our Projects & Solutions
        </h2>
        <p className="text-white/70 text-lg">
          Explore how we blend innovation, AI, and engineering to build products
          that scale with purpose. From concept to deployment — we make it real.
        </p>
        <div className="mt-6 w-20 h-1 mx-auto bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
      </div>

      {/* 🧠 Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: idx * 0.15,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-zinc-900 border border-purple-600/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-[0_0_30px_#8b5cf6] transition duration-300"
          >
            {/* Tag */}
            <span className="text-xs sm:text-sm font-medium text-white bg-purple-600/20 px-3 py-1 rounded-full w-max mb-4">
              {card.tag}
            </span>

            {/* Title & Description */}
            <div>
               <Link
                to={`/project/${encodeURIComponent(card.slug)}`}
                className="hover:text-purple-400 transition-colors duration-200"
              >
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 text-2xl sm:text-3xl font-semibold mb-4 mt-6">
                {card.title}
              </h3>
              </Link>
              <p className="text-white/70 text-sm sm:text-base mb-6">
                {card.description}
              </p>
              {/* <Link
                to={`/project/${encodeURIComponent(card.slug)}`}
                className="hover:text-purple-400 transition-colors duration-200"
              >
                Discover
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </Link> */}
            </div>

            {/* Image */}
            <div className="mt-6 rounded-xl overflow-hidden bg-zinc-800">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-40 sm:h-48 md:h-40 object-cover opacity-80"
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
