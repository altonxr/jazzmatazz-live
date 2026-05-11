import { motion } from "framer-motion";

import {
  cinematicReveal,
} from "../../utils/animations";

import Container from "./Container";

const PageHero = ({
  eyebrow = "Jazzmatazz",
  title = "Cinematic Experience",
  description = "Immersive live-performance atmosphere blending modern jazz fusion, emotional energy, and cinematic stage storytelling.",
}) => {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-40 pb-14 md:pb-24">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0B1120] to-background" />

      {/* Ambient Glow */}
      <div className="absolute top-[-120px] left-[10%] w-[420px] h-[420px] bg-primary/10 blur-[180px] rounded-full" />

      <div className="absolute bottom-[-150px] right-[5%] w-[340px] h-[340px] bg-violetGlow/10 blur-[180px] rounded-full" />

      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Massive Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">

        <h2 className="font-heading text-[20vw] md:text-[18vw] leading-none font-bold text-white/[0.02] whitespace-nowrap select-none">
          JAZZMATAZZ
        </h2>

      </div>

      {/* Top Blend */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />

      {/* Bottom Blend */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

      <Container className="relative z-20">

        <motion.div
          variants={cinematicReveal}
          initial="hidden"
          animate="visible"
          className="max-w-4xl space-y-6 md:space-y-8"
        >

          {/* Eyebrow */}
          <p className="uppercase tracking-[0.35em] text-[10px] md:text-sm text-textSecondary">
            {eyebrow}
          </p>

          {/* Main Title */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl xl:text-[8rem] leading-[0.9] font-bold break-words">
            {title}
          </h1>

          {/* Description */}
          <p className="max-w-2xl text-base md:text-lg text-textSecondary leading-relaxed">
            {description}
          </p>

        </motion.div>

      </Container>

    </section>
  );
};

export default PageHero;