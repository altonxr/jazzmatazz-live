import { motion } from "framer-motion";

import {
  fadeScale,
  staggerContainer,
} from "../../utils/animations";

import Container from "../../components/common/Container";

const shows = [
  {
    id: 1,
    title: "[ Featured Show Title ]",
    venue: "[ Venue Name ]",
    date: "[ Show Date ]",
    atmosphere: "[ Add immersive show atmosphere description here ]",
  },
  {
    id: 2,
    title: "[ Featured Show Title ]",
    venue: "[ Venue Name ]",
    date: "[ Show Date ]",
    atmosphere: "[ Add immersive show atmosphere description here ]",
  },
  {
    id: 3,
    title: "[ Featured Show Title ]",
    venue: "[ Venue Name ]",
    date: "[ Show Date ]",
    atmosphere: "[ Add immersive show atmosphere description here ]",
  },
];

const FeaturedShows = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-20">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0B1120] to-background" />

      {/* Ambient Glow */}
      <div className="absolute right-[5%] top-[10%] w-[320px] h-[320px] rounded-full bg-primary/10 blur-[160px]" />

      {/* Blend */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />

      <Container className="relative z-20">

        {/* Header */}
        <div className="max-w-3xl mb-14 md:mb-20">

          <p className="uppercase tracking-[0.35em] text-[10px] md:text-sm text-textSecondary mb-4">
            Featured Performances
          </p>

          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl leading-[0.92] font-bold mb-6">
            UPCOMING
            <br />
            LIVE
            <br />
            SESSIONS
          </h2>

          <p className="text-base md:text-lg text-textSecondary leading-relaxed">
            A curated collection of upcoming immersive performances,
            cinematic stage experiences, and live fusion nights.
          </p>

        </div>

        {/* Shows Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
        >

          {shows.map((show) => (
            <motion.div
              key={show.id}
              variants={fadeScale}
              className="group relative overflow-hidden rounded-[2rem] border border-white/[0.05] bg-white/[0.03] backdrop-blur-xl"
            >

              {/* Placeholder Image Area */}
              <div className="relative h-[260px] overflow-hidden bg-gradient-to-br from-[#111827] to-black flex items-center justify-center">

                {/* Atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-violetGlow/10" />

                {/* Placeholder Text */}
                <p className="relative z-10 text-sm uppercase tracking-[0.3em] text-textMuted text-center px-6">
                  [ Add Show Poster / Performance Image Here ]
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-primary/10" />

              </div>

              {/* Content */}
              <div className="p-6 md:p-7 space-y-6">

                <div>

                  <p className="uppercase tracking-[0.3em] text-[10px] text-textMuted mb-4">
                    {show.date}
                  </p>

                  <h3 className="font-heading text-3xl leading-[1] font-bold mb-4">
                    {show.title}
                  </h3>

                  <p className="text-sm text-textSecondary uppercase tracking-[0.2em]">
                    {show.venue}
                  </p>

                </div>

                <p className="text-sm md:text-base text-textSecondary leading-relaxed">
                  {show.atmosphere}
                </p>

                {/* Bottom Accent */}
                <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between text-xs uppercase tracking-[0.25em] text-textMuted">

                  <span>Live</span>

                  <span>Jazzmatazz</span>

                </div>

              </div>

            </motion.div>
          ))}

        </motion.div>

      </Container>

    </section>
  );
};

export default FeaturedShows;