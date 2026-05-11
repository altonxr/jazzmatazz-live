import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "../ui/Logo";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Shows", path: "/shows" },
  { name: "Members", path: "/members" },
  { name: "Media", path: "/media" },
  { name: "Booking", path: "/booking" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-8 left-1/2 -translate-x-1/2 w-full z-[99999]">

        <nav
          className="
            relative
            max-w-[1400px]
            mx-auto
            px-4 md:px-6
            h-[76px]
            flex items-center justify-between
            rounded-[1.7rem]
            border border-white/[0.06]
            bg-[#070B17]/60
            backdrop-blur-2xl
            shadow-[0_0_25px_rgba(124,58,237,0.05)]
          "
        >

          {/* Glow */}
          <div className="absolute inset-0 rounded-[1.7rem] bg-gradient-to-r from-primary/[0.04] via-transparent to-violetGlow/[0.04] pointer-events-none" />

          {/* Logo */}
          <div className="relative z-10">
            <Logo />
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8 relative z-10">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `
                    relative
                    text-[13px]
                    tracking-[0.18em]
                    uppercase
                    transition duration-300
                    ${
                      isActive
                        ? "text-white"
                        : "text-textSecondary hover:text-white"
                    }
                  `
                }
              >
                {({ isActive }) => (
                  <div className="relative">

                    <span>{link.name}</span>

                    {/* Active Line */}
                    <motion.div
                      initial={false}
                      animate={{
                        width: isActive ? "100%" : "0%",
                        opacity: isActive ? 1 : 0.7,
                      }}
                      whileHover={{
                        width: "100%",
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="absolute left-0 -bottom-2 h-px bg-gradient-to-r from-primary via-white to-violetGlow"
                    />

                  </div>
                )}
              </NavLink>
            ))}

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden flex flex-col gap-1.5 relative z-10 mr-4"
          >
            <span className="w-6 h-[2px] bg-white rounded-full" />
            <span className="w-6 h-[2px] bg-white rounded-full" />
            <span className="w-6 h-[2px] bg-white rounded-full" />
          </button>

        </nav>

      </header>

      {/* Mobile Menu */}
      <AnimatePresence>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100000] bg-background/95 backdrop-blur-3xl flex flex-col"
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

            {/* Mobile Links */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-8">

              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.07,
                    duration: 0.45,
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

            </div>

          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
};

export default Navbar;