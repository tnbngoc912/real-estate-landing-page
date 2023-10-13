import { HomeBanner } from "@/components/common/Banner";
import { SliderSection } from "@/components/widgets/SliderSection";
import { Layout } from "@/components/common/Layout";
import { SolutionSection } from "@/components/widgets/SolutionSection";
import { DreamerHomeSection } from "@/components/widgets/DreamerHomeSection";
import { OurValueSection } from "@/components/widgets/OurValueSection";
import { OurBestHomeSection } from "@/components/widgets/OurBestHomeSection";
import { TestimonialSection } from "@/components/widgets/TestimonialSection";
import { useEffect, useState } from "react";
const delay = 8;

export default function Home() {
  // const [show, setShow] = useState(false);

  // useEffect(() => {
  //   const logo = document.getElementById("BuildingsLoad");
  //   const paths = document.getElementById("path");
  //   const duration = 8;
  //   const delay = 0.3;
  //   const fillDelay = paths?.length * delay;
  //   logo.style.animation = `fillAnimation ${duration}s ease forwards ${fillDelay}s`;
  //   const length = paths.getTotalLength();
  //   paths.style.strokeDasharray = length;
  //   paths.style.strokeDashoffset = length;
  //   paths.style.animation = `lineAnimation ${duration}s ease forwards ${delay}s`;
  // }, []);

  // useEffect(() => {
  //   let timer = setTimeout(() => setShow(true), delay * 1000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  return (
    <Layout>
      <div className="main-wrapper bg-[#F3F5F8] relative z-10">
        <HomeBanner />
        <SliderSection />
        <SolutionSection />
        <DreamerHomeSection />
        <OurValueSection />
        <hr className="mx-[80px]" />
        <OurBestHomeSection />
        <TestimonialSection />
      </div>
    </Layout>
  );
}
