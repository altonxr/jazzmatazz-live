import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import Container from "../common/Container";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden pt-24 pb-12">
<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
      {/* Ambient Glow */}
      <div className="absolute left-1/2 bottom-[-120px] -translate-x-1/2 w-[700px] h-[350px] bg-primary/10 blur-[180px] rounded-full" />

      {/* Large Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">

        <h2 className="font-heading text-[22vw] md:text-[16vw] leading-none font-bold text-white/[0.015] md:text-white/[0.03] whitespace-nowrap select-none">
          JAZZMATAZZ
        </h2>

      </div>

      <Container className="relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-12"
        >

          {/* Branding */}
          <div className="space-y-6">

            <p className="uppercase tracking-[0.4em] text-xs md:text-sm text-textSecondary">
              Cinematic Jazz Fusion Experience
            </p>

            <h3 className="font-heading text-5xl md:text-7xl font-bold leading-none">
              JAZZMATAZZ
            </h3>

            <p className="max-w-2xl text-textSecondary leading-relaxed text-base md:text-lg">
              A cinematic live-performance experience blending jazz roots,
              immersive atmosphere, and modern fusion stage energy.
            </p>

          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs uppercase tracking-[0.3em] text-textSecondary">

            <NavLink
              to="/"
              className={({ isActive }) => `transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2 py-1 ${isActive ? 'text-white' : 'hover:text-white'}`}
            >
              Home
            </NavLink>

            <NavLink
              to="/shows"
              className={({ isActive }) => `transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2 py-1 ${isActive ? 'text-white' : 'hover:text-white'}`}
            >
              Shows
            </NavLink>

            <NavLink
              to="/media"
              className={({ isActive }) => `transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2 py-1 ${isActive ? 'text-white' : 'hover:text-white'}`}
            >
              Media
            </NavLink>

            <NavLink
              to="/members"
              className={({ isActive }) => `transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2 py-1 ${isActive ? 'text-white' : 'hover:text-white'}`}
            >
              Members
            </NavLink>

            <NavLink
              to="/booking"
              className={({ isActive }) => `transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2 py-1 ${isActive ? 'text-white' : 'hover:text-white'}`}
            >
              Booking
            </NavLink>

          </nav>

          {/* Socials */}
          <nav className="flex items-center gap-8 text-textSecondary">

            <a
              href="https://instagram.com/jazzmatazz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2 py-1"
            >
              Instagram
            </a>

            <a
              href="https://youtube.com/jazzmatazz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-white transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2 py-1"
            >
              YouTube
            </a>

            <a
              href="https://spotify.com/artist/jazzmatazz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify"
              className="hover:text-white transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2 py-1"
            >
              Spotify
            </a>

          </nav>

          {/* Divider */}
          <div className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Copyright */}
          <p className="text-sm text-textMuted">
            © 2026 Jazzmatazz. All rights reserved.
          </p>

        </motion.div>

      </Container>
    </footer>
  );
};

export default Footer;