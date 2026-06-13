import { motion } from "framer-motion";

import {
  cinematicReveal,
  slowFloat,
} from "../../utils/animations";

import Container from "../../components/common/Container";

const BookingHero = () => {
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
          BOOKING
        </h2>

      </div>

      {/* Floating Symbol */}
      <motion.div
        {...slowFloat}
        className="absolute right-[6%] top-[12%] text-[80px] md:text-[140px] text-white/[0.03] rotate-12 pointer-events-none"
      >
        ♫
      </motion.div>

      {/* Blend Top */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />

      {/* Blend Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

      <Container className="relative z-20">

        <div className="grid lg:grid-cols-[1fr_420px] gap-12 md:gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            variants={cinematicReveal}
            initial="hidden"
            animate="visible"
            className="space-y-6 md:space-y-8"
          >

            {/* Eyebrow */}
            <p className="uppercase tracking-[0.35em] text-[10px] md:text-sm text-textSecondary">
              Booking & Collaborations
            </p>

            {/* Title */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl xl:text-[7rem] leading-[0.9] font-bold">
              LET’S
              <br />
              CREATE
              <br />
              AN
              <br />
              EXPERIENCE
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-base md:text-lg text-textSecondary leading-relaxed">
              Jazzmatazz performances are designed for immersive live events,
              curated gatherings, festivals, lounge experiences, and cinematic
              nights shaped through atmosphere, rhythm, and emotional energy.
            </p>

            {/* Accent Line */}
            <div className="pt-2">
              <div className="w-28 h-px bg-gradient-to-r from-primary via-white/30 to-transparent" />
            </div>

          </motion.div>

          {/* RIGHT INFO PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="relative"
          >

            <div className="rounded-[2rem] border border-white/[0.05] bg-white/[0.03] backdrop-blur-xl p-6 md:p-8 overflow-hidden">

              {/* Atmosphere */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-violetGlow/10" />

              {/* Content */}
              <div className="relative z-10 space-y-6">

                <div>

                  <p className="uppercase tracking-[0.3em] text-[10px] text-textMuted mb-4">
                    Direct Contact
                  </p>

                  <h3 className="font-heading text-3xl md:text-4xl leading-[1] font-bold">
                    +91 99XX
                    <br />
                    XXXX 69
                  </h3>

                </div>

                <div className="space-y-3 text-sm md:text-base text-textSecondary leading-relaxed">

                  <p>
                    • Festival performances
                  </p>

                  <p>
                    • Curated live experiences
                  </p>

                  <p>
                    • Lounge & private events
                  </p>

                  <p>
                    • Collaborative performances
                  </p>

                </div>

                {/* WhatsApp Button */}
                <div className="pt-4">

                  <button className="w-full px-6 py-4 rounded-2xl bg-primary hover:bg-violetGlow transition duration-300 shadow-glow text-sm uppercase tracking-[0.2em]">
                    Message On WhatsApp
                  </button>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
};

export default BookingHero;