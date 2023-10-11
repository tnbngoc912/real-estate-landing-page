import { SectionContainer } from "../Section";

export const HomeBanner = () => {
  return (
    <SectionContainer className="page-banner--container">
      <div
        class="h-[130vh] bg-cover bg-no-repeat"
        style={{
          backgroundImage: ` url('/hero-banner.jpg')`,
          backgroundPosition: "0px -178px"
        }}
      >
        <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">
          <div className="text-center mx-auto pt-[200px]">
            <p className="text-7xl">WE ARE A LEADING</p>
            <p className="text-7xl font-medium pt-7">
              REAL ESTATE<span className="text-primary-50">&nbsp;AGENCY</span>
            </p>
          </div>
        </SectionContainer>
      </div>
    </SectionContainer>
  );
};
