import { useState, useEffect } from "react";

const PrimaryButton = ({ children, disabled = false, loading = false, withGlitch = true, ...props }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  // Trigger random glitch effects
  useEffect(() => {
    if (!withGlitch) return;

    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.85) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 150);
      }
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, [withGlitch]);

  return (
    <button 
      disabled={disabled || loading}
      className={`
        relative px-8 py-4 rounded-2xl font-medium transition duration-300 overflow-hidden group
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary
        ${disabled || loading 
          ? 'bg-textMuted/40 text-textMuted/60 cursor-not-allowed' 
          : 'bg-primary hover:bg-violetGlow shadow-glow'
        }
      `}
      {...props}
    >
      {/* Main Content */}
      <span className="relative z-10 flex items-center gap-2">
        {loading && (
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent"></span>
        )}
        {children}
      </span>

      {/* Glitch Effect Layers */}
      {isGlitching && withGlitch && (
        <>
          <span 
            className="absolute inset-0 bg-primary/30 z-20 animate-pulse" 
            style={{ 
              clipPath: `polygon(0 ${Math.random() * 100}%, 100% ${Math.random() * 100}%, 100% ${Math.random() * 100 + 10}%, 0 ${Math.random() * 100 + 10}%)`
            }} 
          />
          <span 
            className="absolute inset-0 text-white opacity-30 z-20 pointer-events-none flex items-center gap-2 px-8 py-4" 
            style={{ 
              transform: `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`
            }}
          >
            {children}
          </span>
        </>
      )}

      {/* Hover Shimmer Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent z-5" />
    </button>
  );
};

export default PrimaryButton;