import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideItem } from "./SlideItem";
import { SLIDE_DATA, SLIDE_SETTINGS } from "./utils";

export const SliderSection = () => {
  return (
    <div className="border-y border-black-200 shadow-[0_4px_4px_0_rgba(0, 0, 0, 0.02)]">
      <Slider {...SLIDE_SETTINGS}>
        {SLIDE_DATA.map(({ src, content }, idx) => {
          return <SlideItem src={src} content={content} key={idx} />;
        })}
      </Slider>
    </div>
  );
};
