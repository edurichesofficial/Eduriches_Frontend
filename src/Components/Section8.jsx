import React from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiPhone, FiMessageCircle, FiSend } from "react-icons/fi";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const card = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 90, damping: 16 } },
};

const Section8 = () => {
  return (
    <motion.section
      className="bg-[#F4FAFF] w-full font-outfit"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12 px-6 lg:px-16 py-16 lg:py-32">

        {/* Left Side - Founders Desk */}
        <motion.div className="flex-1 h-full" variants={fadeUp}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            From the Founders' Desk 🚀
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6">
            Uncover the Purpose, Passion, and Vision that Drives DIGILANCING Forward
          </p>

          <motion.blockquote
            className="text-gray-800 italic font-semibold text-base sm:text-lg border-l-4 border-[#3384EC] pl-4 mb-6"
            variants={fadeUp}
          >
            “DIGILANCING is more than a learning platform — it’s a movement to
            equip every learner with future-ready skills that open doors to
            opportunities.”
          </motion.blockquote>

          <p className="text-gray-900 text-base sm:text-lg mb-4">— The Founders, Edulancing</p>

          <div className="flex gap-3 mt-2">
            {[
              "https://randomuser.me/api/portraits/men/31.jpg",
              "https://randomuser.me/api/portraits/men/32.jpg",
              "https://randomuser.me/api/portraits/men/33.jpg",
            ].map((src, i) => (
              <motion.img
                key={src}
                src={src}
                alt={`Founder ${i + 1}`}
                className={`w-14 h-14 rounded-full object-cover border-2 border-white ${i !== 0 ? "-ml-2" : ""}`}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 6 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Right Side - Contact Form (classic + modern) */}
        <motion.div className="flex-1 w-full" variants={card}>
          <div className="relative overflow-hidden rounded-2xl">
            {/* soft gradient backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D3E9FF]" />
            {/* subtle pattern */}
            <div className="absolute inset-0 opacity-30 pointer-events-none"
                 style={{ backgroundImage: "radial-gradient(#bcd9ff 1px, transparent 1px)", backgroundSize: "14px 14px" }} />
            <div className="relative p-6 sm:p-10 backdrop-blur-[2px]">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[#1e429f] bg-white/70 border border-[#A7C8F7] px-3 py-1 rounded-full">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#3384EC]" />
                  Contact us
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold mt-3">We’d love to hear from you</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Classic fields, modern interactions. We typically reply within 24 hours.
                </p>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                {/* two-column on large screens */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="Enter your Name"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#3384EC] focus:border-[#3384EC] transition"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      <input
                        type="email"
                        placeholder="Enter your Email"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#3384EC] focus:border-[#3384EC] transition"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                    <div className="relative">
                      <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      <input
                        type="tel"
                        placeholder="Enter your Phone Number"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#3384EC] focus:border-[#3384EC] transition"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
                    <div className="relative">
                      <FiMessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="How can we help?"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#3384EC] focus:border-[#3384EC] transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us a bit more about your query..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#3384EC] focus:border-[#3384EC] transition resize-y"
                  />
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3">
                  <input id="consent" type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-[#3384EC] focus:ring-[#3384EC]" />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I agree to be contacted about my inquiry and accept the Terms & Privacy Policy.
                  </label>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#3384EC] to-[#2C71A1] text-white py-3 mt-2 rounded-xl text-lg shadow-md"
                  whileHover={{ y: -2, scale: 1.02, boxShadow: "0 12px 28px rgba(51,132,236,0.28)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 220, damping: 22 }}
                >
                  <span className="inline-flex items-center justify-center gap-2">
                    Send Message
                    <motion.span
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-flex"
                    >
                      <FiSend />
                    </motion.span>
                  </span>
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Section8;
