import { motion } from "framer-motion";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import GlassCard from "../ui/GlassCard";

import galleryData from "../../data/galleryData";

const GalleryPreview = () => {
  return (
    <section className="relative py-36 overflow-hidden border-y border-white/[0.03]">

      {/* Ambient Glow */}
      <div className="absolute right-[-100px] top-20 w-[450px] h-[450px] bg-primary/10 blur-[180px] rounded-full" />

      <Container className="space-y-20">

        {/* Heading */}
        <SectionTitle
          eyebrow="Visual Atmosphere"
          title="Moments From The Stage"
          description="An immersive visual journey through live performances, cinematic lighting, audience energy, and unforgettable jazz fusion nights."
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 auto-rows-[220px]">

          {galleryData.map((item, index) => {

            const sizeClasses = {
              large: "lg:col-span-7 lg:row-span-2",
              medium: "lg:col-span-5 lg:row-span-1",
              small: "lg:col-span-5 lg:row-span-1",
            };

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                className={sizeClasses[item.size]}
              >

                <GlassCard className="relative h-full overflow-hidden group cursor-pointer">

                  {/* Background Visual */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-violetGlow/10 transition duration-700 group-hover:scale-105" />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition duration-500" />

                  {/* Glow Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary/10 transition duration-700" />

                  {/* Content */}
                  <div className="absolute bottom-8 left-8 z-10">

                    <p className="uppercase tracking-[0.3em] text-xs text-textSecondary mb-3">
                      Live Gallery
                    </p>

                    <h3 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
                      {item.title}
                    </h3>

                  </div>

                </GlassCard>

              </motion.div>
            );
          })}

        </div>

      </Container>
    </section>
  );
};

export default GalleryPreview;