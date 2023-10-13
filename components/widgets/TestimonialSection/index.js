import { ContentSection } from "@/components/common/ContentSection";
import { LayoutSection } from "@/components/common/Layout/LayoutSection";
import { TestimonialCard } from "./TestimonialCard";
import Slider from "react-slick";
import { useRef } from "react";
import { Icon } from "@iconify/react";
import { TESTIMONIAL_DATA, TESTIMONIAL_SETTINGS } from "./utils";

export const TestimonialSection = () => {
  const ref = useRef({});

  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  return (
    <LayoutSection className="bg-white-50">
      <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-4">
        <div className="col-span-2">
          <ContentSection
            vertical
            title={
              <>
                <p className="sm:hidden md:hidden lg:block">
                  Our<span className="font-medium">&nbsp;customers</span>
                  <br />
                  think we’re
                  <br /> the best
                </p>

                <p className="sm:block md:block lg:hidden">
                  Our<span className="font-medium">&nbsp;customers</span>
                  <br />
                  think we’re the best
                </p>
              </>
            }
          />

          <div className="flex w-fit inset-x-0 mx-auto lg:mx-0">
            <button className="inline-flex items-center justify-center w-8 h-8 mr-2 transition-colors duration-150 bg-primary-100 rounded-full focus:shadow-outline hover:bg-primary-200">
              <Icon
                icon="gridicons:arrow-left"
                className="h-4 w-auto text-primary"
                onClick={previous}
              />
            </button>
            <button className="inline-flex items-center justify-center w-8 h-8 mr-2 transition-colors duration-150 bg-primary rounded-full focus:shadow-outline hover:bg-primary-300">
              <Icon
                icon="gridicons:arrow-right"
                className="h-4 w-auto text-white"
                onClick={next}
              />
            </button>
          </div>
        </div>

        <div className="col-span-3">
          <Slider ref={ref} {...TESTIMONIAL_SETTINGS}>
            {TESTIMONIAL_DATA.map(
              ({ content, avatar, name, jobTitle, rates }, idx) => {
                return (
                  <TestimonialCard
                    content={content}
                    avatar={avatar}
                    name={name}
                    jobTitle={jobTitle}
                    key={idx}
                    rates={rates}
                  />
                );
              }
            )}
          </Slider>
        </div>
      </div>
    </LayoutSection>
  );
};
