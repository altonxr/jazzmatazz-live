import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  fadeLeft,
  fadeRight,
  cinematicReveal,
  slowFloat,
} from "../../utils/animations"
import Container from "../common/Container";
import PrimaryButton from "../ui/PrimaryButton";
import GlassCard from "../ui/GlassCard";
import HeroLogo from "../ui/HeroLogo";
import AmbientParticles from "../ui/AmbientParticles";

import heroBand from "../../assets/images/hero/hero-band.png";

const HeroSection = () => {
  return (
    <motion.section className="relative min-h-screen flex items-center overflow-hidden px-4 md:px-6 pt-32 md:pt-40">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-heroGradient" />

      {/* Purple Glow */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-150px] left-[10%] w-[450px] h-[450px] bg-primary/30 blur-[160px] rounded-full"
      />

      {/* Violet Glow */}
      <div className="absolute bottom-[-150px] right-[5%] w-[400px] h-[400px] bg-violetGlow/20 blur-[160px] rounded-full" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Ambient Particles */}
      <AmbientParticles />

      {/* Main Content */}
      <Container className="relative z-10 w-full">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >

            <div className="space-y-4">

              <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-textSecondary">
                Luxury Jazz Fusion Experience
              </p>

              <HeroLogo />

            </div>

            <p className="max-w-xl text-base md:text-xl text-textSecondary leading-relaxed">
              A cinematic live-performance experience blending classic jazz,
              fusion energy, and immersive stage presence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">

              <Link to="/booking" className="w-full sm:w-auto">
                <PrimaryButton>
                  Book Jazzmatazz
                </PrimaryButton>
              </Link>

              <Link to="/shows" className="w-full sm:w-auto inline-block">
                <button className="w-full px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition duration-300 relative group overflow-hidden">
                  <span className="relative z-10">Explore Shows</span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </button>
              </Link>

            </div>

          </motion.div>

          {/* RIGHT VISUAL SIDE */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="relative flex items-center justify-center"
          >

            {/* Floating Animation */}
            <motion.div
              {...slowFloat}
              className="w-full flex justify-center"
            >

              {/* Main Visual Card */}
              <GlassCard className="relative w-[320px] sm:w-[380px] xl:w-[420px] h-[420px] sm:h-[500px] xl:h-[520px] overflow-hidden">

                {/* Hero Image */}
                <img
                  src={heroBand}
                  alt="Jazzmatazz Live Performance"
                  className="absolute inset-0 w-full h-full object-cover grayscale brightness-110 contrast-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/15" />

                {/* Gradient Atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                {/* Purple Ambient Glow */}
                <div className="absolute inset-0 bg-primary/10 mix-blend-screen" />

                {/* Bottom Content */}
                <div className="absolute bottom-8 md:bottom-10 left-8 md:left-10 z-10">

                  <p className="text-textSecondary uppercase tracking-[0.3em] text-xs mb-3">
                    National Level Band
                  </p>

                  <h2 className="font-heading text-3xl xl:text-4xl font-bold">
                    EST. GOA
                  </h2>

                </div>

              </GlassCard>

            </motion.div>

          </motion.div>

        </div>

      </Container>

    </motion.section>
  );
};

export default HeroSection;