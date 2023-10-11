export const Button = ({ label = "", to = "", type = "", className = "" }) => {
  const renderClassName = () => {
    switch (type) {
      case "black":
        return "btn btn--secondary text-white rounded-full bg-black-100";
      case "no-outline":
        return "text-black font-medium";
      default:
        break;
    }
  };
  return (
    <a
      role="button"
      href={to}
      className={`font-amulya ${className} ${renderClassName()}`}
    >
      {label}
    </a>
  );
};
