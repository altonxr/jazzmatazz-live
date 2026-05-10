import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { useEffect } from "react";

const MouseAura = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const scrollY = useMotionValue(0);

  /* Smooth Mouse Physics */
  const springX = useSpring(mouseX, {
    stiffness: 38,
    damping: 18,
    mass: 0.8,
  });

  const springY = useSpring(mouseY, {
    stiffness: 38,
    damping: 18,
    mass: 0.8,
  });

  /* Scroll-Based Atmosphere */
  const rotate = useTransform(scrollY, [0, 4000], [0, 18]);

  const opacity = useTransform(
    scrollY,
    [0, 1200, 2400],
    [0.16, 0.12, 0.08]
  );

  const scale = useTransform(
    scrollY,
    [0, 1800],
    [1, 1.3]
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };

    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mouseX, mouseY, scrollY]);

  return (
    <>
      {/* Primary Aura */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          opacity,
          rotate,
          scale,
        }}
        className="hidden md:block fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0 blur-[140px] bg-primary/12 mix-blend-screen"
      />

      {/* Secondary Violet Atmosphere */}
      <motion.div
        style={{
          x: useTransform(springX, (v) => v * 0.7),
          y: useTransform(springY, (v) => v * 0.7),
          opacity,
          scale,
        }}
        className="hidden md:block fixed top-0 left-0 w-[320px] h-[320px] rounded-full pointer-events-none z-0 blur-[120px] bg-violetGlow/10"
      />

      {/* Subtle Core Light */}
      <motion.div
        style={{
          x: useTransform(springX, (v) => v + 180),
          y: useTransform(springY, (v) => v + 180),
        }}
        className="hidden md:block fixed top-0 left-0 w-[60px] h-[60px] rounded-full pointer-events-none z-0 bg-white/[0.05] blur-2xl"
      />
    </>
  );
};

export default MouseAura;