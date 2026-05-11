import { motion } from "framer-motion";

import {
  fadeLeft,
  fadeScale,
} from "../../utils/animations";

import Container from "../../components/common/Container";

const AboutPhilosophy = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">

      {/* Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0B1120] to-background" />

      {/* Glow Layers */}
      <div className="absolute top-[10%] left-[5%] w-[340px] h-[340px] bg-primary/10 blur-[160px] rounded-full" />

      <div className="absolute bottom-[0%] right-[8%] w-[300px] h-[300px] bg-violetGlow/10 blur-[160px] rounded-full" />

      {/* Blend Top */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />

      {/* Blend Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

      <Container className="relative z-20">

        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 md:gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div className="space-y-4">

              <p className="uppercase tracking-[0.35em] text-[10px] md:text-sm text-textSecondary">
                Our Philosophy
              </p>

              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl xl:text-[6rem] leading-[0.9] font-bold">
                MUSIC
                <br />
                SHOULD
                <br />
                FEEL
                <br />
                CINEMATIC
              </h2>

            </div>

            <p className="max-w-xl text-base md:text-lg text-textSecondary leading-relaxed">
              Jazzmatazz was built around atmosphere, emotional storytelling,
              improvisation, and immersive live energy — transforming every
              performance into a cinematic experience rather than just a show.
            </p>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={fadeScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative min-h-[420px] md:min-h-[540px]"
          >

            {/* Cinematic Structure */}
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-white/[0.05] bg-gradient-to-br from-white/[0.02] to-transparent backdrop-blur-sm">

              {/* Atmosphere */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-violetGlow/10" />

              <div className="absolute inset-0 bg-black/20" />

              {/* Grid Lines */}
              <div className="absolute inset-0 opacity-[0.05]">

                <div className="absolute left-[20%] top-0 w-px h-full bg-white" />

                <div className="absolute left-[50%] top-0 w-px h-full bg-white" />

                <div className="absolute left-[80%] top-0 w-px h-full bg-white" />

              </div>

              {/* Massive Typography */}
              <h2 className="absolute bottom-[2%] left-[6%] text-[5rem] md:text-[10rem] font-bold leading-none text-white/[0.02] select-none">
                JAZZ
              </h2>

              {/* Musical Symbols */}
              <div className="absolute top-[8%] right-[8%] text-[140px] md:text-[200px] text-white/[0.02] rotate-12">
                ♫
              </div>

              <div className="absolute bottom-[16%] right-[16%] text-[80px] md:text-[110px] text-primary/[0.05] -rotate-12">
                ♪
              </div>

              {/* Floating Quote */}
              <div className="absolute top-[16%] left-[10%] max-w-[75%] z-10">

                <p className="uppercase tracking-[0.3em] text-[10px] text-textMuted mb-4">
                  Performance Ethos
                </p>

                <p className="text-lg md:text-2xl leading-relaxed text-white/80">
                  “Every performance should feel like a memory unfolding in real time.”
                </p>

              </div>

              {/* Bottom Glow */}
              <div className="absolute bottom-[-80px] right-[5%] w-[220px] h-[220px] rounded-full bg-primary/10 blur-[100px]" />

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
};

export default AboutPhilosophy;