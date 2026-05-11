import { motion } from "framer-motion";

import {
  fadeScale,
  staggerContainer,
} from "../../utils/animations";

import Container from "../../components/common/Container";

const visuals = [
  {
    id: 1,
    title: "[ Live Performance Visual ]",
    description:
      "[ Add cinematic stage performance image description here ]",
    size: "large",
    image: null,
  },
  {
    id: 2,
    title: "[ Audience Atmosphere ]",
    description:
      "[ Add crowd energy / immersive atmosphere image description here ]",
    size: "medium",
    image: null,
  },
  {
    id: 3,
    title: "[ Backstage Moments ]",
    description:
      "[ Add rehearsal / backstage visual description here ]",
    size: "small",
    image: null,
  },
  {
    id: 4,
    title: "[ Lighting Experience ]",
    description:
      "[ Add cinematic lighting visual description here ]",
    size: "medium",
    image: null,
  },
];

const FeaturedVisuals = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-20">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0B1120] to-background" />

      {/* Glow */}
      <div className="absolute right-[5%] top-[10%] w-[320px] h-[320px] rounded-full bg-primary/10 blur-[160px]" />

      {/* Blend */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />

      <Container className="relative z-20">

        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">

          <p className="uppercase tracking-[0.35em] text-[10px] md:text-sm text-textSecondary mb-4">
            Featured Visuals
          </p>

          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl leading-[0.92] font-bold mb-6">
            CINEMATIC
            <br />
            PERFORMANCE
            <br />
            MOMENTS
          </h2>

          <p className="text-base md:text-lg text-textSecondary leading-relaxed">
            A curated collection of immersive visuals capturing atmosphere,
            lighting, audience energy, backstage moments, and live performance emotion.
          </p>

        </div>

        {/* Visual Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-6 auto-rows-[220px] md:auto-rows-[260px]"
        >

          {visuals.map((item) => {

            const sizeClasses = {
              large: "lg:col-span-7 lg:row-span-2",
              medium: "lg:col-span-5 lg:row-span-1",
              small: "lg:col-span-5 lg:row-span-1",
            };

            return (
              <motion.div
                key={item.id}
                variants={fadeScale}
                className={`${sizeClasses[item.size]} group relative overflow-hidden rounded-[2rem] border border-white/[0.05] bg-white/[0.03] backdrop-blur-xl`}
              >

                {/* Visual Area */}
                <div className="relative w-full h-full overflow-hidden bg-black flex items-center justify-center">

                  {/* Future Image */}
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain transition duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <p className="relative z-10 text-center text-sm uppercase tracking-[0.3em] text-textMuted px-8">
                      [ Add Gallery Visual / Performance Image Here ]
                    </p>
                  )}

                  {/* Atmosphere */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-violetGlow/10" />

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-primary/10" />

                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10 space-y-4">

                  <div>

                    <p className="uppercase tracking-[0.3em] text-[10px] text-textMuted mb-3">
                      Visual Archive
                    </p>

                    <h3 className="font-heading text-2xl md:text-4xl leading-tight font-bold mb-3">
                      {item.title}
                    </h3>

                  </div>

                  <p className="max-w-md text-sm md:text-base text-textSecondary leading-relaxed">
                    {item.description}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </motion.div>

      </Container>

    </section>
  );
};

export default FeaturedVisuals;