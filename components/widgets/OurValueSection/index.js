import { ContentSection } from "@/components/common/ContentSection";
import { LayoutSection } from "@/components/common/Layout/LayoutSection";
import Image from "next/image";

export const OurValueSection = () => {
  return (
    <LayoutSection className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
        <div className="relative order-2 lg:order-1">
          <div className="bg-primary absolute w-28 h-20 left-[-27px] bottom-[-27px]"></div>
          <div className="flex relative">
            <Image
              className="pt-4 pr-2"
              alt="img-value"
              width={433}
              height={383}
              src="/value_1.png"
            />
            <Image
              className="pb-4"
              alt="img-value"
              width={213}
              height={383}
              src="/value_2.png"
            />
          </div>
        </div>
        <div className="lg:pl-[82px] order-1 lg:order-2">
          <ContentSection
            vertical
            badgeContent="Our value"
            title={
              <>
                <p className="sm:hidden md:hidden lg:block">
                  Unlocking
                  <br />
                  Real Appraisal
                  <br />
                  <span className="text-primary">Services</span>
                </p>

                <p className="sm:block md:block lg:hidden">
                  Unlocking
                  <br />
                  Real Appraisal
                  <span className="text-primary">&nbsp;Services</span>
                </p>
              </>
            }
            buttonContent="get started free"
            content="Our experts can provide valuable insights and assist you in identifying properties."
          />
        </div>
      </div>
    </LayoutSection>
  );
};
