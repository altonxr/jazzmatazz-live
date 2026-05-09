import Container from "../common/Container";

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-white/10 overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-primary/10 blur-[160px] rounded-full" />

      <Container className="relative z-10">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Branding */}
          <div className="space-y-4 text-center lg:text-left">

            <h3 className="font-heading text-3xl font-bold">
              JAZZMATAZZ
            </h3>

            <p className="max-w-md text-textSecondary leading-relaxed">
              A cinematic jazz fusion experience blending live performance,
              immersive atmosphere, and modern stage energy.
            </p>

          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-8 text-textSecondary">

            <a href="#">
              Instagram
            </a>

            <a href="#">
              YouTube
            </a>

            <a href="#">
              Booking
            </a>

            <a href="#">
              Media
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-textMuted text-sm">
          © 2026 Jazzmatazz. All rights reserved.
        </div>

      </Container>
    </footer>
  );
};

export default Footer;