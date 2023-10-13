import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button/Button";
import { SectionTitle } from "@/components/common/SectionTitle";

export const ContentSection = ({
  title = "",
  badgeContent = "",
  buttonContent,
  content = "",
  vertical = false
}) => {
  return (
    <div
      className={`${!vertical ? "lg:text-center" : "lg:text-left"} text-center`}
    >
      <div>
        {badgeContent && <Badge content={badgeContent} vertical={vertical} />}
      </div>
      <SectionTitle title={title} />
      {vertical && (
        <div className="flex flex-col lg:flex-row items-center">
          {buttonContent && (
            <Button
              type="primary"
              className="order-2 lg:order-1 my-5 lg:my-0"
              label={buttonContent}
            />
          )}
          {content && (
            <p className="pl-4 text-lg order-1 lg:order-2">{content}</p>
          )}
        </div>
      )}
    </div>
  );
};
