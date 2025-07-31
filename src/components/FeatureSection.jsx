import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Custom Solutions",
    description:
      "We design and build technology tailored precisely to each client’s objectives and industry.",
  },
  {
    title: "Digital Transformation",
    description:
      "We modernize processes and customer experiences to drive growth and efficiency.",
  },
  {
    title: "Seamless Integration",
    description:
      "Our solutions connect smoothly with existing systems and workflows.",
  },
  {
    title: "Scalable, Future-Proof Architecture",
    description:
      "We build systems that grow with our clients’ needs, supporting evolving demands and emerging technologies.",
  },
  {
    title: "Agile Delivery",
    description:
      "We partner closely with stakeholders, iterating quickly to deliver results efficiently and responsively.",
  },
  {
    title: "Knowledge Transfer & Empowerment",
    description:
      "Beyond delivery, we train and support client teams to confidently manage and evolve their technology.",
  },
  {
    title: "End-to-End Support",
    description:
      "From strategy to maintenance, we guide and assist clients throughout the journey.",
  },
  {
    title: "Built with Intelligence",
    description:
      "Reflects our commitment to leveraging data-driven insights, advanced technologies, and strategic thinking to deliver smarter, future-ready solutions for our clients.",
  },
];

const FeatureSection = () => {
  const sectionRef = useRef(null);
  const fillerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      fillerRef.current,
      { height: 0 },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    features.forEach((_, i) => {
      gsap.fromTo(
        `.feature-${i}`,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: `.feature-${i}`,
            start: "top 80%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.to(`.dot-${i}`, {
        backgroundColor: "#8B5CF6",
        scale: 1.3,
        boxShadow: "0 0 10px #8B5CF6",
        scrollTrigger: {
          trigger: `.feature-${i}`,
          start: "top 80%",
          end: "top 60%",
          toggleActions: "play reverse play reverse",
        },
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white py-20 px-4 md:px-20 flex flex-col md:flex-row"
    >
      {/* Left Header */}
      <div className="md:w-1/3 mb-12 md:mb-0 flex justify-start items-start">
        <div className="md:sticky md:top-20">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white mb-6">
            <span className="block text-white/80">We don’t just build,</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              We –
            </span>
          </h2>

          <div className="space-y-4 text-lg text-white/80 leading-relaxed">
            <p className="pl-22">
              <span className="text-white font-semibold">Advise strategically</span>, shaping decisions with insight and clarity.
            </p>
            <p className="pl-22">
              <span className="text-white font-semibold">Implement expertly</span>, delivering scalable, high-impact solutions.
            </p>
            <p className="pl-22">
              <span className="text-white font-semibold">Empower continuously</span>, so your team can thrive with confidence.
            </p>
          </div>

          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 text-xl font-medium mt-6">
            We're a Tech Extension to Your Business
          </p>
        </div>
      </div>

      {/* Right Timeline */}
      <div className="md:w-2/3 relative md:pl-24 pl-6">
        {/* Vertical Line */}
        <div className="absolute left-[1.7rem] md:left-29 top-0 bottom-0 w-1">
          <div className="w-full h-full bg-white/20 rounded-full"></div>
          <div
            ref={fillerRef}
            className="w-full absolute top-0 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"
            style={{ height: 0 }}
          ></div>
        </div>

        {/* Features List */}
        <div className="space-y-20 md:space-y-24 md:pl-12 pl-6">
          {features.map((feature, index) => (
            <div key={index} className="relative feature-wrapper">
              {/* Dot */}
              <div
                className={`w-4 h-4 bg-white/40 rounded-full absolute left-[-1.7rem] top-1 md:left-[-2.1rem] dot-${index}`}
              ></div>

              {/* Text */}
              <div className={`feature-${index}`}>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-white/70 mt-2 max-w-xl">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

