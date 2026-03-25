import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { mockImages } from "@/components/medivet/mock-image";
import { SiteChrome } from "@/components/medivet/site-chrome";

export const metadata: Metadata = {
  title: "Pet care guides — Medivet",
  description:
    "Practical, educational topics on wellness, nutrition, dental health, and knowing when to seek urgent veterinary care.",
};

const topics = [
  {
    title: "Wellness exams: what we are really checking",
    body: "Weight trends, dental odor and tartar, joint stiffness, heart and lung sounds, lymph nodes, skin and coat, and subtle behavior shifts. Small findings today often prevent big problems tomorrow.",
  },
  {
    title: "Nutrition without the noise",
    body: "We help you match calories, protein, and feeding structure to your pet's age, breed risk, and activity — without chasing fad diets that are not evidence-based.",
  },
  {
    title: "Dental care at home and in-clinic",
    body: "Tooth brushing, VOHC-approved chews, and professional cleanings each play a role. We prioritize anesthesia safety and honest staging so you know what is optional versus urgent.",
  },
  {
    title: "When to call the emergency line",
    body: "Difficulty breathing, nonstop vomiting, bloated abdomen, inability to urinate, seizures, major trauma, or toxin exposure are emergencies. If you are unsure, call — we would rather triage early.",
  },
];

export default function PetCarePage() {
  return (
    <SiteChrome>
      <div className="border-b border-slate-200 bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-800">
            Education
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Pet care topics from your veterinary team
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            These guides are for general education and do not replace an exam.
            If something seems off with your pet,{" "}
            <Link
              href="/#consultation"
              className="font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-950"
            >
              book a visit
            </Link>{" "}
            or call our 24/7 line when it is urgent.
          </p>
          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
            <ul className="space-y-6">
              {topics.map((t) => (
                <li
                  key={t.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h2 className="text-lg font-semibold text-teal-900">
                    {t.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem]">
                    {t.body}
                  </p>
                </li>
              ))}
            </ul>
            <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <Image
                src={mockImages.catPortrait}
                alt="Cat resting — mock photo for demo"
                width={900}
                height={1100}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 480px, 100vw"
              />
              <figcaption className="border-t border-slate-200 px-4 py-3 text-xs text-slate-500">
                Mock image — illustrative only.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </SiteChrome>
  );
}
