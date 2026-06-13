import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import GlassCard from "../ui/GlassCard";

import showsData from "../../data/showsData";

const FeaturedShows = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-primary/10 blur-[180px] rounded-full" />

      <Container className="space-y-16 md:space-y-20">

        {/* Section Heading */}
        <SectionTitle
          eyebrow="Upcoming Experiences"
          title="Featured Live Performances"
          description="A curated selection of immersive jazz fusion experiences, live events, and cinematic stage performances across the country."
        />

        {/* Featured Layout */}
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-6 md:gap-8 lg:gap-10">

          {/* Large Featured Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <GlassCard className="relative min-h-[420px] md:min-h-[520px] overflow-hidden p-6 md:p-10 flex flex-col justify-between gap-10">

              {/* Background Layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-violetGlow/10" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20" />

              <div className="relative z-10 flex flex-col sm:flex-row gap-6 sm:justify-between sm:items-start">

                <div>

                  <p className="uppercase tracking-[0.3em] text-xs text-textSecondary mb-4">
                    Featured Performance
                  </p>

                  <h3 className="font-heading text-3xl md:text-5xl font-bold leading-tight">
                    The Blue
                    <br />
                    Note Arena
                  </h3>

                </div>

                <div className="w-fit px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl text-sm">
                  Mumbai
                </div>

              </div>

              <div className="relative z-10 flex flex-col md:flex-row gap-8 md:items-end md:justify-between">

                <div>

                  <p className="text-textSecondary mb-2">
                    May 24, 2026
                  </p>

                  <p className="max-w-md text-sm md:text-base text-textSecondary leading-relaxed">
                    A cinematic live fusion performance blending classic jazz,
                    immersive lighting, and modern stage energy.
                  </p>

                </div>

                <Link to="/shows" className="w-fit block">
                  <button className="px-6 py-3 rounded-xl bg-primary hover:bg-violetGlow transition duration-300 shadow-glow relative group overflow-hidden">
                    <span className="relative z-10">Explore Event</span>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </button>
                </Link>

              </div>

            </GlassCard>

          </motion.div>

          {/* Secondary Cards */}
          <div className="flex flex-col gap-6 md:gap-8">

            {showsData.slice(1).map((show, index) => (
              <motion.div
                key={show.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
              >

                <GlassCard className="p-6 md:p-8 hover:translate-y-[-4px] transition duration-500">

                  <div className="space-y-6">

                    <div className="flex items-center justify-between gap-4">

                      <p className="uppercase tracking-[0.3em] text-xs text-textSecondary">
                        {show.type}
                      </p>

                      <div className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs whitespace-nowrap">
                        {show.city}
                      </div>

                    </div>

                    <div>

                      <h4 className="font-heading text-2xl md:text-3xl font-bold mb-3">
                        {show.venue}
                      </h4>

                      <p className="text-sm md:text-base text-textSecondary">
                        {show.date}
                      </p>

                    </div>

                  </div>

                </GlassCard>

              </motion.div>
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
};

export default FeaturedShows;