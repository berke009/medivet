export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold text-teal-900">Medivet</p>
          <p className="mt-1 text-sm text-slate-600">
            Trusted veterinary care &amp; 24/7 emergency support.
          </p>
        </div>
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Medivet. Replace placeholders with live
          hours, address, and canonical URL before launch.
        </p>
      </div>
    </footer>
  );
}
