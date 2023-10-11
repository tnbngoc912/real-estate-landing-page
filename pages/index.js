import { HomeBanner } from "@/components/Banner";
import { Layout } from "@components/Layout";

export default function Home() {
  return (
    <Layout className="">
      <div className="main-wrapper bg-[#F3F5F8] relative z-10">
        <HomeBanner />
      </div>
    </Layout>
  );
}
