import { motion } from "framer-motion";

import {
  cinematicReveal,
  slowFloat,
} from "../../utils/animations";

import Container from "../../components/common/Container";

const ShowsCTA = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0B1120] to-background" />

      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[180px] rounded-full" />

      {/* Blend */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />

      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">

        <h2 className="font-heading text-[20vw] md:text-[15vw] leading-none font-bold text-white/[0.02] whitespace-nowrap">
          EXPERIENCE
        </h2>

      </div>

      {/* Floating Symbol */}
      <motion.div
        {...slowFloat}
        className="absolute right-[8%] top-[18%] text-[80px] md:text-[140px] text-white/[0.03] rotate-12 pointer-events-none"
      >
        ♪
      </motion.div>

      <Container className="relative z-20">

        <motion.div
          variants={cinematicReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8"
        >

          {/* Eyebrow */}
          <p className="uppercase tracking-[0.35em] text-[10px] md:text-sm text-textSecondary">
            Bring The Atmosphere
          </p>

          {/* Main Heading */}
          <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl xl:text-[7rem] leading-[0.9] font-bold">
            CREATE
            <br />
            AN
            <br />
            UNFORGETTABLE
            <br />
            NIGHT
          </h2>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-base md:text-lg text-textSecondary leading-relaxed">
            From immersive live sessions to cinematic stage experiences,
            Jazzmatazz performances are designed to transform events into
            emotional and unforgettable nights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 pt-4">

            <button className="px-8 py-4 rounded-2xl bg-primary hover:bg-violetGlow transition duration-300 shadow-glow text-sm uppercase tracking-[0.2em]">
              Book The Experience
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.06] transition duration-300 text-sm uppercase tracking-[0.2em]">
              Explore Media
            </button>

          </div>

        </motion.div>

      </Container>

    </section>
  );
};

export default ShowsCTA;