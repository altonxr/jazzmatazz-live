import { motion } from "framer-motion";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import GlassCard from "../ui/GlassCard";

const AboutPreview = () => {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute left-[-150px] top-40 w-[400px] h-[400px] bg-violetGlow/10 blur-[180px] rounded-full" />

      <Container>

        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">

          {/* LEFT VISUAL SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* Main Card */}
            <GlassCard className="relative h-[420px] sm:h-[500px] md:h-[620px] overflow-hidden">
{/* Musical Atmosphere */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">

  <div className="absolute -top-10 -right-6 text-[180px] md:text-[260px] font-light text-white/[0.03] blur-[1px] rotate-12">
    ♫
  </div>

  <div className="absolute bottom-10 left-[-20px] text-[120px] md:text-[180px] text-primary/10 rotate-[-12deg]">
    ♬
  </div>

  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[220px] md:text-[320px] text-white/[0.02]">
    ♪
  </div>

</div>
              {/* Background Visual */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-violetGlow/10" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Floating Label */}
              <div className="absolute top-6 md:top-8 left-6 md:left-8 z-10 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl text-xs md:text-sm tracking-wide">
                LIVE FUSION EXPERIENCE
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-8 md:bottom-10 left-6 md:left-10 z-10 max-w-sm">

                <p className="uppercase tracking-[0.3em] text-xs text-textSecondary mb-4 md:mb-5">
                  Performance Identity
                </p>

                <h3 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-5 md:mb-6">
                  Music Beyond
                  <br />
                  Performance
                </h3>

                <p className="text-textSecondary leading-relaxed text-sm md:text-base">
                  Jazzmatazz blends classic jazz traditions with immersive
                  modern fusion, cinematic stage presence, and emotionally
                  charged live experiences.
                </p>

              </div>

            </GlassCard>

            {/* Floating Card Desktop / Stacked Mobile */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative md:absolute mt-6 md:mt-0 md:-bottom-10 md:-right-10"
            >

              <GlassCard className="p-6 md:p-8 w-full md:w-[240px]">

                <p className="uppercase tracking-[0.3em] text-xs text-textSecondary mb-4">
                  Established
                </p>

                <h4 className="font-heading text-3xl md:text-4xl font-bold">
                  National
                </h4>

                <p className="text-textSecondary mt-3 text-sm md:text-base">
                  Live performance presence across premium venues and festivals.
                </p>

              </GlassCard>

            </motion.div>

          </motion.div>

          {/* RIGHT CONTENT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8 md:space-y-10"
          >

            <SectionTitle
              eyebrow="About Jazzmatazz"
              title="A Cinematic Jazz Fusion Experience"
              description="More than a performance, Jazzmatazz creates immersive musical atmospheres blending timeless jazz roots with modern fusion energy."
            />

            <div className="space-y-6 md:space-y-8 text-textSecondary text-base md:text-lg leading-relaxed">

              <p>
                Every performance is crafted as a layered sensory experience —
                combining live improvisation, stage presence, ambient lighting,
                and contemporary jazz fusion energy.
              </p>

              <p>
                From intimate venues to large-scale festivals, Jazzmatazz
                delivers performances designed to feel immersive, emotional,
                and unforgettable.
              </p>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 md:pt-8">

              <GlassCard className="p-6">

                <h4 className="font-heading text-4xl md:text-5xl font-bold mb-3">
                  50+
                </h4>

                <p className="text-textSecondary">
                  Live Performances
                </p>

              </GlassCard>

              <GlassCard className="p-6">

                <h4 className="font-heading text-4xl md:text-5xl font-bold mb-3">
                  10+
                </h4>

                <p className="text-textSecondary">
                  Cities Performed
                </p>

              </GlassCard>

            </div>

          </motion.div>

        </div>

      </Container>
    </section>
  );
};

export default AboutPreview;