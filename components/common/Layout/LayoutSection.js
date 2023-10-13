export const LayoutSection = ({ children, className }) => {
  return (
    <div
      className={`py-[40px] md:py-[70px] lg:py-[150px] px-[16px] md:px-[40px] lg:px-[80px] ${
        className && className
      }`}
    >
      {children}
    </div>
  );
};
