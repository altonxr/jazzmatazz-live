import { motion } from "framer-motion";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import GlassCard from "../ui/GlassCard";

import membersData from "../../data/membersData";

const MembersPreview = () => {
  return (
    <section className="relative py-36 overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute left-[-120px] bottom-0 w-[400px] h-[400px] bg-violetGlow/10 blur-[180px] rounded-full" />

      <Container className="space-y-20">

        {/* Heading */}
        <SectionTitle
          eyebrow="The Artists"
          title="The People Behind The Experience"
          description="A collective of musicians, performers, and creative artists blending classic jazz roots with modern fusion energy."
        />

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {membersData.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
            >

              <GlassCard className="relative overflow-hidden p-8 min-h-[420px] group transition duration-500 hover:-translate-y-2">

                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-violetGlow/10 opacity-70 group-hover:opacity-100 transition duration-700" />

                {/* Glow Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary/10 transition duration-700" />

                {/* Placeholder Visual */}
                <div className="relative z-10 w-full h-[220px] rounded-[1.5rem] bg-white/5 border border-white/10 mb-8 overflow-hidden">

                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-violetGlow/10" />

                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4">

                  <p className="uppercase tracking-[0.3em] text-xs text-textSecondary">
                    {member.role}
                  </p>

                  <h3 className="font-heading text-3xl font-bold leading-tight">
                    {member.name}
                  </h3>

                  <p className="text-textSecondary leading-relaxed">
                    Bringing immersive live energy and modern jazz fusion
                    performance to every stage experience.
                  </p>

                </div>

              </GlassCard>

            </motion.div>
          ))}

        </div>

      </Container>
    </section>
  );
};

export default MembersPreview;