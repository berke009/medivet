const vets = [
  {
    name: "Dr. Jane Smith, DVM",
    role: "Lead veterinarian",
    bio: "Board-certified with a focus on soft-tissue surgery and urgent care.",
  },
  {
    name: "Dr. Alex Rivera, DVM",
    role: "Associate veterinarian",
    bio: "Passionate about preventive care and fear-free handling for cats and dogs.",
  },
  {
    name: "Dr. Sam Patel, DVM",
    role: "Emergency & critical care",
    bio: "Experienced in after-hours emergencies and stabilizing critical cases.",
  },
];

export function MeetVets() {
  return (
    <section id="vets" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Meet the veterinarians behind your pet&apos;s care
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
          Our doctors combine years of clinical experience with a genuine love
          for animals.{" "}
          <strong className="font-semibold text-slate-800">
            When minutes matter, you can rely on a team trained for both routine
            visits and urgent cases
          </strong>{" "}
          — including{" "}
          <strong className="font-semibold text-slate-800">
            24/7 emergency coverage
          </strong>{" "}
          so help is always a call away.
        </p>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {vets.map((v) => (
            <li key={v.name} className="flex flex-col">
              <div
                className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-teal-100 to-slate-200"
                role="img"
                aria-label={`${v.name}, Medivet veterinarian`}
              />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {v.name}
              </h3>
              <p className="text-sm font-medium text-teal-800">{v.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {v.bio}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
