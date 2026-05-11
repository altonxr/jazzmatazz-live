import { motion } from "framer-motion";

import {
  fadeScale,
  staggerContainer,
} from "../../utils/animations";

import Container from "../../components/common/Container";

const sessions = [
  {
    id: 1,
    title: "[ Live Session Title ]",
    type: "Video Session",
    description:
      "[ Add featured live performance session description here ]",
    media: null,
  },
  {
    id: 2,
    title: "[ Audio Experience ]",
    type: "Audio Session",
    description:
      "[ Add immersive audio performance description here ]",
    media: null,
  },
  {
    id: 3,
    title: "[ Performance Film ]",
    type: "Cinematic Recording",
    description:
      "[ Add cinematic live recording description here ]",
    media: null,
  },
];

const FeaturedSessions = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-20">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0B1120] to-background" />

      {/* Ambient Glow */}
      <div className="absolute left-[5%] top-[10%] w-[320px] h-[320px] rounded-full bg-primary/10 blur-[160px]" />

      {/* Blend */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />

      <Container className="relative z-20">

        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">

          <p className="uppercase tracking-[0.35em] text-[10px] md:text-sm text-textSecondary mb-4">
            Featured Sessions
          </p>

          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl leading-[0.92] font-bold mb-6">
            LIVE
            <br />
            RECORDINGS
            <br />
            & SESSIONS
          </h2>

          <p className="text-base md:text-lg text-textSecondary leading-relaxed">
            Explore curated live recordings, cinematic performance films,
            immersive audio experiences, and evolving Jazzmatazz sessions.
          </p>

        </div>

        {/* Sessions Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
        >

          {sessions.map((session) => (
            <motion.div
              key={session.id}
              variants={fadeScale}
              className="group relative overflow-hidden rounded-[2rem] border border-white/[0.05] bg-white/[0.03] backdrop-blur-xl"
            >

              {/* Media Area */}
              <div className="relative h-[260px] overflow-hidden bg-black flex items-center justify-center">

                {/* Future Media */}
                {session.media ? (
                  <video
                    src={session.media}
                    controls
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="relative z-10 text-center px-8 space-y-4">

                    {/* Play Icon */}
                    <div className="w-16 h-16 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center mx-auto">

                      <div className="ml-1 text-white/70 text-xl">
                        ▶
                      </div>

                    </div>

                    <p className="text-sm uppercase tracking-[0.3em] text-textMuted">
                      [ Add Video / Audio Session Here ]
                    </p>

                  </div>
                )}

                {/* Atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-violetGlow/10" />

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-primary/10" />

              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

              {/* Content */}
              <div className="relative z-10 p-6 md:p-7 space-y-5">

                <div>

                  <p className="uppercase tracking-[0.3em] text-[10px] text-textMuted mb-3">
                    {session.type}
                  </p>

                  <h3 className="font-heading text-3xl md:text-4xl leading-tight font-bold">
                    {session.title}
                  </h3>

                </div>

                <p className="text-sm md:text-base text-textSecondary leading-relaxed">
                  {session.description}
                </p>

                {/* Bottom Accent */}
                <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between text-xs uppercase tracking-[0.25em] text-textMuted">

                  <span>Session</span>

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

export default FeaturedSessions;