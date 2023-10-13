import { ContentSection } from "@/components/common/ContentSection";
import { LayoutSection } from "@/components/common/Layout/LayoutSection";
import { CardItem } from "./CardItem";
import Slider from "react-slick";
import { CARD_DATA, CARD_SETTINGS } from "./utils";

export const DreamerHomeSection = () => {
  return (
    <>
      <LayoutSection className="bg-white-50">
        <ContentSection
          badgeContent="dreamer home"
          title={
            <>
              If you&apos;re in need of
              <br />
              <span className="text-primary">rental</span>&nbsp;services
            </>
          }
          buttonContent="get started free"
          content="Our agents will guide you through the entire buying process, from property"
        />

        <Slider {...CARD_SETTINGS}>
          {CARD_DATA.map(({ src, content, title }, idx) => {
            return (
              <CardItem src={src} content={content} title={title} key={idx} />
            );
          })}
        </Slider>
      </LayoutSection>
    </>
  );
};
