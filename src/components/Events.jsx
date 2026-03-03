import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { events } from "../data";
import { motion, AnimatePresence } from "framer-motion";

const Events = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { currentEvent } = events;

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % currentEvent.images.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) =>
        (prev - 1 + currentEvent.images.length) % currentEvent.images.length,
    );

  return (
    <section
      id="events"
      className="bg-bg py-24 md:py-48 px-4 md:px-16 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-8xl font-heading font-bold text-navy leading-none tracking-tighter">
              {events.title}
            </h2>
            <div className="h-[2px] w-24 bg-navy/20" />
          </motion.div>

          <div className="flex gap-6">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#fff" }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center shadow-md border border-gray-100 transition-all cursor-pointer group hover:shadow-2xl hover:translate-y-[-5px]"
            >
              <ChevronLeft
                size={32}
                className="text-navy group-hover:scale-125 transition-transform"
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#0B1B2B" }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-navy flex items-center justify-center shadow-xl border-none transition-all cursor-pointer group hover:shadow-navy/40 hover:translate-y-[-5px]"
            >
              <ChevronRight
                size={32}
                className="text-white group-hover:scale-125 transition-transform"
              />
            </motion.button>
          </div>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] bg-white rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-2xl shadow-navy/10 min-h-[700px] group"
        >
          <div className="bg-navy text-white p-12 md:p-24 flex flex-col justify-center relative z-10">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xs md:text-sm font-bold text-accent tracking-[6px] uppercase mb-12 block"
            >
              Highlight of the Season
            </motion.span>
            <motion.h3
              key={currentEvent.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-9xl font-heading font-bold mb-10 leading-none tracking-tighter text-accent"
            >
              {currentEvent.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              className="text-lg md:text-2xl font-light leading-relaxed mb-16 max-w-md"
            >
              {currentEvent.description}
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05, gap: "2rem" }}
              className="bg-white text-navy px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest w-fit shadow-2xl flex items-center gap-6 transition-all"
            >
              Learn More
              <span className="text-2xl leading-none">→</span>
            </motion.button>
          </div>

          <div className="relative overflow-hidden cursor-pointer group">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.2, x: 50 }}
                animate={{ opacity: 1, scale: 1.0, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -50 }}
                transition={{ duration: 1.0, ease: "circOut" }}
                src={currentEvent.images[currentSlide]}
                alt="Highlight event"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]"
              />
            </AnimatePresence>

            {/* Visual Indicators */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-4 z-20">
              {currentEvent.images.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1 cursor-pointer transition-all duration-500 rounded-full
                    ${i === currentSlide ? "w-16 bg-white" : "w-4 bg-white/30 hover:bg-white/50"}`}
                />
              ))}
            </div>

            {/* Secondary Image Glimpse (Aesthetic Overlays) */}
            <div className="absolute top-12 right-12 hidden md:grid grid-cols-2 gap-6 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-10 group-hover:translate-y-0">
              {currentEvent.images
                .filter((_, i) => i !== currentSlide)
                .slice(0, 2)
                .map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    className="w-32 h-44 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl"
                  >
                    <img
                      src={img}
                      alt="Gallery item"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
