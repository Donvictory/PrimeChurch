import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = ({ activeRegion }) => {
  return (
    <header className="relative min-h-[800px] h-screen overflow-hidden flex items-center bg-navy bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeRegion.id}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 0.6, scale: 1.0 }}
          exit={{ opacity: 0, scale: 1.0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${activeRegion.hero.imageUrl})` }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-navy via-navy/60 to-transparent pointer-events-none" />

      <div className="container relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="max-w-[800px]"
        >
          <motion.h1 className="text-white text-5xl md:text-8xl lg:text-[6rem] font-heading font-bold mb-6 leading-[1.1] tracking-tighter">
            {activeRegion.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.4 }}
            className="text-white/85 text-lg md:text-2xl font-light mb-12 max-w-[650px] leading-relaxed"
          >
            {activeRegion.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-navy px-12 py-4 rounded-full font-semibold text-base shadow-2xl transition-all"
            >
              Our Mandate
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-12 py-4 rounded-full font-semibold text-base backdrop-blur-md transition-all"
            >
              Watch Live
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.0, delay: 1.5 }}
        className="absolute bottom-12 left-4 md:left-16 z-20 flex items-center gap-6 text-white"
      >
        <motion.div
          animate={{ width: [40, 60, 40] }}
          transition={{ duration: 2.0, repeat: Infinity, ease: "easeInOut" }}
          className="h-[1px] bg-white"
        />
        <span className="text-[10px] uppercase font-bold tracking-widest leading-none">
          Scroll to Explore
        </span>
      </motion.div>
    </header>
  );
};

export default Hero;
