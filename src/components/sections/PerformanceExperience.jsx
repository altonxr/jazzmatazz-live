import { motion } from "framer-motion";

import Container from "../common/Container";
import GlassCard from "../ui/GlassCard";

const PerformanceExperience = () => {
  return (
   <section className="relative min-h-screen flex items-center overflow-hidden py-44 border-y border-white/[0.03]">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0B1120] to-background" />

      {/* Glow Layers */}
      <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-primary/10 blur-[180px] rounded-full" />

      <div className="absolute bottom-[0%] right-[5%] w-[400px] h-[400px] bg-violetGlow/10 blur-[180px] rounded-full" />

      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:100px_100px]" />

      <Container className="relative z-10">

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-24 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-10"
          >

            <div className="space-y-5">

              <p className="uppercase tracking-[0.4em] text-sm text-textSecondary">
                The Experience
              </p>

              <h2 className="font-heading text-5xl md:text-7xl xl:text-[8rem] leading-none font-bold">
                FEEL
                <br />
                THE
                <br />
                NIGHT
              </h2>

            </div>

            <p className="max-w-xl text-lg md:text-xl text-textSecondary leading-relaxed">
              Jazzmatazz performances are designed as immersive experiences —
              blending cinematic lighting, live improvisation, emotional energy,
              and modern jazz fusion atmosphere into unforgettable nights.
            </p>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-[700px]"
          >

            {/* Main Large Card */}
            <GlassCard className="absolute top-0 right-0 w-[85%] h-[420px] overflow-hidden">

              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-violetGlow/10" />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute bottom-10 left-10 z-10 max-w-sm">

                <p className="uppercase tracking-[0.3em] text-xs text-textSecondary mb-4">
                  Live Atmosphere
                </p>

                <h3 className="font-heading text-5xl font-bold leading-tight">
                  Cinematic
                  <br />
                  Stage Presence
                </h3>

              </div>

            </GlassCard>

            {/* Floating Small Card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-0 left-0"
            >

              <GlassCard className="w-[300px] p-8">

                <p className="uppercase tracking-[0.3em] text-xs text-textSecondary mb-4">
                  Fusion Energy
                </p>

                <h4 className="font-heading text-4xl font-bold mb-5">
                  Jazz.
                  <br />
                  Motion.
                  <br />
                  Atmosphere.
                </h4>

                <p className="text-textSecondary leading-relaxed">
                  Every performance blends timeless jazz roots with modern live
                  production and immersive audience energy.
                </p>

              </GlassCard>

            </motion.div>

            {/* Floating Accent */}
            <motion.div
              animate={{ rotate: [0, 3, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-[45%] left-[20%] w-[140px] h-[140px] rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center"
            >

              <div className="w-16 h-16 rounded-full border border-primary/40" />

            </motion.div>

          </motion.div>

        </div>

      </Container>
    </section>
  );
};

export default PerformanceExperience;