import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Jinkle from "../assets/jink.jpeg";
import Kuldeep from "../assets/kul.jpeg";
import Abhay from "../assets/abe.jpeg";
import Akash from "../assets/akash.jpg";
import { useNavigate } from "react-router-dom";

const team = [
  { name: "Abhay", image: Abhay },
  { name: "Aakash", image: Akash },
  { name: "Jinkle", image: Jinkle },
  { name: "Kul", image: Kuldeep },
];

const rotatingWords = [
  "INNOVATORS",
  "ENGINEERS",
  "THINKERS",
  "MAKERS",
  "DREAMERS",
];

const Team = () => {
  const [currentWord, setCurrentWord] = useState(0);

  const navigate = useNavigate();

  const handleViewDetails = (member) => {
    navigate("/team-details", { state: member });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const teamLoop = [...team, ...team];

  return (
    <section
      id="team"
      className="relative bg-black text-white py-20 px-4 overflow-hidden"
    >
      {/* 🔥 Dynamic Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center flex flex-wrap justify-center items-center">
          We are group of&nbsp;
          <span className="relative inline-block h-[1.3em] overflow-hidden align-middle">
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingWords[currentWord]}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 leading-[1.3em]"
              >
                {rotatingWords[currentWord]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h2>

        <div className="mt-6 text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto space-y-1">
          <p>Bold minds. Big ideas. Real results.</p>
          <p>Where passion meets possibility — all in, all together.</p>
          <div className="mt-6 w-20 h-1 mx-auto bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
        </div>
      </div>

      {/* 💻 Desktop Static Layout */}
      <div className="hidden md:flex max-w-7xl mx-auto flex-wrap justify-center gap-6">
        {team.map((member, index) => (
          <div
            key={index}
            className="relative w-full sm:w-[45%] md:w-[300px] h-[420px] rounded-2xl overflow-hidden group shadow-lg"
          >
            <img
              loading="lazy"
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition duration-500 ease-in-out"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <button
                onClick={() => handleViewDetails(member)}
                className="bg-white text-sm text-gray-900 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-gray-200"
              >
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 📱 Mobile Auto-Scroll Layout */}
      {/* 📱 Mobile Auto-Scroll Layout */}
      <div className="md:hidden w-full mt-4">
        <div className="overflow-hidden relative w-full h-[360px]">
          <motion.div
            className="flex gap-4 absolute"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            {teamLoop.map((member, index) => (
              <div
                key={index}
                className="w-[250px] h-[360px] rounded-2xl overflow-hidden flex-shrink-0 relative"
              >
                <img
                  loading="lazy"
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale transition duration-500 ease-in-out"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* 👉 Single View Details Button */}
        <div className="mt-6 flex justify-center md:hidden">
          <button
            onClick={() => navigate("/team-details")}
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white text-sm font-semibold px-6 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-purple-600 hover:to-indigo-600"
          >
            View Team Details →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
