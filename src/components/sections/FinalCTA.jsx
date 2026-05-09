import { motion } from "framer-motion";

import Container from "../common/Container";
import PrimaryButton from "../ui/PrimaryButton";
import GlassCard from "../ui/GlassCard";

const FinalCTA = () => {
  return (
    <section className="relative py-44 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0B1120] to-background" />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 blur-[220px] rounded-full" />

      <Container className="relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <GlassCard className="relative overflow-hidden p-12 md:p-20 text-center">

            {/* Gradient Layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-violetGlow/10" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto space-y-10">

              <div className="space-y-6">

                <p className="uppercase tracking-[0.4em] text-sm text-textSecondary">
                  Book The Experience
                </p>

                <h2 className="font-heading text-5xl md:text-7xl xl:text-[6rem] leading-none font-bold">
                  LET THE
                  <br />
                  MUSIC TAKE
                  <br />
                  OVER
                </h2>

              </div>

              <p className="max-w-2xl mx-auto text-lg md:text-xl text-textSecondary leading-relaxed">
                Bring immersive jazz fusion energy, cinematic atmosphere, and
                unforgettable live performance experiences to your next event.
              </p>

              <div className="flex flex-wrap justify-center gap-6">

                <PrimaryButton>
                  Book Jazzmatazz
                </PrimaryButton>

                <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition duration-300">
                  Explore Media
                </button>

              </div>

            </div>

          </GlassCard>

        </motion.div>

      </Container>
    </section>
  );
};

export default FinalCTA;