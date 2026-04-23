import React from "react";
import { motion } from "framer-motion";

const Pastors = ({ activeRegion }) => {
  return (
    <section
      id="pastors"
      className="bg-navy py-10 md:py-24 px-4 md:px-16 text-white overflow-hidden relative"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_2fr] gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-8xl font-heading font-bold leading-[1.1] text-accent tracking-tighter mb-8">
            Meet our <br /> Pastors
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 300 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.4 }}
            className="h-[1px] bg-accent/20"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 md:gap-24">
          {activeRegion.pastors.map((pastor, index) => (
            <motion.div
              key={pastor.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.0, rotate: -2 }}
                transition={{ duration: 0.5 }}
                className="aspect-square rounded-[1rem] md:rounded-[1rem] overflow-hidden mb-12 shadow-2xl shadow-black/40 border border-white/5 relative bg-white/5"
              >
                <img
                  src={pastor.imageUrl}
                  alt={pastor.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-accent tracking-tight">
                  {pastor.name}
                </h3>
                <h4 className="text-xs md:text-sm font-body font-bold text-white/50 tracking-[4px] uppercase border-b border-white/10 pb-4 inline-block">
                  {pastor.role}
                </h4>
                <p className="text-base md:text-lg font-light text-white/70 leading-relaxed font-body">
                  {pastor.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] bg-accent animate-pulse" />
      </div>
    </section>
  );
};

export default Pastors;
