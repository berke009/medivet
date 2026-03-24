export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,var(--color-teal-soft),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <p className="text-sm font-medium uppercase tracking-wide text-teal-800">
          Medivet veterinary services
        </p>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Expert care for the pets you love —{" "}
          <span className="text-teal-800">
            here when you need us, day or night
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
          From routine checkups to advanced surgery, Medivet combines modern
          medicine with a gentle touch.{" "}
          <strong className="font-semibold text-slate-800">
            Our team is available for emergencies 24 hours a day, 7 days a week
          </strong>{" "}
          — because peace of mind should not wait until morning.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#consultation"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-teal-700 px-6 text-base font-medium text-white shadow-sm transition hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          >
            Book a consultation
          </a>
          <a
            href="tel:+15555550100"
            className="text-center text-base font-medium text-teal-800 underline decoration-teal-300 underline-offset-4 transition hover:text-teal-950 sm:text-left"
          >
            Call our 24/7 emergency line
          </a>
        </div>
      </div>
    </section>
  );
}
