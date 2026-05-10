import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "../ui/Logo";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Shows", path: "/shows" },
  { name: "Gallery", path: "/gallery" },
  { name: "Members", path: "/members" },
  { name: "Media", path: "/media" },
  { name: "Booking", path: "/booking" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-5">

        <motion.nav
          animate={{
            backgroundColor: scrolled
              ? "rgba(255,255,255,0.08)"
              : "rgba(255,255,255,0.05)",
            borderColor: scrolled
              ? "rgba(255,255,255,0.12)"
              : "rgba(255,255,255,0.08)",
            y: scrolled ? -2 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          className="max-w-container mx-auto backdrop-blur-2xl rounded-2xl px-6 md:px-8 py-4 flex items-center justify-between shadow-[0_0_40px_rgba(124,58,237,0.08)] border"
        >

          {/* Logo */}
          <Logo />

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm tracking-[0.15em] uppercase transition duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-textSecondary hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <div className="relative group">

                    <span>{link.name}</span>

                    {/* Hover / Active Line */}
                    <motion.div
                      initial={false}
                      animate={{
                        width: isActive ? "100%" : "0%",
                        opacity: isActive ? 1 : 0.6,
                      }}
                      whileHover={{
                        width: "100%",
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: "easeOut",
                      }}
                      className="absolute left-0 -bottom-2 h-px bg-gradient-to-r from-primary via-white to-violetGlow"
                    />

                  </div>
                )}
              </NavLink>
            ))}

          </div>

          {/* Desktop CTA */}
          <button className="hidden lg:block px-5 py-2 rounded-xl bg-primary hover:bg-violetGlow transition duration-300 shadow-glow">
            Book Jazzmatazz
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden flex flex-col gap-1.5"
          >
            <span className="w-6 h-[2px] bg-white rounded-full" />
            <span className="w-6 h-[2px] bg-white rounded-full" />
            <span className="w-6 h-[2px] bg-white rounded-full" />
          </button>

        </motion.nav>

      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl flex flex-col"
          >

            {/* Ambient Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">

              <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-primary/20 blur-[140px] rounded-full" />

              <div className="absolute bottom-[10%] right-[10%] w-[250px] h-[250px] bg-violetGlow/20 blur-[140px] rounded-full" />

            </div>

            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between px-6 py-6 border-b border-white/10">

              <Logo />

              <button
                onClick={() => setIsOpen(false)}
                className="text-3xl text-white/80 hover:text-white transition duration-300"
              >
                ×
              </button>

            </div>

            {/* Links */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-10">

              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                >

                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="font-heading text-4xl hover:text-primary transition duration-300"
                  >
                    {link.name}
                  </NavLink>

                </motion.div>
              ))}

              <button className="mt-8 px-8 py-4 rounded-2xl bg-primary shadow-glow hover:bg-violetGlow transition duration-300">
                Book Jazzmatazz
              </button>

            </div>

          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
};

export default Navbar;