import AppRoutes from "./routes/AppRoutes";
import MouseAura from "./components/ui/MouseAura";
function App() {
  return (
    <main className="bg-background text-textPrimary min-h-screen">
      <MouseAura />
      <AppRoutes />
    </main>
  );
}

export default App;