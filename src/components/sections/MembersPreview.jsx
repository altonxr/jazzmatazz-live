import { motion } from "framer-motion";

import {
  fadeScale,
  staggerContainer,
} from "../../utils/animations";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import GlassCard from "../ui/GlassCard";
import membersData from "../../data/membersData";

import memberSax from "../../assets/images/members/members-sax.png";
import memberFlute from "../../assets/images/members/members-flute.png";
import memberDrums from "../../assets/images/members/members-drums.png";

const memberImages = {
  1: memberSax,
  2: memberFlute,
  3: memberDrums,
  4: memberDrums, // Default for additional members
};

const memberDescriptions = {
  "Lead Saxophonist": "Blending expressive saxophone textures with immersive jazz fusion energy and cinematic live improvisation.",
  "Fusion Pianist": "Creating atmospheric melodic layers and emotional performance moments inspired by contemporary jazz expression.",
  "Bass & Rhythm": "Grounding the ensemble with rich bass lines and rhythmic complexity, driving the fusion experience forward.",
  "Live Percussion": "Driving the rhythm section with dynamic percussion, live intensity, and modern fusion-inspired stage energy.",
};

const MembersPreview = () => {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
      {/* Ambient Glow */}
      <div className="absolute left-[-120px] bottom-0 w-[400px] h-[400px] bg-violetGlow/10 blur-[180px] rounded-full" />

      <Container className="space-y-16 md:space-y-20">

        {/* Heading */}
        <SectionTitle
          eyebrow="The Artists"
          title="The People Behind The Experience"
          description="A collective of musicians, performers, and creative artists blending classic jazz roots with modern fusion energy."
        />

        {/* Members Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
        >

          {membersData.map((member) => (
            <motion.div
              key={member.id}
              variants={fadeScale}
            >

              <GlassCard className="relative overflow-hidden min-h-[500px] group transition duration-500 hover:-translate-y-2">

                {/* Background Atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-violetGlow/10 opacity-70 group-hover:opacity-100 transition duration-700" />

                {/* Member Image */}
                <div className="relative z-10 w-full h-[320px] overflow-hidden bg-black flex items-center justify-center">

                  <img
                    src={memberImages[member.id]}
                    alt={member.name}
                    className="w-full h-full object-contain grayscale brightness-110 transition duration-700 group-hover:scale-105"
                  />

                  {/* Cinematic Overlay */}
                  <div className="absolute inset-0 bg-black/15" />

                  {/* Bottom Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                  {/* Purple Tint */}
                  <div className="absolute inset-0 bg-primary/10 mix-blend-screen opacity-40" />

                </div>

                {/* Content */}
                <div className="relative z-10 px-6 pt-6 pb-8 space-y-4">

                  <p className="uppercase tracking-[0.35em] text-xs text-textSecondary">
                    {member.role}
                  </p>

                  <h3 className="font-heading text-3xl font-bold leading-tight">
                    {member.name}
                  </h3>

                  <p className="text-textSecondary leading-relaxed text-sm md:text-base">
                    {memberDescriptions[member.role] || "A talented musician bringing their unique style to Jazzmatazz performances."}
                  </p>
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
                </div>

              </GlassCard>

            </motion.div>
          ))}

        </motion.div>

      </Container>
    </section>
  );
};

export default MembersPreview;