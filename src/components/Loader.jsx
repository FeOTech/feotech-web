// src/components/Loader.jsx
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/loader.json"; // Update if needed
import Logo from "../assets/svg/Logo"; // Your SVG component

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < 100) {
        current += 1;
        setProgress(current);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999] text-white">
      {/* 🔄 Lottie Animation */}
      <div className="w-48 h-48 -mb-4 overflow-hidden flex items-end justify-center">
        <Lottie
          animationData={animationData}
          loop
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      {/* 🔰 Logo + Brand Side-by-Side */}
      <div className="flex items-center gap-3 mb-1 scale-110">
        <Logo width={38} height={38} color="#ffffff" />
        <span className="text-3xl font-bold tracking-wider uppercase">
          Feotech
        </span>
      </div>

      {/* 📊 Bottom Progress Bar */}
      <div className="w-full fixed bottom-0 left-0 h-[3px] bg-white/10">
        <div
          className="h-full bg-purple-500 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default Loader;
