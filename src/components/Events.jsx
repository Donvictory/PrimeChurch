import React from "react";
import { Video } from "lucide-react";
import { events } from "../data";
import { motion } from "framer-motion";

const Events = () => {
  const { currentEvent } = events;

  return (
    <section
      id="events"
      className="bg-bg py-24 md:py-48 px-4 md:px-16 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <header className="mb-16 md:mb-24">
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
        </header>

        {/* Event Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] bg-white rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-2xl shadow-navy/10 min-h-[680px] group"
        >
          {/* Left: Image */}
          <div className="relative overflow-hidden min-h-[400px] lg:min-h-0">
            <motion.img
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1.0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              src={currentEvent.image}
              alt="God First Everyday Devotion"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[3s]"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent pointer-events-none" />
          </div>

          {/* Right: Text Content */}
          <div className="bg-navy text-white p-12 md:p-20 flex flex-col justify-center relative z-10">
            {/* Tag */}
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xs md:text-sm font-bold text-accent tracking-[6px] uppercase mb-8 block"
            >
              {currentEvent.tag}
            </motion.span>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-7xl font-heading font-bold mb-4 leading-none tracking-tighter text-accent"
            >
              {currentEvent.title}
            </motion.h3>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base md:text-xl font-light italic mb-10 text-white/60"
            >
              {currentEvent.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base md:text-xl font-light leading-relaxed mb-6 max-w-md text-white/80"
            >
              {currentEvent.description}
            </motion.p>

            {/* CTA text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-sm md:text-base mb-10 text-white/60"
            >
              {currentEvent.cta}
            </motion.p>

            {/* Google Meet Button */}
            <motion.a
              href={currentEvent.meetLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, gap: "1.25rem" }}
              whileTap={{ scale: 0.97 }}
              className="bg-accent text-navy px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest w-fit shadow-2xl flex items-center gap-4 transition-all hover:brightness-110"
            >
              <Video size={20} className="flex-shrink-0" />
              Join on Google Meet
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
