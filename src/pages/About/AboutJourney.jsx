import { motion } from "framer-motion";

import {
  fadeLeft,
  fadeScale,
  staggerContainer,
} from "../../utils/animations";

import Container from "../../components/common/Container";

const journey = [
  {
    year: "2019",
    title: "The Beginning",
    description:
      "Jazzmatazz began as a small collective of musicians experimenting with cinematic jazz fusion, improvisation, and immersive live atmosphere.",
  },
  {
    year: "2021",
    title: "Finding The Identity",
    description:
      "The performances evolved into emotionally driven stage experiences blending lighting, atmosphere, modern fusion textures, and live storytelling.",
  },
  {
    year: "2024",
    title: "Live Performance Evolution",
    description:
      "Jazzmatazz expanded into larger immersive performances focused on creating unforgettable nights through sound, emotion, and cinematic energy.",
  },
];

const AboutJourney = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">

      {/* Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0B1120] to-background" />

      {/* Glow */}
      <div className="absolute left-[10%] top-[10%] w-[320px] h-[320px] rounded-full bg-primary/10 blur-[160px]" />

      {/* Section Blend */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />

      <Container className="relative z-20">

        {/* Header */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mb-16 md:mb-24"
        >

          <p className="uppercase tracking-[0.35em] text-[10px] md:text-sm text-textSecondary mb-4">
            The Journey
          </p>

          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl xl:text-[6rem] leading-[0.92] font-bold mb-6">
            EVOLVING
            <br />
            THROUGH
            <br />
            SOUND
          </h2>

          <p className="text-base md:text-lg text-textSecondary leading-relaxed">
            Every performance, collaboration, and stage experience shaped the identity of Jazzmatazz into something immersive, emotional, and cinematic.
          </p>

        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >

          {/* Timeline Line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-white/10 to-transparent" />

          <div className="space-y-14 md:space-y-20">

            {journey.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeScale}
                className="relative pl-14 md:pl-20"
              >

                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 md:top-3 w-9 h-9 md:w-11 md:h-11 rounded-full border border-primary/40 bg-background backdrop-blur-xl flex items-center justify-center">

                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary" />

                </div>

                {/* Content */}
                <div className="space-y-4">

                  <p className="uppercase tracking-[0.3em] text-[10px] md:text-xs text-textSecondary">
                    {item.year}
                  </p>

                  <h3 className="font-heading text-2xl md:text-5xl font-bold leading-tight">
                    {item.title}
                  </h3>

                  <p className="max-w-2xl text-sm md:text-lg text-textSecondary leading-relaxed">
                    {item.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </motion.div>

      </Container>

    </section>
  );
};

export default AboutJourney;