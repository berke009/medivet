export function Consultation() {
  return (
    <section
      id="consultation"
      className="border-t border-slate-200 bg-teal-800 py-14 text-white sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Book a consultation
            </h2>
            <p className="mt-3 text-teal-100">
              Request an appointment online. Our team will confirm availability
              and next steps. Form submission will connect to backend endpoints
              when ready.
            </p>
            <p className="mt-4 text-sm text-teal-200">
              Prefer the phone?{" "}
              <a
                href="tel:+15555550100"
                className="font-medium underline decoration-teal-400 underline-offset-4 hover:text-white"
              >
                Call (555) 555-0100
              </a>{" "}
              — 24/7 for emergencies.
            </p>
          </div>
          <form
            className="rounded-2xl bg-white/10 p-6 backdrop-blur"
            action="#"
            method="post"
            aria-label="Consultation request"
          >
            <div className="grid gap-4">
              <label className="grid gap-1 text-sm font-medium text-teal-50">
                Your name
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="rounded-lg border border-white/20 bg-white/90 px-3 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/60"
                  placeholder="Full name"
                  disabled
                />
              </label>
              <label className="grid gap-1 text-sm font-medium text-teal-50">
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="rounded-lg border border-white/20 bg-white/90 px-3 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/60"
                  placeholder="you@example.com"
                  disabled
                />
              </label>
              <label className="grid gap-1 text-sm font-medium text-teal-50">
                Pet & reason for visit
                <textarea
                  name="message"
                  rows={3}
                  className="resize-y rounded-lg border border-white/20 bg-white/90 px-3 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/60"
                  placeholder="Tell us about your pet and what you need."
                  disabled
                />
              </label>
              <p className="text-xs text-teal-100">
                Form fields stay disabled until the booking API is connected
                (hand off to Backend for endpoints and validation).
              </p>
              <button
                type="button"
                disabled
                className="mt-2 inline-flex h-11 cursor-not-allowed items-center justify-center rounded-lg bg-white/40 px-4 text-sm font-semibold text-teal-900"
              >
                Submit (coming soon)
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
