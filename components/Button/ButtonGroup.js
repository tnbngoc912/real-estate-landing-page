import { SectionContainer } from "../Section";

export const ButtonGroup = ({ className = "", children }) => {
  return (
    <SectionContainer className="btn-group">
      <div className={`btn-group--container ${className && className}`}>
        {children}
      </div>
    </SectionContainer>
  );
};
