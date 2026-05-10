import { motion } from "framer-motion";

import {
  fadeScale,
  staggerContainer,
} from "../../utils/animations";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import GlassCard from "../ui/GlassCard";

import galleryData from "../../data/galleryData";

import gallery1 from "../../assets/images/gallery/gallery-1.png";
import gallery2 from "../../assets/images/gallery/gallery-2.png";
import gallery3 from "../../assets/images/gallery/gallery-3.png";

const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
];

const GalleryPreview = () => {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
      {/* Ambient Glow */}
      <div className="absolute right-[-100px] top-20 w-[450px] h-[450px] bg-primary/10 blur-[180px] rounded-full" />

      <Container className="space-y-16 md:space-y-20">

        {/* Heading */}
        <SectionTitle
          eyebrow="Visual Atmosphere"
          title="Moments From The Stage"
          description="An immersive visual journey through live performances, cinematic lighting, audience energy, and unforgettable jazz fusion nights."
        />

        {/* Gallery Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 auto-rows-[220px] md:auto-rows-[260px]"
        >

          {galleryData.slice(0, 3).map((item, index) => {

            const sizeClasses = {
              large: "lg:col-span-7 lg:row-span-2",
              medium: "lg:col-span-5 lg:row-span-1",
              small: "lg:col-span-5 lg:row-span-1",
            };

            return (
              <motion.div
                key={item.id}
                variants={fadeScale}
                className={sizeClasses[item.size]}
              >

                <GlassCard className="relative h-full overflow-hidden group cursor-pointer">

                  {/* Gallery Image */}
                  <img
                    src={galleryImages[index]}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-contain bg-black transition duration-700 group-hover:scale-105"
                  />

                  {/* Dark Cinematic Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition duration-500" />

                  {/* Bottom Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-black/10 to-transparent" />

                  {/* Purple Atmosphere */}
                  <div className="absolute inset-0 bg-primary/10 mix-blend-screen opacity-60" />

                  {/* Content */}
                  <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 z-10">

                    <p className="uppercase tracking-[0.3em] text-xs text-textSecondary mb-3">
                      Live Gallery
                    </p>

                    <h3 className="font-heading text-2xl md:text-4xl font-bold leading-tight">
                      {item.title}
                    </h3>
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
                  </div>

                </GlassCard>

              </motion.div>
            );
          })}

        </motion.div>

      </Container>
    </section>
  );
};

export default GalleryPreview;