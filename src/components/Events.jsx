import React, { useRef } from "react";
import { Video, ChevronLeft, ChevronRight } from "lucide-react";
import { events } from "../data";
import { motion } from "framer-motion";

const Events = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -window.innerWidth * 0.8,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: window.innerWidth * 0.8,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="events"
      className="bg-bg py-10 md:py-24 px-4 md:px-16 overflow-hidden "
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <header className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
            className="flex gap-4"
          >
            <button
              onClick={scrollLeft}
              className="p-4 rounded-full border border-navy/20 text-navy hover:bg-navy hover:text-white transition-colors cursor-pointer"
              aria-label="Previous event"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollRight}
              className="p-4 rounded-full border border-navy/20 text-navy hover:bg-navy hover:text-white transition-colors cursor-pointer"
              aria-label="Next event"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        </header>
      </div>

      {/* Event Cards */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-6 md:gap-12 snap-x snap-mandatory no-scrollbar pb-12 w-full max-w-[1400px] mx-auto"
      >
        {events.eventList.map((eventItem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="w-[90vw] md:w-[85vw] lg:w-[80vw] shrink-0 snap-center grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] bg-white rounded-[1rem] md:rounded-[2rem] overflow-hidden min-h-[680px] group shadow-2xl shadow-navy/10"
          >
            {/* Left: Image */}
            <div className="relative overflow-hidden min-h-[400px] lg:min-h-0">
              <motion.img
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1.0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                src={eventItem.image}
                alt={eventItem.title}
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
                {eventItem.tag}
              </motion.span>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-7xl font-heading font-bold mb-4 leading-none tracking-tighter text-accent"
              >
                {eventItem.title}
              </motion.h3>

              {/* Subtitle */}
              {eventItem.subtitle && (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.6 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-base md:text-xl font-light italic mb-10 text-white/60"
                >
                  {eventItem.subtitle}
                </motion.p>
              )}

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.8 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-base md:text-xl font-light leading-relaxed mb-6 max-w-md text-white/80 whitespace-pre-wrap"
              >
                {eventItem.description}
              </motion.p>

              {/* CTA text */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-sm md:text-base mb-10 text-white/60"
              >
                {eventItem.cta}
              </motion.p>

              {/* Google Meet Button */}
              <motion.a
                href={eventItem.meetLink}
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
        ))}
      </div>
    </section>
  );
};

export default Events;
