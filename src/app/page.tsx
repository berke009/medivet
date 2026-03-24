import { Consultation } from "@/components/medivet/consultation";
import { Hero } from "@/components/medivet/hero";
import { LocalSeo } from "@/components/medivet/local-seo";
import { MeetVets } from "@/components/medivet/meet-vets";
import { Services } from "@/components/medivet/services";
import { SiteFooter } from "@/components/medivet/site-footer";
import { SiteHeader } from "@/components/medivet/site-header";
import { TrustStrip } from "@/components/medivet/trust-strip";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <TrustStrip />
        <Hero />
        <Services />
        <MeetVets />
        <Consultation />
        <LocalSeo />
      </main>
      <SiteFooter />
    </>
  );
}
