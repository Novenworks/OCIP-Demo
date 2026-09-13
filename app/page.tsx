import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { ProofStrip } from "@/components/proof-strip";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { Difference } from "@/components/difference";
import { Process } from "@/components/process";
import { Capabilities } from "@/components/capabilities";
import { Reviews } from "@/components/reviews";
import { ServiceArea } from "@/components/service-area";
import { FinalCta } from "@/components/final-cta";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <div id="top">
      <SiteHeader />
      <main>
        <Hero />
        <ProofStrip />
        <Services />
        <Work />
        <Difference />
        <Process />
        <Capabilities />
        <Reviews />
        <ServiceArea />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
