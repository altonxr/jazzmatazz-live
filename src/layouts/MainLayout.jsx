
import Footer from "../components/layout/Footer";
const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-background text-textPrimary overflow-x-hidden">
      {/* Noise Texture */}
        <div className="pointer-events-none fixed inset-0 opacity-[0.035] mix-blend-soft-light z-[1] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      {/* Ambient Glow Top Left */}
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-primary/20 blur-[180px] rounded-full pointer-events-none" />
      
      {/* Center Atmospheric Glow */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-primary/5 blur-[220px] rounded-full pointer-events-none" />

      {/* Ambient Glow Bottom Right */}
      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-violetGlow/20 blur-[180px] rounded-full pointer-events-none" />

      

      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;