import Image from "next/image";
import Link from "next/link";
import { mockImages } from "@/components/medivet/mock-image";

export function VeterinaryExplainer() {
  return (
    <section
      id="why-vet"
      className="border-t border-slate-200 bg-white py-14 sm:py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:items-center sm:px-6 lg:gap-14 lg:px-8">
        <div className="order-2 sm:order-1">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            What veterinary medicine covers — and why it matters
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Veterinary care is more than vaccines and sick visits. It is a
            continuum of{" "}
            <strong className="font-semibold text-slate-800">
              prevention, early diagnosis, treatment, and recovery
            </strong>{" "}
            designed around species, breed, age, and the way your pet lives each
            day.
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem]">
            <li>
              <span className="font-semibold text-teal-900">Wellness exams</span>{" "}
              establish baselines for weight, dental health, mobility, and
              behavior so changes show up early.
            </li>
            <li>
              <span className="font-semibold text-teal-900">
                Diagnostics &amp; surgery
              </span>{" "}
              are coordinated with pain control, monitoring, and a clear home
              plan — not a rushed discharge.
            </li>
            <li>
              <span className="font-semibold text-teal-900">Emergencies</span>{" "}
              need a team that stabilizes first, explains options second, and
              stays reachable when the unexpected happens at night.
            </li>
          </ul>
          <p className="mt-8">
            <Link
              href="/about"
              className="text-sm font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-950"
            >
              Read how Medivet approaches care
            </Link>
          </p>
        </div>
        <div className="order-1 sm:order-2">
          <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
            <Image
              src={mockImages.vetExam}
              alt="Veterinarian examining a dog — mock photo for demo"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
              priority={false}
            />
            <figcaption className="border-t border-slate-200 bg-white px-4 py-3 text-xs text-slate-500">
              Mock image — replace with your clinic photography before launch.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
