import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = ({ activeRegion }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const targetHour = 10;
    
    const calculateTimeLeft = () => {
      const now = new Date();
      if (now.getDay() === 0 && now.getHours() >= targetHour && now.getHours() < 13) {
        return null;
      }
      
      let nextSunday = new Date();
      const daysUntilSunday = (7 - now.getDay()) % 7;
      
      if (daysUntilSunday === 0 && now.getHours() >= 13) {
        nextSunday.setDate(now.getDate() + 7);
      } else {
        nextSunday.setDate(now.getDate() + daysUntilSunday);
      }
      nextSunday.setHours(targetHour, 0, 0, 0);

      const difference = nextSunday.getTime() - now.getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return null;
    };

    const timer = setInterval(() => {
      const time = calculateTimeLeft();
      if (time) {
        setTimeLeft(time);
        setIsLive(false);
      } else {
        setIsLive(true);
      }
    }, 1000);

    const initialTime = calculateTimeLeft();
    if (initialTime) {
      setTimeLeft(initialTime);
      setIsLive(false);
    } else {
      setIsLive(true);
    }

    return () => clearInterval(timer);
  }, []);
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
            className="flex flex-col sm:flex-row gap-6 items-center flex-wrap"
          >
            <Link to="/mandate">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-navy px-12 py-4 rounded-full font-semibold text-base shadow-2xl transition-all h-full"
              >
                Our Mandate
              </motion.button>
            </Link>
            <motion.button
              whileHover={isLive ? { scale: 1.05 } : {}}
              whileTap={isLive ? { scale: 0.95 } : {}}
              disabled={!isLive}
              className={`border-2 px-12 py-4 rounded-full font-semibold text-base backdrop-blur-md transition-all
                ${isLive ? 'bg-accent/80 border-accent text-white hover:bg-accent' : 'bg-transparent border-white/30 text-white/50 cursor-not-allowed'}
              `}
            >
              {isLive ? "Watch Live Now" : "Watch Live"}
            </motion.button>
            
            {!isLive && (
              <div className="flex gap-4 ml-0 sm:ml-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-white font-bold text-xl font-heading leading-none">{String(timeLeft.days).padStart(2, '0')}</span>
                  <span className="text-white/80 text-[10px] uppercase font-bold tracking-wider">Days</span>
                </div>
                <span className="text-white text-xl font-heading leading-none">:</span>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-white font-bold text-xl font-heading leading-none">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="text-white/80 text-[10px] uppercase font-bold tracking-wider">Hrs</span>
                </div>
                <span className="text-white text-xl font-heading leading-none">:</span>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-white font-bold text-xl font-heading leading-none">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="text-white/80 text-[10px] uppercase font-bold tracking-wider">Mins</span>
                </div>
                <span className="text-white text-xl font-heading leading-none">:</span>
                <div className="flex flex-col items-center justify-center min-w-[32px]">
                  <span className="text-white font-bold text-xl font-heading leading-none">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="text-white/80 text-[10px] uppercase font-bold tracking-wider">Secs</span>
                </div>
              </div>
            )}
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
