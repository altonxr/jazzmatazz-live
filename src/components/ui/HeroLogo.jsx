import { motion } from "framer-motion";
;
const slices = [
  // J — HEAVY
  { clip: "polygon(1% 8%, 8% 8%, 8% 14%, 1% 14%)", shift: 4, delay: 1.1, border: "drop-shadow(2px 0 #22d3ee)" },
  { clip: "polygon(2% 18%, 9% 18%, 9% 24%, 2% 24%)", shift: -3, delay: 1.8, border: "drop-shadow(-2px 0 #c084fc)" },
  { clip: "polygon(1% 30%, 10% 30%, 10% 36%, 1% 36%)", shift: 5, delay: 2.4, border: "drop-shadow(2px 0 #67e8f9)" },
  { clip: "polygon(3% 42%, 11% 42%, 11% 48%, 3% 48%)", shift: -4, delay: 3.2, border: "drop-shadow(-2px 0 #f0abfc)" },

  // A — MEDIUM
  { clip: "polygon(14% 14%, 20% 14%, 20% 20%, 14% 20%)", shift: 3, delay: 1.7, border: "drop-shadow(2px 0 #22d3ee)" },
  { clip: "polygon(16% 30%, 22% 30%, 22% 36%, 16% 36%)", shift: -2, delay: 2.8, border: "drop-shadow(-2px 0 #c084fc)" },
  { clip: "polygon(15% 46%, 21% 46%, 21% 52%, 15% 52%)", shift: 2, delay: 3.6, border: "drop-shadow(2px 0 #67e8f9)" },

  // FIRST Z — HEAVY
  { clip: "polygon(26% 10%, 35% 10%, 35% 14%, 26% 14%)", shift: 4, delay: 1.2, border: "drop-shadow(2px 0 #67e8f9)" },
  { clip: "polygon(27% 18%, 36% 18%, 36% 22%, 27% 22%)", shift: -3, delay: 1.9, border: "drop-shadow(-2px 0 #f0abfc)" },
  { clip: "polygon(28% 28%, 37% 28%, 37% 32%, 28% 32%)", shift: 5, delay: 2.7, border: "drop-shadow(2px 0 #22d3ee)" },
  { clip: "polygon(29% 38%, 38% 38%, 38% 44%, 29% 44%)", shift: -4, delay: 3.5, border: "drop-shadow(-2px 0 #c084fc)" },
  { clip: "polygon(30% 56%, 39% 56%, 39% 62%, 30% 62%)", shift: 4, delay: 2.3, border: "drop-shadow(2px 0 #67e8f9)" },

  // M — LIGHT
  { clip: "polygon(43% 22%, 48% 22%, 48% 28%, 43% 28%)", shift: 2, delay: 2.3, border: "drop-shadow(2px 0 #67e8f9)" },

  // A/T — MEDIUM
  { clip: "polygon(56% 18%, 63% 18%, 63% 24%, 56% 24%)", shift: -3, delay: 1.8, border: "drop-shadow(-2px 0 #f0abfc)" },
  { clip: "polygon(59% 34%, 66% 34%, 66% 40%, 59% 40%)", shift: 3, delay: 2.9, border: "drop-shadow(2px 0 #22d3ee)" },

  { clip: "polygon(69% 20%, 76% 20%, 76% 26%, 69% 26%)", shift: -2, delay: 2.1, border: "drop-shadow(-2px 0 #c084fc)" },
  { clip: "polygon(71% 50%, 78% 50%, 78% 56%, 71% 56%)", shift: 3, delay: 3.1, border: "drop-shadow(2px 0 #67e8f9)" },

  // FINAL Z / ZZ — HEAVY
  { clip: "polygon(82% 12%, 92% 12%, 92% 18%, 82% 18%)", shift: -4, delay: 1.4, border: "drop-shadow(-2px 0 #f0abfc)" },
  { clip: "polygon(84% 22%, 94% 22%, 94% 28%, 84% 28%)", shift: 3, delay: 2.2, border: "drop-shadow(2px 0 #22d3ee)" },
  { clip: "polygon(85% 34%, 95% 34%, 95% 40%, 85% 40%)", shift: -5, delay: 3.2, border: "drop-shadow(-2px 0 #c084fc)" },
  { clip: "polygon(87% 48%, 97% 48%, 97% 54%, 87% 54%)", shift: 4, delay: 2.6, border: "drop-shadow(2px 0 #67e8f9)" },
  { clip: "polygon(88% 64%, 100% 64%, 100% 72%, 88% 72%)", shift: -4, delay: 1.9, border: "drop-shadow(-2px 0 #f0abfc)" },
  { clip: "polygon(90% 78%, 100% 78%, 100% 86%, 90% 86%)", shift: 5, delay: 3.8, border: "drop-shadow(3px 0 #22d3ee)" },
];

const flickers = [
  { clip: "polygon(2% 0%, 7% 0%, 7% 100%, 2% 100%)", delay: 2.2 },
  { clip: "polygon(10% 0%, 15% 0%, 15% 100%, 10% 100%)", delay: 3.6 },
  { clip: "polygon(18% 0%, 24% 0%, 24% 100%, 18% 100%)", delay: 4.4 },
  { clip: "polygon(28% 0%, 35% 0%, 35% 100%, 28% 100%)", delay: 2.7 },
  { clip: "polygon(39% 0%, 45% 0%, 45% 100%, 39% 100%)", delay: 5.1 },
  { clip: "polygon(49% 0%, 56% 0%, 56% 100%, 49% 100%)", delay: 3.1 },
  { clip: "polygon(58% 0%, 64% 0%, 64% 100%, 58% 100%)", delay: 4.8 },
  { clip: "polygon(67% 0%, 73% 0%, 73% 100%, 67% 100%)", delay: 2.4 },
  { clip: "polygon(76% 0%, 83% 0%, 83% 100%, 76% 100%)", delay: 3.8 },

  // Z instability
  { clip: "polygon(84% 0%, 91% 0%, 91% 100%, 84% 100%)", delay: 1.1 },
  { clip: "polygon(92% 0%, 100% 0%, 100% 100%, 92% 100%)", delay: 1.6 },
];

const HeroLogo = () => {
  return (
    <div className="relative inline-block">

      {/* Ambient Glow */}
      <motion.div
        animate={{
          opacity: [0.12, 0.28, 0.12],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 blur-[110px] bg-primary/20"
      />

      {/* Main Logo */}
      <h1 className="relative z-10 font-heading text-5xl sm:text-6xl md:text-8xl xl:text-[9rem] leading-[0.88] font-bold tracking-[0.03em] text-white">
        JAZZMATAZZ
      </h1>

      {/* Letter Signal Degradation */}
{flickers.map((flicker, index) => (
  <motion.div
    key={index}
    animate={{
      opacity: [0, 0, 0.75, 0.75, 0],
    }}
    transition={{
      duration: 0.22,
      repeat: Infinity,
      repeatDelay: flicker.delay,
      ease: "easeInOut",
    }}
    className="absolute inset-0 z-30 overflow-hidden pointer-events-none"
    style={{
      clipPath: flicker.clip,
    }}
  >
    <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl xl:text-[9rem] leading-[0.88] font-bold tracking-[0.03em] text-white/10">
      JAZZMATAZZ
    </h1>
  </motion.div>
))}

      {/* Signal Glitch Slices */}
      {slices.map((slice, index) => (
        <motion.div
          key={index}
          animate={{
            x: [0, slice.shift, -slice.shift * 0.4, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 1.1,
            repeat: Infinity,
            repeatDelay: slice.delay,
            ease: "easeInOut",
          }}
          className="absolute inset-0 z-20 overflow-hidden pointer-events-none"
          style={{
            clipPath: slice.clip,
            filter: slice.border,
          }}
        >
          <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl xl:text-[9rem] leading-[0.88] font-bold tracking-[0.03em] text-white">
            JAZZMATAZZ
          </h1>
        </motion.div>
      ))}

    </div>
  );
};

export default HeroLogo;