import { motion } from "framer-motion";

import {
  fadeLeft,
  fadeScale,
  staggerContainer,
} from "../../utils/animations";

import Container from "../../components/common/Container";

const bookingDetails = [
  {
    title: "Festival Performances",
    description:
      "High-energy performances at music festivals, cultural events, and large-scale venues. We bring atmospheric jazz fusion to massive audiences with professional stage setup and immersive sound design.",
  },
  {
    title: "Private Experiences",
    description:
      "Curated intimate performances for private events, lounge experiences, and exclusive gatherings. Perfect for corporate events, weddings, and special occasions seeking cinematic jazz ambiance.",
  },
  {
    title: "Collaborative Events",
    description:
      "Creative collaborations with other artists, special theme performances, and curated musical productions. We adapt our sound to complement your vision and create unforgettable experiences.",
  },
  {
    title: "Response & Planning",
    description:
      "Quick response within 48 hours. Flexible event planning, technical requirements consultation, and customized setlists for your specific venue and audience. Let's create something extraordinary together.",
  },
];

const BookingInfo = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-20">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0B1120] to-background" />

      {/* Ambient Glow */}
      <div className="absolute left-[5%] top-[10%] w-[300px] h-[300px] rounded-full bg-primary/10 blur-[160px]" />

      {/* Blend */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />

      <Container className="relative z-20">

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-20 items-start">

          {/* LEFT SIDE */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 lg:sticky lg:top-32"
          >

            <p className="uppercase tracking-[0.35em] text-[10px] md:text-sm text-textSecondary">
              Booking Information
            </p>

            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl xl:text-[6rem] leading-[0.9] font-bold">
              CURATED
              <br />
              LIVE
              <br />
              EXPERIENCES
            </h2>

            <p className="max-w-xl text-base md:text-lg text-textSecondary leading-relaxed">
              Every Jazzmatazz performance is shaped around atmosphere,
              emotional energy, immersive sound, and cinematic live storytelling
              tailored for the event experience.
            </p>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
          >

            {bookingDetails.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeScale}
                className="group relative overflow-hidden rounded-[2rem] border border-white/[0.05] bg-white/[0.03] backdrop-blur-xl p-6 md:p-7 min-h-[260px]"
              >

                {/* Atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-violetGlow/10 opacity-60 group-hover:opacity-100 transition duration-700" />

                {/* Background Number */}
                <h2 className="absolute right-4 bottom-0 font-heading text-[5rem] leading-none text-white/[0.03] pointer-events-none">
                  0{index + 1}
                </h2>

                {/* Content */}
                <div className="relative z-10 space-y-5">

                  <p className="uppercase tracking-[0.3em] text-[10px] text-textMuted">
                    Booking Detail
                  </p>

                  <h3 className="font-heading text-3xl leading-tight font-bold">
                    {item.title}
                  </h3>

                  <p className="text-sm md:text-base text-textSecondary leading-relaxed">
                    {item.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </motion.div>

        </div>

      </Container>

    </section>
  );
};

export default BookingInfo;