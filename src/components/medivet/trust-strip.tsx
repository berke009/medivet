const bullets = [
  "Board-certified veterinarians and licensed technicians",
  "24/7 emergency access for urgent concerns",
  "Transparent treatment plans — we explain every step",
  "Fear-free handling techniques for anxious pets",
];

export function TrustStrip() {
  return (
    <section
      className="border-b border-slate-200 bg-slate-50"
      aria-label="Why choose Medivet"
    >
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {bullets.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-sm text-slate-700 sm:text-[0.9375rem]"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
