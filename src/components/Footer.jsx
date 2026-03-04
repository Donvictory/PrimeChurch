import React from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import churchLogo from "../assets/church-logo.jpg";

const Footer = () => {
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
                34, Adeola Hopewell Street, Victoria Island, Lagos.
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
            {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
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

      <div className="max-w-[1400px] mx-auto border-t border-white/5 mt-32 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs font-bold uppercase tracking-[4px] text-white/20 relative z-10">
        <span>© 2026 Prime Church. Built with Excellence.</span>
        <span>Redefining Culture. Restoring Hope.</span>
      </div>

      {/* Decorative Blur Background */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full blur-[200px] bg-accent/5 z-0 pointer-events-none" />
    </footer>
  );
};

export default Footer;
