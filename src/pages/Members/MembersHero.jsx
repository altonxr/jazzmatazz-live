import { motion } from "framer-motion";

import {
  cinematicReveal,
  slowFloat,
} from "../../utils/animations";

import Container from "../../components/common/Container";

const MembersHero = () => {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-40 pb-12 md:pb-20">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0B1120] to-background" />

      {/* Ambient Glow */}
      <div className="absolute top-[5%] left-[8%] w-[320px] h-[320px] bg-primary/10 blur-[160px] rounded-full" />

      <div className="absolute bottom-[0%] right-[5%] w-[280px] h-[280px] bg-violetGlow/10 blur-[160px] rounded-full" />

      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">

        <h2 className="font-heading text-[24vw] md:text-[18vw] leading-none font-bold text-white/[0.02] whitespace-nowrap">
          ARTISTS
        </h2>

      </div>

      {/* Floating Symbol */}
      <motion.div
        {...slowFloat}
        className="absolute right-[6%] top-[12%] text-[80px] md:text-[140px] text-white/[0.03] rotate-12 pointer-events-none"
      >
        ♪
      </motion.div>

      {/* Blend Top */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />

      {/* Blend Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

      <Container className="relative z-20">

        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 md:gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            variants={cinematicReveal}
            initial="hidden"
            animate="visible"
            className="space-y-6 md:space-y-8"
          >

            {/* Eyebrow */}
            <p className="uppercase tracking-[0.35em] text-[10px] md:text-sm text-textSecondary">
              The Artists
            </p>

            {/* Title */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl xl:text-[7rem] leading-[0.9] font-bold">
              THE
              <br />
              PEOPLE
              <br />
              BEHIND
              <br />
              THE SOUND
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-base md:text-lg text-textSecondary leading-relaxed">
              A collective of musicians blending saxophone, flute, keys,
              percussion, atmosphere, improvisation, and cinematic fusion
              into immersive live performance experiences.
            </p>

            {/* Accent Line */}
            <div className="pt-2">
              <div className="w-28 h-px bg-gradient-to-r from-primary via-white/30 to-transparent" />
            </div>

          </motion.div>

          {/* RIGHT VISUAL PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="relative"
          >

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.05] bg-white/[0.03] backdrop-blur-xl min-h-[420px] md:min-h-[520px]">

              {/* Group Image Area */}
              <div className="absolute inset-0 flex items-center justify-center bg-black">

                {/* Future Group Image */}
                <p className="relative z-10 text-center text-sm uppercase tracking-[0.3em] text-textMuted px-8">
                  [ Add Jazzmatazz Group
                  <br />
                  Performance / Portrait Image Here ]
                </p>

                {/* Atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-violetGlow/10" />

              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-10">

                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

                  <div>

                    <p className="uppercase tracking-[0.3em] text-[10px] text-textMuted mb-4">
                      Core Collective
                    </p>

                    <h3 className="font-heading text-3xl md:text-5xl leading-[0.95] font-bold">
                      Jazzmatazz
                    </h3>

                  </div>

                  <div className="space-y-2 text-sm text-textSecondary">

                    <p>• Saxophone & improvisation</p>

                    <p>• Flute, keys & atmosphere</p>

                    <p>• Percussion & live rhythm</p>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
};

export default MembersHero;