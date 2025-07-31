import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Eager-loaded components (important for initial paint)
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

// Lazy-loaded components (heavier or lower priority)
const AboutUs = lazy(() => import("./components/AboutUs"));
const Team = lazy(() => import("./components/Team"));
const Contact = lazy(() => import("./components/Contact"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetail"));
const TeamDetails = lazy(() => import("./pages/TeamDtails"));
function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureSection />
      <Project />

      {/* Lazy-loaded sections with fallback */}
      <Suspense fallback={<div className="text-center py-10 text-gray-400">Loading About Us...</div>}>
        <AboutUs />
      </Suspense>

      <Suspense fallback={<div className="text-center py-10 text-gray-400">Loading Team...</div>}>
        <Team />
      </Suspense>

      <Suspense fallback={<div className="text-center py-10 text-gray-400">Loading Contact...</div>}>
        <Contact />
      </Suspense>

      <Footer />
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a splash screen / loader effect
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Optional: Adjust for desired loader time

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <BrowserRouter basename="/feotech-web">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/team-details" element={<TeamDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
