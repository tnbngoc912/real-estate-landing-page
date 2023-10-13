export const ButtonGroup = ({ className = "", children }) => {
  return (
    <div className={`btn-group--container ${className && className}`}>
      {children}
    </div>
  );
};
