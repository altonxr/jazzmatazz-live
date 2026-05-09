import Navbar from "../components/layout/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-background text-textPrimary overflow-hidden">

      {/* Ambient Glow Top Left */}
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-primary/20 blur-[180px] rounded-full pointer-events-none" />

      {/* Ambient Glow Bottom Right */}
      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-violetGlow/20 blur-[180px] rounded-full pointer-events-none" />

      <Navbar />

      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;