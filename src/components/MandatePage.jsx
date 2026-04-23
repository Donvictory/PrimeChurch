import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MandatePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const pillars = [
    {
      title: "CORE VALUES",
      content:
        "Faith First, Always, Love Without Walls, Radical Joy, Creative Fire, Truth in Every Topic, Community > Crowd.",
      icon: "❤️",
    },
    {
      title: "CREATE ENGAGING CONTENT \n& EXPERIENCES",
      content: "Short films, reels, podcasts, memes, discussions, and more.",
      icon: "🎥",
    },
    {
      title: "INSPIRE ACTION & BELONGING",
      content:
        "Activate tribes, events, challenges, and cause-based campaigns.",
      icon: "🚀",
    },
  ];

  return (
    <div className="min-h-screen bg-bg text-navy px-4 md:px-16 pt-32 pb-20 relative overflow-hidden font-body flex flex-col items-center">
      {/* Dynamic Background Elements roughly mimicking the image */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-accent rounded-[1rem] md:rounded-[1.2rem] blur-[150px] opacity-40 pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-navy/10 rounded-[1rem] md:rounded-[1.2rem] blur-[150px] opacity-40 pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1200px] w-full flex flex-col gap-16 relative z-10"
      >
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center justify-between">
          <motion.div variants={itemVariants} className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-accent blur-2xl opacity-30 transform scale-110 rounded-full"></div>
            <h1 className="text-6xl md:text-8xl font-heading font-bold text-navy uppercase leading-[0.9] tracking-tighter mix-blend-multiply relative z-10 drop-shadow-sm">
              Strategic
              <br />
              Pillars
            </h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="lg:w-1/2 relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-accent via-white to-accent rounded-[1rem] md:rounded-[1.2rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-white border border-navy/10 p-10 md:p-14 rounded-[1rem] md:rounded-[1.2rem] h-full flex flex-col justify-center overflow-hidden shadow-2xl shadow-navy/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/30 blur-3xl rounded-[1rem] md:rounded-[1.2rem]"></div>

              <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6 flex items-center gap-4 text-navy">
                Our Brand Promise
              </h2>
              <p className="text-2xl md:text-4xl font-light leading-snug text-navy tracking-wide">
                To be a movement that fuels{" "}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-navy to-navy-light">
                  faith, freedom, and cultural influence
                </span>{" "}
                for a generation called to shape the world.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="text-center max-w-[900px] mx-auto my-8"
        >
          <p className="text-2xl md:text-4xl font-body font-light text-text-muted leading-tight">
            The PRIME Church's Core Strategy is anchored on three key pillars,
            each representing its identity, mode of expression, and approach to
            fostering lasting engagement and community impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white shadow-xl shadow-navy/5 border border-transparent hover:border-accent/50 p-8 md:p-10 rounded-[1rem] md:rounded-[1.2rem] transition-all flex flex-col relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-navy/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="text-5xl mb-6">{pillar.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold font-heading mb-6 uppercase tracking-wider text-navy">
                {pillar.title.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i !== pillar.title.split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h3>
              <p className="text-text-muted text-lg leading-relaxed flex-grow">
                {pillar.content}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MandatePage;
