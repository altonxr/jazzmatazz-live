const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-heroGradient" />

      {/* Purple Glow */}
      <div className="absolute top-[-150px] left-[10%] w-[450px] h-[450px] bg-primary/30 blur-[160px] rounded-full" />

      {/* Violet Glow */}
      <div className="absolute bottom-[-150px] right-[5%] w-[400px] h-[400px] bg-violetGlow/20 blur-[160px] rounded-full" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Main Content */}
      <div className="relative z-10 max-w-container mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-8">

          <div className="space-y-4">
            <p className="uppercase tracking-[0.4em] text-sm text-textSecondary">
              Luxury Jazz Fusion Experience
            </p>

            <h1 className="font-heading text-6xl md:text-8xl xl:text-[9rem] leading-none font-bold">
              JAZZ
              <br />
              MATAZZ
            </h1>
          </div>

          <p className="max-w-xl text-lg md:text-xl text-textSecondary leading-relaxed">
            A cinematic live-performance experience blending classic jazz,
            fusion energy, and immersive stage presence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-5">

            <button className="px-8 py-4 rounded-2xl bg-primary hover:bg-violetGlow transition duration-300 shadow-glow font-medium">
              Book Jazzmatazz
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition duration-300">
              Explore Shows
            </button>

          </div>

        </div>

        {/* RIGHT VISUAL SIDE */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center">

          {/* Main Visual Card */}
          <div className="relative w-[420px] h-[520px] rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-glow">

            {/* Image Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-violetGlow/10" />

            {/* Glow Layer */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Floating Accent */}
            <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/10 text-sm tracking-wide">
              LIVE EXPERIENCE
            </div>

            {/* Placeholder Text */}
            <div className="absolute bottom-10 left-10">
              <p className="text-textSecondary uppercase tracking-[0.3em] text-xs mb-3">
                National Level Band
              </p>

              <h2 className="font-heading text-4xl font-bold">
                Feel The
                <br />
                Performance
              </h2>
            </div>

          </div>

          {/* Floating Mini Card */}
          <div className="absolute bottom-12 left-0 w-[180px] h-[120px] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-5 shadow-glow">

            <p className="text-textSecondary text-xs uppercase tracking-[0.3em] mb-3">
              Upcoming
            </p>

            <h3 className="font-heading text-xl font-bold">
              Live Shows
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;