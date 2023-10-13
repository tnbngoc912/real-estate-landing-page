export const Button = ({ label = "", to = "", type = "", className = "" }) => {
  const renderClassName = () => {
    switch (type) {
      case "primary":
        return "btn text-white rounded-full bg-black-100";
      case "secondary":
        return "btn-secondary text-black font-medium hover:text-primary";
      default:
        break;
    }
  };
  return (
    <a
      role="button"
      href={to}
      className={`whitespace-nowrap capitalize ${className} ${renderClassName()}`}
    >
      {label}
    </a>
  );
};
