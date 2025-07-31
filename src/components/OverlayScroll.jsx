import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import bgImage from "../assets/white-bg.jpg"; // Replace with your actual image path
import { HiMiniRectangleStack } from "react-icons/hi2";
import { RiShieldFlashFill } from "react-icons/ri";
import { SiSpringsecurity } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

export default function OverlayScroll() {
  const sectionRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
  const section = sectionRef.current;
  const content = contentRef.current;

  gsap.fromTo(
    content,
    {
      scale: 0.9,
      opacity: 0.5,
    },
    {
      scale: 1,
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 90%",
        end: "top 10%",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    section,
    {
      paddingTop: "6rem",
      paddingBottom: "6rem",
    },
    {
      paddingTop: "0rem",
      paddingBottom: "0rem",
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 90%",
        end: "top 10%",
        scrub: true,
      },
    }
  );
  gsap.fromTo(
  section,
  {
    paddingLeft: "3rem",
    paddingRight: "3rem",
  },
  {
    paddingLeft: "0rem",
    paddingRight: "0rem",
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 90%",
      end: "top 10%",
      scrub: true,
    },
  }
);
}, []);

  // useEffect(() => {
  //   const section = sectionRef.current;
  //   const content = contentRef.current;

  //   const enterTL = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: section,
  //       start: "top 80%",
  //       end: "center center",
  //       scrub: true,
  //     },
  //   });

  //   enterTL.to(section, {
  //     padding: "0px",
  //     ease: "power4.out",
  //   });
  //   enterTL.to(content, {
  //     scale: 1.05,
  //     ease: "elastic.out(1, 0.4)",
  //   }, "<");

  //   const exitTL = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: section,
  //       start: "bottom center",
  //       end: "bottom top",
  //       scrub: true,
  //     },
  //   });

  //   exitTL.to(section, {
  //     padding: "3rem", // resets to 48px padding (px-12)
  //     ease: "power4.out",
  //   });
  //   exitTL.to(content, {
  //     scale: 1,
  //     ease: "power4.out",
  //   }, "<");
  // }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen px-12 md:px-24 py-24 bg-cover bg-center overflow-hidden transition-all"
      // className="min-h-screen px-12 md:px-24 py-24 bg-cover bg-center overflow-hidden transition-all"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        ref={contentRef}
        className="bg-white bg-opacity-90 backdrop-blur-sm text-black rounded-xl px-10 py-20 w-full transition-all duration-300 origin-center space-y-12"
      >
        <h2 className="text-3xl md:text-5xl font-semibold text-center leading-snug">
          Build high-impact applications<br />grounded in your proprietary data
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center space-y-4">
            {/* <div className="text-5xl">🍰</div> */}
            <HiMiniRectangleStack size={40}/>
            <h3 className="text-xl font-semibold">Scalable</h3>
            <p className="text-gray-700 leading-relaxed">
              Take applications from proof of concept to full production with compressed, enterprise-focused models — built to limit costs while maximizing performance.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            {/* <div className="text-5xl">⚡</div> */}
            <RiShieldFlashFill size={40} />
            <h3 className="text-xl font-semibold">Accurate</h3>
            <p className="text-gray-700 leading-relaxed">
              Fine-tune models to your company data using retrieval-augmented generation (RAG), providing verifiable outputs grounded in your sources of truth.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            {/* <div className="text-5xl">🛡️</div> */}
            <SiSpringsecurity size={40} />
            <h3 className="text-xl font-semibold">Secure</h3>
            <p className="text-gray-700 leading-relaxed">
              Protect critical data with enterprise-grade security, advanced access controls, and private deployment options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
