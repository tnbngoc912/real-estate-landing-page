import useScrolledPage from "@/utils/hooks/useScrolledPage";

export const HomeBanner = () => {
  const isScrolled = useScrolledPage();
  const handleClickScroll = () => {
    const element = document.getElementById("solutionSection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="">
      <div
        className="w-full bg-center bg-cover"
        style={{
          backgroundImage: ` url('/hero-banner.jpg')`
        }}
      >
        <div className="text-center mx-auto  pt-[80px] pb-[300px]  md:pt-[100px] md:pb-[500px] lg:pt-[200px] lg:pb-[700px]">
          <p className="text-2xl lg:text-7xl">WE ARE A LEADING</p>
          <p className="text-2xl lg:text-7xl font-medium pt-2 lg:pt-7">
            REAL ESTATE<span className="text-primary">&nbsp;AGENCY</span>
          </p>
        </div>
      </div>
      {!isScrolled && (
        <div className="scroll-down" onClick={handleClickScroll}>
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
          <span className="text">Scroll down</span>
        </div>
      )}
    </header>
  );
};
