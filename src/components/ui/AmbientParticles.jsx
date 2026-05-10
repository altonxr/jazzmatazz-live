import { motion } from "framer-motion";

const particles = [
  {
    size: "w-2 h-2",
    position: "top-[10%] left-[15%]",
    duration: 12,
    delay: 0,
  },
  {
    size: "w-3 h-3",
    position: "top-[30%] right-[18%]",
    duration: 15,
    delay: 2,
  },
  {
    size: "w-1.5 h-1.5",
    position: "bottom-[20%] left-[25%]",
    duration: 10,
    delay: 1,
  },
  {
    size: "w-2.5 h-2.5",
    position: "bottom-[15%] right-[12%]",
    duration: 14,
    delay: 3,
  },
  {
    size: "w-2 h-2",
    position: "top-[55%] left-[50%]",
    duration: 16,
    delay: 4,
  },
];

const AmbientParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {particles.map((particle, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          className={`absolute ${particle.position} ${particle.size} rounded-full bg-white/30 blur-sm`}
        />
      ))}

    </div>
  );
};

export default AmbientParticles;