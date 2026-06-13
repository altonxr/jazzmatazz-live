const PrimaryButton = ({ children, disabled = false, loading = false, ...props }) => {
  return (
    <button 
      disabled={disabled || loading}
      className={`
        px-8 py-4 rounded-2xl font-medium transition duration-300
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary
        ${disabled || loading 
          ? 'bg-textMuted/40 text-textMuted/60 cursor-not-allowed' 
          : 'bg-primary hover:bg-violetGlow shadow-glow'
        }
      `}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent"></span>
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default PrimaryButton;