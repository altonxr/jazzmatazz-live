import { useEffect, useState } from "react";

const GlitchButton = ({ children, href, to, onClick, variant = "primary", ...props }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  // Trigger random glitch effects
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.85) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 150);
      }
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const baseClasses = `
    relative px-8 py-4 rounded-2xl font-medium transition duration-300
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary
    overflow-hidden group
  `;

  const variantClasses = {
    primary: "bg-primary hover:bg-violetGlow shadow-glow text-white",
    secondary: "border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 text-textSecondary hover:text-white",
  };

  const glitchContent = (
    <>
      {/* Main Content */}
      <span className="relative z-10 block">{children}</span>

      {/* Glitch Effect Layers */}
      {isGlitching && (
        <>
          <span className="absolute inset-0 bg-primary/30 z-20 animate-pulse" style={{ clipPath: `polygon(0 ${Math.random() * 100}%, 100% ${Math.random() * 100}%, 100% ${Math.random() * 100 + 10}%, 0 ${Math.random() * 100 + 10}%)` }} />
          <span className="absolute inset-0 text-white opacity-30 z-20 pointer-events-none" style={{ transform: `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)` }}>
            {children}
          </span>
        </>
      )}

      {/* Hover Shimmer Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-pulse z-5" style={{ transform: "translateX(-100%)" }} />
    </>
  );

  // If it's a link
  if (to) {
    const { Link } = require("react-router-dom");
    return (
      <Link to={to} className="inline-block">
        <button className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
          {glitchContent}
        </button>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        <button className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
          {glitchContent}
        </button>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
      {glitchContent}
    </button>
  );
};

export default GlitchButton;
