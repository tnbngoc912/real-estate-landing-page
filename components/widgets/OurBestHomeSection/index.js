import { Icon } from "@iconify/react";
import { useRef } from "react";
import Slider from "react-slick";
import { ContentSection } from "@/components/common/ContentSection";
import { LayoutSection } from "@/components/common/Layout/LayoutSection";
import { ItemSlide } from "./ItemSlide";
import { BEST_HOME_DATA, BEST_HOME_SETTINGS } from "./utils";
import Image from "next/image";

export const OurBestHomeSection = () => {
  const ref = useRef({});

  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  return (
    <LayoutSection className="bg-white">
      <ContentSection
        badgeContent="Our Best homes"
        title={
          <>
            Find your<span className="text-primary">&nbsp;dream</span>
            <br />
            home here
          </>
        }
        buttonContent="get started free"
        content="Our agents will guide you through the entire buying process, from property"
      />

      <div className="relative">
        <Slider ref={ref} {...BEST_HOME_SETTINGS}>
          {BEST_HOME_DATA.map(({ src, leftContent, rightContent }, idx) => {
            return (
              <ItemSlide
                key={idx}
                src={src}
                leftContent={leftContent}
                rightContent={rightContent}
              />
            );
          })}
        </Slider>

        <div className="w-full absolute sm:hidden md:hiddeb lg:block lg:bottom-[30px]">
          <div className="flex w-fit inset-x-0 mx-auto">
            <Icon
              icon="gridicons:arrow-left"
              className="h-6 w-auto text-white"
              onClick={previous}
            />
            <Icon
              icon="gridicons:arrow-right"
              className="h-6 w-auto text-white"
              onClick={next}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 ">
        <Image
          width={100}
          height={100}
          src={"/best_home_2.png"}
          alt="img-home"
          className="w-full"
        />
        <Image
          width={100}
          height={100}
          src={"/best_home_3.png"}
          alt="img-home"
          className="w-full"
        />
      </div>
    </LayoutSection>
  );
};
