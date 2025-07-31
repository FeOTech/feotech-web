import React from "react";
import ChatBotVideo from "../../assets/chatbotdemo.mp4";

const AIChatbot = () => {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-20 sm:py-24">
        {/* Text Content */}
        <div className="relative z-10 text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Meet Your Smart AI Chatbot
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Built using GPT-powered intelligence, this chatbot handles queries,
            support, and lead generation — anytime, anywhere.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative z-10 w-[90vw] max-w-[320px] sm:max-w-[420px] lg:max-w-[520px] h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/30 bg-white/10 backdrop-blur-xl transition-all duration-500">
          {/* Background Blobs */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-[-60px] left-[-60px] w-[200px] h-[200px] bg-pink-400 rounded-full blur-[100px] opacity-50" />
            <div className="absolute bottom-[-60px] right-[-60px] w-[200px] h-[200px] bg-blue-400 rounded-full blur-[100px] opacity-50" />
          </div>

          {/* Video */}
          <video
            src={ChatBotVideo}
            autoPlay
            muted
            loop
            playsInline
            className="relative z-10 w-full h-full object-contain sm:object-cover"
          />
        </div>
      </section>

      {/* --- INTRO SECTION --- */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
          Why Choose Our Chatbot?
        </h3>
        <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
          Whether you're a SaaS business, eCommerce store, or service provider,
          this chatbot can engage, support, and convert your users with natural
          conversations. Trained on domain-specific data and tuned for
          performance.
        </p>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 text-center">
        {[
          {
            title: "Conversational AI",
            desc: "Understands and responds like a human using GPT-based NLP.",
          },
          {
            title: "Multi-Platform",
            desc: "Deploy to websites, apps, and social media effortlessly.",
          },
          {
            title: "Smart Routing",
            desc: "Escalates to human support or books meetings automatically.",
          },
          {
            title: "Customizable Flows",
            desc: "Train it on your own data or business processes easily.",
          },
          {
            title: "Realtime Analytics",
            desc: "See who interacted, when, and what they asked in live dashboards.",
          },
          {
            title: "Secure & Scalable",
            desc: "Hosted securely with scalable architecture and data safety.",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition"
          >
            <h4 className="text-lg sm:text-xl font-semibold mb-2">{f.title}</h4>
            <p className="text-gray-600 text-sm sm:text-base">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* --- HOW IT WORKS SECTION --- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-10">
          How It Works
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 text-left">
          {[
            {
              step: "1. Train",
              desc: "Upload your data, FAQs, and sample conversations.",
            },
            {
              step: "2. Integrate",
              desc: "Embed it into your product, site, or mobile app with one line.",
            },
            {
              step: "3. Deploy",
              desc: "Go live and track conversations in real-time with built-in analytics.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 hover:shadow-md transition"
            >
              <h4 className="text-base sm:text-lg font-bold mb-2">
                {item.step}
              </h4>
              <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- TECH STACK SECTION --- */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
          Built With
        </h3>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6">
          {[
            "React",
            "Node.js",
            "OpenAI GPT",
            "MongoDB",
            "Tailwind CSS",
            "Socket.IO",
          ].map((tech, i) => (
            <span
              key={i}
              className="px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-gray-100 text-sm text-gray-800 border border-gray-300 hover:bg-gray-200 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="text-center px-4 sm:px-6 py-20 sm:py-24 bg-gray-100">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Ready to Integrate Your Own AI Chatbot?
        </h3>
        <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Let us help you launch in under a week. No heavy setup, just results.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 sm:px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
};

export default AIChatbot;