import AppRoutes from "./routes/AppRoutes";
import MouseAura from "./components/ui/MouseAura";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <main className="bg-background text-textPrimary min-h-screen overflow-x-hidden relative">

      {/* Mouse Aura */}
      <MouseAura />

      {/* Cinematic Grain Texture */}
      <div className="pointer-events-none fixed inset-0 z-[1] opacity-[0.035] mix-blend-soft-light">

        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
          }}
        />

      </div>

      {/* Cinematic Vignette */}
      <div className="pointer-events-none fixed inset-0 z-[2]">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.35)_100%)]" />

      </div>
<Navbar/>
      {/* Routes */}
      <AppRoutes />

    </main>
  );
}

export default App;