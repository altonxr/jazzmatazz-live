const Container = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`
        w-full
        max-w-[1440px]
        mx-auto
        px-5
        sm:px-6
        md:px-8
        xl:px-12
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;