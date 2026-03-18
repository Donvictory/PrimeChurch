import React, { useState } from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
  X,
  Copy,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import churchLogo from "../assets/church-logo.jpg";
import { socials } from "../data";

const Footer = () => {
  const [isGiveModalOpen, setIsGiveModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("0085371429");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="footer bg-navy text-white py-24 md:py-48 px-4 md:px-16 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr] md:grid-cols-2 gap-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <img
              src={churchLogo}
              alt="The Prime Church Logo"
              className="h-16 md:h-20 w-auto object-contain"
            />
            <p className="text-lg md:text-xl font-body font-light text-white/50 max-w-[400px] leading-relaxed italic">
              Redefining church culture through modern expressions and spiritual
              empowerment.
            </p>
          </div>

          <div className="space-y-6">
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-accent group-hover:border-accent transition-all">
                <MapPin
                  size={24}
                  className="text-accent group-hover:text-navy transition-colors"
                />
              </div>
              <span className="text-base md:text-xl font-body font-normal text-white/70">
                Hall 1, Ozone Cinemas (E-Center), 1–11 Commercial Avenue, Yaba,
                Lagos.
              </span>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-accent group-hover:border-accent transition-all">
                <Phone
                  size={24}
                  className="text-accent group-hover:text-navy transition-colors"
                />
              </div>
              <span className="text-base md:text-xl font-body font-normal text-white/70">
                +2348xxxxxxxxxx
              </span>
            </motion.div>
          </div>

          <div className="flex gap-8">
            {[
              { Icon: Instagram, href: socials.instagram },
              { Icon: Facebook, href: socials.facebook },
              { Icon: Twitter, href: socials.twitter },
              { Icon: Mail, href: socials.mail },
              {
                Icon: () => (
                  <svg
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                ),
                href: socials.tiktok,
              },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -10,
                  rotate: i % 2 === 0 ? 10 : -10,
                  color: "#E8DCC4",
                }}
                className="text-white opacity-40 hover:opacity-100 transition-all duration-300"
              >
                <Icon size={32} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h4 className="text-2xl font-heading font-bold text-accent tracking-tight">
            Quick Links
          </h4>
          <ul className="space-y-6 text-xl font-body font-light text-white/50">
            {[
              "About Us",
              "Meet Pastors",
              "Upcoming Events",
              "Privacy Policy",
            ].map((link) => (
              <li key={link}>
                <motion.a
                  href="#"
                  whileHover={{ x: 10, color: "#fff" }}
                  className="transition-all block"
                >
                  {link}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter / Secondary Info Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="space-y-12"
        >
          <h4 className="text-2xl font-heading font-bold text-accent tracking-tight">
            Give Globally
          </h4>
          <p className="text-lg md:text-xl font-body font-light text-white/50 leading-relaxed italic">
            Support our global mission and ministry with a heart of excellence.
          </p>
          <motion.button
            onClick={() => setIsGiveModalOpen(true)}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#E8DCC4",
              color: "#0B1B2B",
            }}
            className="bg-transparent border-2 border-accent text-accent px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs transition-all w-fit"
          >
            Partner Today
          </motion.button>
        </motion.div>
      </div>

      {/* <div className="max-w-[1400px] mx-auto border-t border-white/5 mt-32 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs font-bold uppercase tracking-[4px] text-white/20 relative z-10">
        <span>© 2026 Prime Church. Built with Excellence.</span>
        <span>Redefining Culture. Restoring Hope.</span>
      </div> */}

      <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full blur-[200px] bg-accent/5 z-0 pointer-events-none" />

      <AnimatePresence>
        {isGiveModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/80 backdrop-blur-md"
            onClick={() => setIsGiveModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white text-navy p-8 md:p-12 rounded-[2rem] shadow-2xl max-w-lg w-full relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsGiveModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 transition-colors"
                title="Close"
              >
                <X size={24} className="text-navy/50 hover:text-navy" />
              </button>

              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-heading font-bold text-navy tracking-tight mb-2">
                    Give Globally
                  </h3>
                  <p className="text-navy/60 font-body text-base">
                    Partner with us in our global mission.
                  </p>
                </div>

                <div className="bg-[#f8f9fa] p-6 rounded-2xl relative border border-navy/5 group hover:border-navy/10 transition-colors">
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase text-navy/40 mb-1">
                        Account Name
                      </p>
                      <p className="text-lg font-bold text-navy">
                        HARVESTERS INT'L CHRISTIAN-COLLEGE
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase text-navy/40 mb-1">
                        Bank
                      </p>
                      <p className="text-lg font-bold text-navy">
                        Sterling Bank
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase text-navy/40 mb-1">
                        Account Number
                      </p>
                      <div className="flex items-center justify-between gap-3 bg-white p-3 md:p-4 rounded-xl shadow-sm border border-black/5">
                        <p className="text-2xl md:text-3xl font-heading font-bold text-navy tracking-wider">
                          0085371429
                        </p>
                        <button
                          onClick={handleCopy}
                          className="p-3 rounded-full bg-navy/5 hover:bg-navy/10 transition-colors text-navy flex items-center justify-center group/btn"
                          title="Copy Account Number"
                        >
                          {copied ? (
                            <Check size={20} className="text-green-600" />
                          ) : (
                            <Copy
                              size={20}
                              className="group-hover/btn:scale-110 transition-transform"
                            />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setIsGiveModalOpen(false)}
                    className="w-full py-4 rounded-xl bg-navy text-accent font-bold tracking-widest uppercase text-sm hover:brightness-110 transition-all shadow-lg shadow-navy/20"
                  >
                    Done
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
