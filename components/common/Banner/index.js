import useScrolledPage from "@/utils/hooks/useScrolledPage";
import Image from "next/image";

export const HomeBanner = () => {
  const isScrolled = useScrolledPage();
  const handleClickScroll = () => {
    const element = document.getElementById("solutionSection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-screen h-[50vh] md:h-[70vh] lg:h-screen">
      <div className="z-[-1]">
        <Image
          priority
          src={"/hero-banner.jpg"}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="hero-image"
          unoptimized={true}
          fill
        />
      </div>

      <div className="relative flex flex-col items-center">
        <div className="text-center mx-auto  pt-[80px] md:pt-[100px] md:pb-[500px] lg:pt-[200px] lg:pb-[700px]">
          <p className="text-2xl lg:text-7xl">WE ARE A LEADING</p>
          <p className="text-2xl lg:text-7xl font-medium pt-2 lg:pt-7">
            REAL ESTATE<span className="text-primary">&nbsp;AGENCY</span>
          </p>
        </div>

        {!isScrolled && (
          <div
            className="scroll-down top-[40vh] md:top-[60vh] lg:top-[90vh] "
            onClick={handleClickScroll}
          >
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
            <span className="text">Scroll down</span>
          </div>
        )}
      </div>
    </div>
  );
};
