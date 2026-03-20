import React from "react";
import { sections } from "../data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const JoinSection = () => {
  return (
    <section className="bg-bg py-10 md:py-24 px-4 md:px-16 overflow-hidden ">
      <div className="max-w-[1400px] mx-auto">
        {/* Workforce Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] md:grid-cols-1 gap-12 lg:gap-32 items-center mb-15 bg-white p-6 md:p-20 rounded-[3rem] md:rounded-[5rem] shadow-2xl shadow-navy/5 overflow-hidden"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2.5rem] md:rounded-[4rem] overflow-hidden aspect-[1.2/1] shadow-2xl shadow-navy/20 relative cursor-pointer"
          >
            <img
              src={sections.workforce.imageUrl}
              alt="Workforce"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/10 hover:bg-transparent transition-colors duration-500" />
          </motion.div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-7xl font-heading font-bold leading-[1.1] text-navy tracking-tight">
              {sections.workforce.title}
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-text-muted/90 max-w-[500px] leading-relaxed">
              <p>{sections.workforce.description}</p>
              <p>{sections.workforce.description2}</p>
            </div>
            <Link to="/form">
              <motion.button
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-fit px-12 py-5 text-base tracking-wide"
              >
                Join the workforce
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-8 md:p-12 rounded-[3.5rem] shadow-xl shadow-navy/5 hover:translate-y-[-10px] transition-transform duration-500 group"
          >
            <div className="order-2 md:order-1 space-y-6">
              <h3 className="text-3xl md:text-5xl font-heading font-bold text-navy tracking-tight">
                {sections.trybe.title}
              </h3>
              <p className="text-sm md:text-base text-text-muted/80 leading-relaxed font-light">
                {sections.trybe.description}
              </p>
              <Link to="/trybe-form">
                <motion.button
                  whileHover={{ gap: "1.5rem" }}
                  className="btn-primary py-3 px-8 text-xs tracking-widest uppercase flex items-center gap-4 transition-all"
                >
                  Join Trybe
                  <span className="text-lg leading-none">→</span>
                </motion.button>
              </Link>
            </div>
            <div className="order-1 md:order-2 rounded-[2rem] overflow-hidden aspect-[0.9/1] shadow-xl group-hover:scale-[1.05] transition-transform duration-700">
              <img
                src={sections.trybe.imageUrl}
                alt="Trybe"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-8 md:p-12 rounded-[3.5rem] shadow-xl shadow-navy/5 hover:translate-y-[-10px] transition-transform duration-500 group"
          >
            <div className="rounded-[2rem] overflow-hidden aspect-[0.9/1] shadow-xl group-hover:scale-[1.02] transition-transform duration-700">
              <img
                src={sections.leader.imageUrl}
                alt="Leader"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-5xl font-heading font-bold text-navy tracking-tight">
                {sections.leader.title}
              </h3>
              <p className="text-sm md:text-base text-text-muted/80 leading-relaxed font-light">
                {sections.leader.description}
              </p>
              <Link to="/form">
                <motion.button
                  whileHover={{ gap: "1.5rem" }}
                  className="btn-primary py-3 px-8 text-xs tracking-widest uppercase flex items-center gap-4 transition-all"
                >
                  Become Lead
                  <span className="text-lg leading-none">→</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
