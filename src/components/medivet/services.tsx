const services = [
  {
    title: "Advanced surgical care",
    body: "From routine spay/neuter to soft-tissue and orthopedic procedures, our surgical team uses modern monitoring and pain-management protocols. We walk you through pre-op preparation, recovery at home, and follow-up so you always know what to expect.",
  },
  {
    title: "Vaccinations & preventive care",
    body: "Core and lifestyle vaccines are scheduled to match your pet's risk profile — not a one-size-fits-all checklist. We help you protect against serious disease while keeping visits calm and efficient.",
  },
  {
    title: "Dental care for healthier years",
    body: "Dental disease affects most pets by age three. We provide dental exams, professional cleanings, and extractions when needed, with emphasis on comfort and safety under appropriate anesthesia and monitoring.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="border-t border-slate-200 bg-slate-50 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Comprehensive veterinary services under one roof
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
          Whether your pet needs a wellness exam, a tooth cleaning, or urgent
          attention, Medivet delivers consistent, evidence-based care. We focus
          on early detection, clear communication, and treatment plans tailored
          to your pet&apos;s age, breed, and lifestyle.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-teal-900">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem]">
                {s.body}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href="#consultation"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-teal-700 px-8 text-base font-medium text-white shadow-sm transition hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          >
            Book a consultation
          </a>
        </div>
      </div>
    </section>
  );
}
