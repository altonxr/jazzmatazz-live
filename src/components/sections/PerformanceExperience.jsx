import { motion } from "framer-motion";

import {
  fadeLeft,
  fadeScale,
  slowFloat,
} from "../../utils/animations";

import Container from "../common/Container";

const PerformanceExperience = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-28 md:py-44">

      {/* Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0B1120] to-background" />

      {/* Glow Layers */}
      <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-primary/10 blur-[180px] rounded-full" />

      <div className="absolute bottom-[0%] right-[5%] w-[400px] h-[400px] bg-violetGlow/10 blur-[180px] rounded-full" />

      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:100px_100px]" />

      <Container className="relative z-10">

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 md:gap-24 items-center">

          {/* LEFT SIDE */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
          >

            <div className="space-y-5">

              <p className="uppercase tracking-[0.4em] text-sm text-textSecondary">
                The Experience
              </p>

              <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl xl:text-[8rem] leading-[0.9] font-bold">
                FEEL
                <br />
                THE
                <br />
                NIGHT
              </h2>

            </div>

            <p className="max-w-xl text-base md:text-xl text-textSecondary leading-relaxed">
              Jazzmatazz performances are designed as immersive experiences —
              blending cinematic lighting, live improvisation, emotional energy,
              and modern jazz fusion atmosphere into unforgettable nights.
            </p>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={fadeScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative h-[520px] md:h-[620px]"
          >

            {/* Massive Cinematic Glass Structure */}
            <div className="absolute inset-y-[6%] left-[4%] right-[4%] rounded-[3rem] overflow-hidden border border-white/[0.05] bg-gradient-to-br from-white/[0.02] to-transparent backdrop-blur-sm">

              {/* Atmosphere */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-violetGlow/10" />

              <div className="absolute inset-0 bg-black/20" />

              {/* Vertical Stage Lines */}
              <div className="absolute inset-0 opacity-[0.05]">
                <div className="absolute left-[18%] top-0 w-px h-full bg-white" />
                <div className="absolute left-[50%] top-0 w-px h-full bg-white" />
                <div className="absolute left-[82%] top-0 w-px h-full bg-white" />
              </div>

              {/* Horizontal Divider */}
              <div className="absolute top-[18%] left-[10%] w-[68%] h-px bg-gradient-to-r from-white/10 to-transparent" />

              {/* Top Metadata */}
              <div className="absolute top-[22%] left-[10%] z-10">

                <p className="uppercase tracking-[0.35em] text-[10px] text-textMuted mb-3">
                  Live Session
                </p>

                <p className="text-sm text-white/40">
                  Goa · India
                </p>

              </div>

              {/* Massive Background Typography */}
              <h2 className="absolute bottom-[2%] left-[6%] text-[9rem] md:text-[13rem] font-bold leading-none text-white/[0.02] select-none">
                LIVE
              </h2>

              {/* Ambient Musical Notes */}
              <div className="absolute top-[8%] right-[8%] text-[220px] text-white/[0.02] leading-none rotate-12">
                ♫
              </div>

              <div className="absolute bottom-[18%] right-[18%] text-[120px] text-primary/[0.05] leading-none -rotate-12">
                ♪
              </div>

              {/* Floating Light */}
              <motion.div
                {...slowFloat}
                className="absolute top-[34%] right-[14%] w-[140px] h-[140px] rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl"
              >
                <div className="absolute inset-[28px] rounded-full border border-primary/40" />
              </motion.div>

              {/* Bottom Glow */}
              <div className="absolute bottom-[-80px] right-[5%] w-[280px] h-[280px] rounded-full bg-primary/10 blur-[120px]" />

              {/* Main Content */}
              <div className="absolute bottom-[12%] left-[10%] z-10 max-w-md">

                <p className="uppercase tracking-[0.3em] text-xs text-textSecondary mb-4">
                  Live Atmosphere
                </p>

                <h3 className="font-heading text-4xl md:text-6xl font-bold leading-[0.95]">
                  Cinematic
                  <br />
                  Stage Presence
                </h3>

              </div>

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
};

export default PerformanceExperience;