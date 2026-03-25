import { SiteFooter } from "@/components/medivet/site-footer";
import { SiteHeader } from "@/components/medivet/site-header";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
