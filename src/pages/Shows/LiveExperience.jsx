import { motion } from "framer-motion";

import {
  fadeLeft,
  fadeScale,
  staggerContainer,
} from "../../utils/animations";

import Container from "../../components/common/Container";

const experiences = [
  {
    title: "Immersive Lighting",
    description:
      "[ Add how lighting and atmosphere transform the live experience here ]",
  },
  {
    title: "Live Improvisation",
    description:
      "[ Add how spontaneous jazz fusion improvisation shapes performances here ]",
  },
  {
    title: "Audience Energy",
    description:
      "[ Add how crowd interaction and emotional energy drive performances here ]",
  },
];

const LiveExperience = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-20">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0B1120] to-background" />

      {/* Ambient Glow */}
      <div className="absolute left-[5%] top-[10%] w-[320px] h-[320px] rounded-full bg-primary/10 blur-[160px]" />

      <div className="absolute right-[0%] bottom-[0%] w-[260px] h-[260px] rounded-full bg-violetGlow/10 blur-[160px]" />

      {/* Blend */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />

      <Container className="relative z-20">

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 md:gap-20 items-start">

          {/* LEFT SIDE */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 lg:sticky lg:top-32"
          >

            <p className="uppercase tracking-[0.35em] text-[10px] md:text-sm text-textSecondary">
              The Live Experience
            </p>

            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl xl:text-[6rem] leading-[0.9] font-bold">
              MORE
              <br />
              THAN
              <br />
              A SHOW
            </h2>

            <p className="max-w-xl text-base md:text-lg text-textSecondary leading-relaxed">
              Every Jazzmatazz performance is designed to feel immersive,
              emotional, cinematic, and alive — blending atmosphere, lighting,
              improvisation, and audience connection into unforgettable nights.
            </p>

            {/* Accent */}
            <div className="pt-2">
              <div className="w-28 h-px bg-gradient-to-r from-primary via-white/30 to-transparent" />
            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >

            {experiences.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeScale}
                className="group relative overflow-hidden rounded-[2rem] border border-white/[0.05] bg-white/[0.03] backdrop-blur-xl p-6 md:p-8"
              >

                {/* Atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-violetGlow/10 opacity-60 group-hover:opacity-100 transition duration-700" />

                {/* Large Background Number */}
                <h2 className="absolute right-4 bottom-0 font-heading text-[5rem] md:text-[7rem] leading-none text-white/[0.03] pointer-events-none">
                  0{index + 1}
                </h2>

                {/* Content */}
                <div className="relative z-10 space-y-5">

                  <p className="uppercase tracking-[0.3em] text-[10px] text-textMuted">
                    Experience Layer
                  </p>

                  <h3 className="font-heading text-3xl md:text-4xl leading-tight font-bold">
                    {item.title}
                  </h3>

                  <p className="max-w-xl text-sm md:text-base text-textSecondary leading-relaxed">
                    {item.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </motion.div>

        </div>

      </Container>

    </section>
  );
};

export default LiveExperience;