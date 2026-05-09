import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  return (
  <>
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-5">

      <nav className="max-w-container mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 md:px-8 py-4 flex items-center justify-between shadow-glow">

        {/* Logo */}
        <div className="text-xl md:text-2xl font-heading font-bold tracking-wide">
          JAZZMATAZZ
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `transition duration-300 text-sm tracking-wide ${
                  isActive
                    ? "text-white"
                    : "text-textSecondary hover:text-white"
                }`
              }
            >
              {link.name}
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
          className="lg:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-white rounded-full" />
          <span className="w-6 h-[2px] bg-white rounded-full" />
          <span className="w-6 h-[2px] bg-white rounded-full" />
        </button>

      </nav>

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

          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">

            <h2 className="font-heading text-2xl font-bold">
              JAZZMATAZZ
            </h2>

            <button
              onClick={() => setIsOpen(false)}
              className="text-3xl"
            >
              ×
            </button>

          </div>

          {/* Links */}
          <div className="flex-1 flex flex-col items-center justify-center gap-10">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="font-heading text-4xl"
              >
                {link.name}
              </NavLink>
            ))}

            <button className="mt-8 px-8 py-4 rounded-2xl bg-primary shadow-glow">
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