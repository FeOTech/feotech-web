import React, { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState(""); // 'SUCCESS' | 'ERROR'

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://getform.io/f/bgdlkela", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("SUCCESS");
        setShowModal(true);
        form.reset();

        // Auto close modal after 5 seconds
        setTimeout(() => setShowModal(false), 5000);
      } else {
        setStatus("ERROR");
      }
    } catch (err) {
      console.error("Form error:", err);
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="bg-gray-100 text-gray-900 py-20 px-4 relative">
      {/* 🔹 Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">Let’s Connect</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Whether you're ready to collaborate or just curious to learn more, we're always excited to hear from forward-thinking minds.
        </p>
        <div className="mt-6 w-20 h-1 mx-auto bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
      </div>

      {/* 🔸 Contact Info */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mb-16">
        <div>
          <FaPhoneVolume className="mx-auto mb-2" size={40} />
          <h4 className="font-bold">Call Us</h4>
          <p className="text-sm">+91 9588289120</p>
        </div>
        <div>
          <FaLinkedin className="mx-auto mb-2" size={40} />
          <h4 className="font-bold">LinkedIn</h4>
          <a
            href="https://www.linkedin.com/company/feotech/about/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline"
          >
            linkedin.com/company/feotech
          </a>
        </div>
        <div>
          <IoIosMail className="mx-auto mb-2" size={40} />
          <h4 className="font-bold">Email</h4>
          <p className="text-sm">feotech@gmail.com</p>
        </div>
      </div>

      {/* 📝 Form */}
      <div className="w-full">
        <div className="w-full text-center shadow-md p-8 md:px-16 lg:px-24 bg-white rounded-xl max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-2">Start a Conversation</h3>
          <p className="text-sm text-gray-700 mb-6">
            Have a project or idea? Reach out — we’re just one form away.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
              className="group relative inline-flex items-center gap-2 bg-gray-900 text-white font-medium px-6 py-3 rounded-full overflow-hidden"
            >
              <span className="relative z-10">Submit</span>
              <span className="absolute bottom-0 left-4 w-0 h-[2px] bg-purple-400 rounded-full group-hover:w-[calc(100%-2rem)] transition-all duration-500 ease-in-out"></span>
            </motion.button>
          </form>
        </div>
      </div>

      {/* ✅ Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white text-gray-900 rounded-lg p-6 w-11/12 max-w-sm text-center shadow-xl"
          >
            <h4 className="text-xl font-semibold mb-2">🎉 Thank You!</h4>
            <p className="text-sm text-gray-600">
              Your message has been sent successfully. We'll get back to you soon!
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Contact;
