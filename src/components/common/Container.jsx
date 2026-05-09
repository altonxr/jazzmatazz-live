const Container = ({ children, className = "" }) => {
  return (
    <div className={`max-w-container mx-auto px-6 ${className}`}>
      {children}
    </div>
  );
};

export default Container;