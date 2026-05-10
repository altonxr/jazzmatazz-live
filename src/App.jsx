import AppRoutes from "./routes/AppRoutes";
import MouseAura from "./components/ui/MouseAura";

function App() {
  return (
    <main className="bg-background text-textPrimary min-h-screen overflow-hidden relative">

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

      {/* Routes */}
      <AppRoutes />

    </main>
  );
}

export default App;