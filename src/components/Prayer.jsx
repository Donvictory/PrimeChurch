import React from "react";
import { prayer } from "../data";
import { motion } from "framer-motion";

const Prayer = () => {
  return (
    <section className="bg-navy py-24 md:py-48 px-4 md:px-16 text-center relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10 space-y-12 md:space-y-20 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="text-5xl md:text-9xl font-heading font-bold text-accent tracking-tighter leading-tight"
        >
          Drop a prayer <br /> request
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.4 }}
          className="text-xl md:text-3xl font-body font-light text-white/80 max-w-[800px] leading-relaxed italic"
        >
          {prayer.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-8 justify-center w-full max-w-[600px]"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary bg-white text-navy border-none py-5 px-16 text-sm font-bold tracking-[2px] uppercase shadow-2xl transition-all"
          >
            Submit Request
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.05)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border border-white/20 text-white py-5 px-16 rounded-full text-sm font-bold tracking-[2px] uppercase transition-all shadow-xl hover:border-white/40"
          >
            Schedule a Call
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Glow Elements */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full blur-[150px] bg-accent/20 z-0 pointer-events-none"
      />
    </section>
  );
};

export default Prayer;
