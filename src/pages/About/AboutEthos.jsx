import { motion } from "framer-motion";

import {
  cinematicReveal,
  slowFloat,
} from "../../utils/animations";

import Container from "../../components/common/Container";

const AboutEthos = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-40">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0B1120] to-background" />

      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[650px] md:h-[650px] bg-primary/10 blur-[180px] rounded-full" />

      {/* Blend Top */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />

      {/* Blend Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">

        <h2 className="font-heading text-[22vw] md:text-[18vw] leading-none font-bold text-white/[0.02] whitespace-nowrap">
          ATMOSPHERE
        </h2>

      </div>

      {/* Floating Music Symbol */}
      <motion.div
        {...slowFloat}
        className="absolute right-[6%] top-[14%] text-[90px] md:text-[160px] text-white/[0.03] rotate-12 pointer-events-none"
      >
        ♫
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
            Performance Ethos
          </p>

          {/* Main Quote */}
          <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl xl:text-[7rem] leading-[0.9] font-bold">
            EVERY NOTE
            <br />
            SHOULD FEEL
            <br />
            LIKE A MEMORY
          </h2>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-base md:text-lg text-textSecondary leading-relaxed">
            Jazzmatazz exists to create emotional live experiences —
            performances where atmosphere, improvisation, lighting, rhythm,
            and audience energy merge into something immersive and unforgettable.
          </p>

        </motion.div>

      </Container>

    </section>
  );
};

export default AboutEthos;