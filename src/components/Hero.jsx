import { motion, AnimatePresence } from "framer-motion";
import { Instagram } from "lucide-react";
import { socials } from "../data";

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

      {/* Vertical Social Bar */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0, delay: 1.0 }}
        className="absolute top-1/2 -translate-y-1/2 right-4 md:right-16 z-20 hidden md:flex flex-col items-center gap-10"
      >
        <div className="w-[1px] h-20 bg-white/20" />
        <div className="flex flex-col gap-8">
          <motion.a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#E8DCC4" }}
            className="text-white/40 hover:text-white transition-all transition-colors"
          >
            <Instagram size={20} />
          </motion.a>
          <motion.a
            href={socials.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#E8DCC4" }}
            className="text-white/40 hover:text-white transition-all transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
          </motion.a>
        </div>
        <div className="w-[1px] h-20 bg-white/20" />
        <span className="rotate-90 text-[10px] uppercase font-bold tracking-[0.2em] text-white/20 whitespace-nowrap mt-4">
          Follow Our Journey
        </span>
      </motion.div>
    </header>
  );
};

export default Hero;
