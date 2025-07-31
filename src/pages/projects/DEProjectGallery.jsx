// src/components/ProjectGallery.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import DeImg1 from "../../assets/de-img1.jpg";
import DeImg2 from "../../assets/de-img2.jpg";
import DeImg3 from "../../assets/de-img3.jpg";
import DeImg4 from "../../assets/de-img4.jpg";
import DeImg5 from "../../assets/de-img5.jpg";
import DeImg6 from "../../assets/de-img6.jpg";
import DeImg7 from "../../assets/de-img7.jpg";
import DeImg8 from "../../assets/de-img8.jpg";
import DeImg9 from "../../assets/de-img9.jpg";

// Dummy images — replace with your project screenshots
const projectImages = [
  DeImg1,
  DeImg2,
  DeImg3,
  DeImg4,
  DeImg5,
  DeImg6,
  DeImg7,
  DeImg8,
  DeImg9,
];

const ProjectGallery = () => {
  return (
    <section className="w-full px-6 sm:px-12 py-20 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        {/* Animated Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Project Showcase
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explore key screens and flows from the Recommendation Engine project —
            dashboard, recommendations, and more.
          </p>
        </motion.div>

        {/* Animated Swiper Container */}
        <motion.div
          className="bg-[#0c0c0c] rounded-2xl p-4 sm:p-6 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500 }}
            loop
            className="rounded-xl"
          >
            {projectImages.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-[300px] sm:h-[400px] flex justify-center items-center rounded-xl overflow-hidden bg-black">
                  <img
                    loading="lazy"
                    src={src}
                    alt={`Project Slide ${index + 1}`}
                    className="object-contain w-full h-full"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectGallery;