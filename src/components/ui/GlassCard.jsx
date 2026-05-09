const GlassCard = ({ children, className = "" }) => {
  return (
    <div
      className={`
        bg-white/5
        border border-white/10
        backdrop-blur-xl
        rounded-[2rem]
        shadow-glow
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;