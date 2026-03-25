import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { mockImages } from "@/components/medivet/mock-image";
import { SiteChrome } from "@/components/medivet/site-chrome";

export const metadata: Metadata = {
  title: "About veterinary care — Medivet",
  description:
    "How modern veterinary clinics support prevention, diagnosis, surgery, and emergencies — and what to expect from Medivet.",
};

export default function AboutPage() {
  return (
    <SiteChrome>
      <article className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-800">
            About Medivet
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Veterinary care, explained in plain language
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            A veterinary clinic is both a medical practice and a teaching
            moment. We help you understand{" "}
            <strong className="font-semibold text-slate-800">
              what we are seeing, what it means, and what choices you have
            </strong>{" "}
            — especially when the path forward is not obvious.
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
            <Image
              src={mockImages.happyDog}
              alt="Dog on an exam table — mock photo for demo"
              width={1200}
              height={720}
              className="h-auto w-full object-cover"
              sizes="(min-width: 1024px) 72rem, 100vw"
            />
            <p className="border-t border-slate-200 bg-white px-4 py-3 text-xs text-slate-500">
              Mock image — replace with your own photography.
            </p>
          </div>
          <div className="mt-12 max-w-3xl space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                How we think about your pet
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
                Every appointment starts with history: appetite, energy,
                bathroom habits, mobility, and behavior at home. Those details
                often matter as much as lab work — they tell us what changed,
                and how fast.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                Preventive care is strategic
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
                Vaccines, parasite control, dental assessments, and nutrition
                conversations are not chores. They are the lowest-cost way to
                avoid painful, expensive problems later — especially dental
                disease and obesity-related complications.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                Surgery and anesthesia safety
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
                When surgery is recommended, we focus on candid risk/benefit
                discussion, pre-anesthetic screening tailored to your pet, and
                multimodal pain control before, during, and after the procedure.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                Emergencies need a steady hand
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
                In urgent cases, the first job is stabilization: airway,
                breathing, circulation, and pain. Once your pet is safe, we walk
                you through diagnostics and next steps with clear timeframes.
              </p>
            </section>
          </div>
          <p className="mt-12">
            <Link
              href="/pet-care"
              className="text-sm font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-950"
            >
              Browse pet care topics
            </Link>
            <span className="mx-2 text-slate-300" aria-hidden>
              ·
            </span>
            <Link
              href="/#consultation"
              className="text-sm font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-950"
            >
              Book a consultation
            </Link>
          </p>
        </div>
      </article>
    </SiteChrome>
  );
}
