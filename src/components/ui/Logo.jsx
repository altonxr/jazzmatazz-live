import { motion } from "framer-motion";

const Logo = () => {
  return (
    <div className="relative inline-block cursor-pointer group">

      {/* Ambient Glow */}
      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 blur-2xl bg-primary/20"
      />

      {/* Cyan Glitch */}
      <motion.span
        animate={{
          x: [0, 1.5, -1.5, 0],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-0 top-0 font-heading text-xl md:text-2xl font-bold tracking-[0.08em] text-cyan-400"
      >
        JAZZMATAZZ
      </motion.span>

      {/* Purple Glitch */}
      <motion.span
        animate={{
          x: [0, -1.5, 1.5, 0],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-0 top-0 font-heading text-xl md:text-2xl font-bold tracking-[0.08em] text-primary"
      >
        JAZZMATAZZ
      </motion.span>

      {/* Main Text */}
      <h1 className="relative font-heading text-xl md:text-2xl font-bold tracking-[0.08em] text-white">
        JAZZMATAZZ
      </h1>

    </div>
  );
};

export default Logo;