import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import Abhay from "../assets/abe.jpeg";
import Akash from "../assets/akash.jpg";
import Jinkle from "../assets/jink.jpeg";
import Kuldeep from "../assets/kul.jpeg";
import ProjectNavbar from "../components/BreadCrumbs";
import Footer from "../components/Footer";
import Loader from "../components/Loader"; // Make sure this is your animated loader

const members = [
  {
    name: "Abhay Partap Singh",
    title: "Data Engineer",
    image: Abhay,
    linkedin: "https://www.linkedin.com/in/abhaypartap12/",
    bio: "Abhay transforms raw data into actionable insights by building resilient pipelines, crafting efficient ETL workflows, and maintaining data warehouse integrity.",
  },
  {
    name: "Akash Singh",
    title: "Frontend Developer",
    image: Akash,
    linkedin: "https://www.linkedin.com/in/akash-kumar-singh-950a02171/",
    bio: "Akash crafts beautiful and performant interfaces using modern JavaScript frameworks, ensuring every interaction feels natural and responsive.",
  },
  {
    name: "Jinkle Pancholi",
    title: "Fullstack Developer",
    image: Jinkle,
    linkedin: "https://www.linkedin.com/in/jinkle-pancholi/",
    bio: "Jinkle builds robust applications from end to end, connecting dynamic UIs to powerful backend systems while keeping code clean and scalable.",
  },
  {
    name: "Kuldeep Nagar",
    title: "Fullstack Developer",
    image: Kuldeep,
    linkedin: "https://www.linkedin.com/in/kuldeep-nagar/",
    bio: "Kuldeep bridges front-end finesse with backend power, deploying applications with optimized performance, strong APIs, and seamless integrations.",
  },
];

const fadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const TeamDetails = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Preload images
  useEffect(() => {
    const imagePromises = members.map((member) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = member.image;
        img.onload = resolve;
        img.onerror = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      // Add delay to smooth transition
      setTimeout(() => setIsLoading(false), 800);
    });
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      <ProjectNavbar />
      <section className="bg-black text-white py-24 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-500 text-transparent bg-clip-text">
            Meet Our Core Team
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Visionaries. Builders. Doers. This is the powerhouse behind our
            ideas, technology, and execution.
          </p>
        </motion.div>

        <div className="space-y-28 max-w-7xl mx-auto">
          {members.map((member, index) => {
            const isEven = index % 2 === 0;
            const isFirst = index === 0;

            return (
              <motion.div
                key={index}
                custom={index + 1}
                variants={fadeVariant}
                initial="hidden"
                animate={isFirst ? "visible" : undefined} // Animate immediately if first
                whileInView={isFirst ? undefined : "visible"} // Only use whileInView for others
                viewport={isFirst ? undefined : { once: true }}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-10 md:gap-16`}
              >
                <div className="w-full md:w-1/2">
                  <motion.img
                    loading="lazy"
                    src={member.image}
                    alt={member.name}
                    className="w-full max-w-md mx-auto rounded-3xl object-cover shadow-2xl hover:scale-105 transition duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-2">{member.name}</h3>
                  <p className="text-purple-400 font-semibold mb-4 tracking-wide">
                    {member.title}
                  </p>
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full shadow hover:bg-gray-200 transition"
                  >
                    <FaLinkedin className="text-xl" />
                    Connect on LinkedIn
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TeamDetails;
