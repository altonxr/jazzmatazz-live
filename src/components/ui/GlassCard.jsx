import { motion } from "framer-motion";

const GlassCard = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className={`
        relative
        overflow-hidden
        rounded-[2rem]
        
        bg-white/[0.02]
        backdrop-blur-2xl
       shadow-[0_0_40px_rgba(124,58,237,0.08)]
        transition-all duration-500
        group
        ${className}
      `}
    >

      {/* Ambient Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-primary/10 via-transparent to-violetGlow/10" />

      {/* Top Highlight */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20 opacity-40" />

      {/* Hover Light Sweep */}
      <motion.div
        initial={{ x: "-120%" }}
        whileHover={{ x: "120%" }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"
      />

      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>

    </motion.div>
  );
};

export default GlassCard;