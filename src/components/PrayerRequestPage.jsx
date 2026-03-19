import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PrayerRequestPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    request: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.request.trim() === "") return;
    setSubmitted(true);
    // Submit logic would go here
  };

  return (
    <div className="min-h-screen bg-bg relative flex flex-col items-center justify-center pt-32 pb-20 px-4 md:px-16 overflow-hidden">
      {/* Background Glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] bg-accent/30 pointer-events-none"
      />

      <div className="w-full max-w-[800px] mb-6 relative z-[50]">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-navy font-bold hover:text-accent transition-all bg-white px-5 py-2.5 rounded-full shadow-md hover:shadow-lg border border-gray-100 cursor-pointer"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Back to Home
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-[800px] w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden relative z-10 p-8 md:p-16 border border-gray-100"
      >
        {!submitted ? (
          <div>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-navy mb-4">
                Prayer Request
              </h1>
              <p className="text-lg text-gray-600 font-body">
                We're here to agree with you in prayer. Let us know how we can
                pray for you today.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-navy mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-navy"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-navy mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-navy"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="request"
                  className="text-sm font-semibold text-navy mb-2"
                >
                  Your Prayer Request
                </label>
                <textarea
                  id="request"
                  name="request"
                  value={formData.request}
                  onChange={handleChange}
                  rows="6"
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-navy resize-none"
                  placeholder="Share what's on your heart..."
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-navy text-white text-lg font-bold py-5 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wider mt-4"
              >
                Submit Prayer Request
              </motion.button>
            </form>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg
                className="w-12 h-12 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
              Request Submitted
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-[500px] mx-auto">
              Thank you for sharing your prayer request with us. Our prayer team
              will be joining faith with you.
            </p>
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-navy border-none text-white py-4 px-12 rounded-full text-base font-bold tracking-[1px] uppercase shadow-xl transition-all"
              >
                Return Home
              </motion.button>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default PrayerRequestPage;
