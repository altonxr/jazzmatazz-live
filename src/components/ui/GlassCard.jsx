import { motion } from "framer-motion";

const GlassCard = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      whileTap={{
        y: -2,
        scale: 0.98,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        relative
        overflow-hidden
        rounded-[2rem]

        bg-white/[0.025]
        backdrop-blur-2xl

        border border-white/[0.04]

        shadow-[0_0_40px_rgba(124,58,237,0.06)]

        transition-all duration-500

        group

        active:brightness-110

        ${className}
      `}
    >

      {/* Ambient Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 active:opacity-100 transition duration-700 bg-gradient-to-br from-primary/[0.08] via-transparent to-violetGlow/[0.06]" />

      {/* Subtle Top Highlight */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/[0.08]" />

      {/* Cinematic Edge Light */}
      <div className="absolute inset-0 rounded-[2rem] ring-1 ring-white/[0.02]" />

      {/* Hover Sweep */}
      <motion.div
        initial={{ x: "-140%" }}
        whileHover={{ x: "140%" }}
        whileTap={{ x: "140%" }}
        transition={{
          duration: 1.4,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent"
      />

      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>

    </motion.div>
  );
};

export default GlassCard;