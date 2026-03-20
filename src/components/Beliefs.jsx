import React from "react";
import { sections } from "../data";
import { motion } from "framer-motion";

const Beliefs = () => {
  return (
    <section
      id="about"
      className="py-10 md:py-24 px-4 md:px-16 bg-bg text-navy relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="max-w-[400px]"
        >
          <h2 className="text-5xl md:text-8xl font-heading font-bold leading-tight mb-8 tracking-tighter shadow-sm">
            {sections.beliefs.title}
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[2px] bg-navy opacity-30"
          />
        </motion.div>

        <div className="space-y-12">
          {sections.beliefs.points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex gap-8 items-start group hover:translate-x-4 transition-transform duration-500"
            >
              <span className="font-heading text-4xl md:text-5xl font-bold text-accent min-w-[60px] leading-none">
                0{index + 1}
              </span>
              <p className="text-lg md:text-2xl leading-relaxed text-navy-light/90 max-w-[600px] font-normal transition-colors group-hover:text-navy">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 right-[5%] w-[600px] h-[600px] rounded-full blur-[100px] bg-accent/20 z-0 pointer-events-none"
      />
    </section>
  );
};

export default Beliefs;
