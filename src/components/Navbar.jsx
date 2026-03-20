import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import churchLogo from "../assets/church-logo.jpg";
import { socials } from "../data";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Pastors", href: "#pastors" },
    { name: "Events", href: "#events" },
  ];

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ease-in-out
          ${isScrolled || isMobileMenuOpen ? "py-4" : "py-4"}`}
      >
        {/* Background Layer */}
        <div
          className={`absolute inset-0 transition-all duration-500 ease-in-out -z-10
            ${isScrolled || isMobileMenuOpen || location.pathname !== "/" ? "bg-navy/95 backdrop-blur-xl border-b border-white/10 opacity-100" : "bg-transparent opacity-0"}`}
        />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center text-white relative z-[1002]">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="cursor-pointer"
            onClick={handleLogoClick}
          >
            {["/mandate", "/form", "/trybe-form"].includes(
              location.pathname,
            ) ? (
              <div className="inline-flex items-center gap-2 text-white font-bold hover:text-accent transition-all bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full shadow-md border border-white/20 hover:border-accent/50">
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
                <span className="hidden sm:inline">Back to Home</span>
                <span className="sm:hidden">Back</span>
              </div>
            ) : (
              <img
                src={churchLogo}
                alt="The Prime Church Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            )}
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10 font-body text-xs font-semibold uppercase tracking-[0.15em]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="opacity-70 hover:opacity-100 hover:text-accent transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="lg:hidden p-2 -mr-2 text-white hover:text-accent transition-colors flex items-center justify-center font-bold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X size={26} strokeWidth={2.5} />
            ) : (
              <Menu size={26} strokeWidth={2.5} />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-navy z-[999] flex flex-col items-center justify-center p-6 text-white overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(232,220,196,0.05)_0%,transparent_70%)] pointer-events-none" />

              <div className="flex flex-col items-center gap-10 text-center relative z-10 w-full">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 * (index + 1),
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl md:text-5xl font-heading font-bold text-white hover:text-accent transition-colors py-2 block w-full outline-none"
                  >
                    {link.name}
                  </motion.a>
                ))}

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="mt-12 w-20 h-[1px] bg-accent/20"
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  transition={{ delay: 0.6 }}
                  className="mt-4 text-[10px] md:text-xs uppercase tracking-[0.5em] font-medium text-white/50"
                >
                  Redefining Culture. Restoring Hope.
                </motion.div>

                <div className="flex gap-10 mt-8">
                  <motion.a
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 }}
                    href={socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <Instagram size={32} className="text-accent" />
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    href={socials.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="32"
                      height="32"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-accent"
                    >
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
