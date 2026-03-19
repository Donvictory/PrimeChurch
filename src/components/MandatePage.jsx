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
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
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
      content: "Activate tribes, events, challenges, and cause-based campaigns.",
      icon: "🚀",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-16 pt-32 pb-20 relative overflow-hidden font-body flex flex-col items-center">
      {/* Dynamic Background Elements roughly mimicking the image */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-yellow-500 rounded-full blur-[150px] opacity-20 pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-red-600 rounded-full blur-[150px] opacity-20 pointer-events-none"
      />

      <div className="w-full max-w-[1200px] relative z-20 mb-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white font-bold hover:text-yellow-400 transition-all bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full shadow-md border border-white/20 hover:border-yellow-400/50"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Back to Home
        </Link>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1200px] w-full flex flex-col gap-16 relative z-10"
      >
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center justify-between">
          <motion.div variants={itemVariants} className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-yellow-400 blur-2xl opacity-20 transform scale-110 rounded-full"></div>
            <h1 className="text-6xl md:text-8xl font-heading font-black text-yellow-500 uppercase leading-[0.9] tracking-tighter mix-blend-screen relative z-10 drop-shadow-lg">
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
            <div className="absolute -inset-2 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-70 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 p-10 md:p-14 rounded-[3rem] h-full flex flex-col justify-center overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/20 blur-3xl rounded-full"></div>
              
              <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6 flex items-center gap-4 text-yellow-400">
                <span className="w-12 h-1 bg-gradient-to-r from-red-600 to-yellow-500 inline-block rounded-full"></span>
                Our Brand Promise
              </h2>
              <p className="text-2xl md:text-4xl font-light leading-snug text-white tracking-wide">
                To be a movement that fuels <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">faith, freedom, and cultural influence</span> for a generation called to shape the world.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Middle Strategy Description */}
        <motion.div variants={itemVariants} className="text-center max-w-[900px] mx-auto my-8">
          <p className="text-2xl md:text-4xl font-heading font-medium text-white/90 leading-tight">
            The PRIME Church's Core Strategy is anchored on three key pillars,
            each representing its identity, mode of expression, and approach to
            fostering lasting engagement and community impact.
          </p>
        </motion.div>

        {/* Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-transparent border-2 border-white/50 hover:border-white p-8 md:p-10 rounded-[2.5rem] transition-all flex flex-col relative overflow-hidden backdrop-blur-sm"
            >
              {/* Subtle hover background effect */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="text-5xl mb-6">{pillar.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold font-heading mb-6 uppercase tracking-wider text-white">
                {pillar.title.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i !== pillar.title.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h3>
              <p className="text-white/80 text-lg leading-relaxed flex-grow">
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
