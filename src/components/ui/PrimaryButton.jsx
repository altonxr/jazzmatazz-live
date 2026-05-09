const PrimaryButton = ({ children }) => {
  return (
    <button className="px-8 py-4 rounded-2xl bg-primary hover:bg-violetGlow transition duration-300 shadow-glow font-medium">
      {children}
    </button>
  );
};

export default PrimaryButton;