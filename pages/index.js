import { HomeBanner } from "@/components/common/Banner";
import { SliderSection } from "@/components/widgets/SliderSection";
import { Layout } from "@/components/common/Layout";
import { SolutionSection } from "@/components/widgets/SolutionSection";
import { DreamerHomeSection } from "@/components/widgets/DreamerHomeSection";
import { OurValueSection } from "@/components/widgets/OurValueSection";
import { OurBestHomeSection } from "@/components/widgets/OurBestHomeSection";
import { TestimonialSection } from "@/components/widgets/TestimonialSection";

export default function Home() {
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
