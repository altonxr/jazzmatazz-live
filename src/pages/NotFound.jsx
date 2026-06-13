import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Container from "../components/common/Container";
import PrimaryButton from "../components/ui/PrimaryButton";

const NotFound = () => {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 md:pb-40 min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0B1120] to-background" />

      {/* Ambient Glows */}
      <div className="absolute top-[5%] left-[8%] w-[320px] h-[320px] bg-primary/10 blur-[160px] rounded-full" />
      <div className="absolute bottom-[0%] right-[5%] w-[280px] h-[280px] bg-violetGlow/10 blur-[160px] rounded-full" />

      <Container className="relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center space-y-8 max-w-2xl mx-auto"
        >
          <div className="space-y-4">
            <h1 className="font-heading text-9xl md:text-[10rem] font-bold leading-none text-white/20">
              404
            </h1>

            <h2 className="font-heading text-4xl md:text-6xl font-bold">
              Page Not Found
            </h2>
          </div>

          <p className="text-base md:text-lg text-textSecondary leading-relaxed max-w-xl mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back to the music.
          </p>

          <div className="pt-8">
            <Link to="/">
              <PrimaryButton>
                Back to Home
              </PrimaryButton>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default NotFound;
