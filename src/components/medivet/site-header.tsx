import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-teal-800"
        >
          Medivet
        </Link>
        <nav
          className="flex items-center gap-4 text-sm font-medium text-slate-600"
          aria-label="Primary"
        >
          <a href="#services" className="hover:text-teal-800">
            Services
          </a>
          <a href="#vets" className="hover:text-teal-800">
            Our vets
          </a>
          <a href="#consultation" className="hover:text-teal-800">
            Book
          </a>
        </nav>
      </div>
    </header>
  );
}
