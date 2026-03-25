import Link from "next/link";
import { MedivetLogo } from "@/components/medivet/medivet-logo";

const navClass =
  "text-sm font-medium text-slate-600 transition hover:text-teal-800";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <MedivetLogo />
        <nav
          className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-right sm:gap-x-5"
          aria-label="Primary"
        >
          <Link href="/#services" className={navClass}>
            Services
          </Link>
          <Link href="/#vets" className={navClass}>
            Our vets
          </Link>
          <Link href="/pet-care" className={navClass}>
            Pet care
          </Link>
          <Link href="/about" className={navClass}>
            About
          </Link>
          <Link href="/contact" className={navClass}>
            Contact
          </Link>
          <Link
            href="/#consultation"
            className="rounded-lg bg-teal-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          >
            Book
          </Link>
        </nav>
      </div>
    </header>
  );
}
