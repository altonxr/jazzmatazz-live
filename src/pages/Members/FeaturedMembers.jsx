import { motion } from "framer-motion";

import {
  fadeScale,
  staggerContainer,
} from "../../utils/animations";

import Container from "../../components/common/Container";

const members = [
  {
    id: 1,
    name: "Swizel",
    role: "Saxophone",
    description:
      "[ Add member description, musical identity, and performance style here ]",
    image: null,
  },
  {
    id: 2,
    name: "Clifton",
    role: "Flute & Keys",
    description:
      "[ Add member description, atmospheric style, and melodic influence here ]",
    image: null,
  },
  {
    id: 3,
    name: "Sreenath",
    role: "Drums & Percussion",
    description:
      "[ Add member description, rhythm energy, and live performance style here ]",
    image: null,
  },
];

const FeaturedMembers = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-20">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0B1120] to-background" />

      {/* Ambient Glow */}
      <div className="absolute left-[5%] top-[10%] w-[300px] h-[300px] rounded-full bg-primary/10 blur-[160px]" />

      {/* Blend */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />

      <Container className="relative z-20">

        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">

          <p className="uppercase tracking-[0.35em] text-[10px] md:text-sm text-textSecondary mb-4">
            Featured Members
          </p>

          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl leading-[0.92] font-bold mb-6">
            THE
            <br />
            INDIVIDUALS
            <br />
            BEHIND
            <br />
            THE ATMOSPHERE
          </h2>

          <p className="text-base md:text-lg text-textSecondary leading-relaxed">
            Meet the musicians shaping the immersive sound, emotional energy,
            and cinematic performance identity of Jazzmatazz.
          </p>

        </div>

        {/* Members Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
        >

          {members.map((member) => (
            <motion.div
              key={member.id}
              variants={fadeScale}
              className="group relative overflow-hidden rounded-[2rem] border border-white/[0.05] bg-white/[0.03] backdrop-blur-xl"
            >

              {/* Image Area */}
              <div className="relative h-[320px] overflow-hidden bg-black flex items-center justify-center">

                {/* Future Image */}
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain transition duration-700 group-hover:scale-105"
                  />
                ) : (
                  <p className="relative z-10 text-center text-sm uppercase tracking-[0.3em] text-textMuted px-8">
                    [ Add Member Portrait Here ]
                  </p>
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
                    {member.role}
                  </p>

                  <h3 className="font-heading text-3xl md:text-4xl leading-tight font-bold">
                    {member.name}
                  </h3>

                </div>

                <p className="text-sm md:text-base text-textSecondary leading-relaxed">
                  {member.description}
                </p>

                {/* Bottom Accent */}
                <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between text-xs uppercase tracking-[0.25em] text-textMuted">

                  <span>Artist</span>

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

export default FeaturedMembers;