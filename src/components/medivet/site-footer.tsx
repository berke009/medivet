import Link from "next/link";
import { MedivetLogo } from "@/components/medivet/medivet-logo";

const linkClass = "text-sm text-slate-600 transition hover:text-teal-800";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <MedivetLogo className="text-teal-900" />
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Trusted veterinary care and 24/7 emergency support. Educational
              content on this site uses mock photography for demonstration.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Explore
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/about" className={linkClass}>
                    About veterinary care
                  </Link>
                </li>
                <li>
                  <Link href="/pet-care" className={linkClass}>
                    Pet care guides
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={linkClass}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                On this page
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/#services" className={linkClass}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#vets" className={linkClass}>
                    Our vets
                  </Link>
                </li>
                <li>
                  <Link href="/#consultation" className={linkClass}>
                    Book
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-10 text-xs text-slate-500">
          © {new Date().getFullYear()} Medivet. Replace placeholders with live
          hours, address, and canonical URL before launch.
        </p>
      </div>
    </footer>
  );
}
