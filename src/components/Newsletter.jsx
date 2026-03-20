import React from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className="bg-bg py-10 md:py-24 px-4 md:px-16 text-center">
      <div className="max-w-[1400px] mx-auto space-y-16">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="text-4xl md:text-8xl font-heading font-bold text-navy leading-tight tracking-tighter"
        >
          Subscribe to our <br /> newsletter
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center max-w-[800px] mx-auto bg-white p-4 rounded-[2rem] md:rounded-[4rem] shadow-2xl shadow-navy/5 border border-gray-100 transition-shadow duration-500 hover:shadow-navy/10"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 bg-transparent border-none outline-none py-4 px-8 md:px-12 text-lg md:text-xl font-body text-navy placeholder:text-navy/30"
          />
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary w-full sm:w-fit py-5 px-16 text-xs font-bold uppercase tracking-widest bg-navy shadow-navy/20 hover:shadow-navy/40"
          >
            Subscribe
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
