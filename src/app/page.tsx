import { Consultation } from "@/components/medivet/consultation";
import { Hero } from "@/components/medivet/hero";
import { LocalSeo } from "@/components/medivet/local-seo";
import { MeetVets } from "@/components/medivet/meet-vets";
import { Services } from "@/components/medivet/services";
import { SiteChrome } from "@/components/medivet/site-chrome";
import { TrustStrip } from "@/components/medivet/trust-strip";
import { VeterinaryExplainer } from "@/components/medivet/veterinary-explainer";

export default function Home() {
  return (
    <SiteChrome>
      <TrustStrip />
      <Hero />
      <VeterinaryExplainer />
      <Services />
      <MeetVets />
      <Consultation />
      <LocalSeo />
    </SiteChrome>
  );
}
