import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/medivet/site-chrome";

export const metadata: Metadata = {
  title: "Contact — Medivet",
  description:
    "Reach Medivet for appointments, questions, and 24/7 emergency veterinary support.",
};

export default function ContactPage() {
  return (
    <SiteChrome>
      <div className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Contact Medivet
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Replace the placeholders below with your real address, hours, and
            routing rules before launch. The numbers here are demo values.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Appointments
              </h2>
              <p className="mt-3 text-slate-700">
                <a
                  href="tel:+15555550101"
                  className="text-lg font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-950"
                >
                  (555) 555-0101
                </a>
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Monday–Saturday · 8am–6pm (placeholder hours)
              </p>
              <p className="mt-6">
                <Link
                  href="/#consultation"
                  className="inline-flex h-11 items-center justify-center rounded-lg bg-teal-700 px-5 text-sm font-medium text-white shadow-sm hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                >
                  Book online
                </Link>
              </p>
            </div>
            <div className="rounded-2xl border border-teal-200 bg-teal-50/80 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-teal-900">
                24/7 emergency line
              </h2>
              <p className="mt-3 text-slate-700">
                <a
                  href="tel:+15555550100"
                  className="text-lg font-semibold text-teal-900 underline decoration-teal-300 underline-offset-4 hover:text-teal-950"
                >
                  (555) 555-0100
                </a>
              </p>
              <p className="mt-2 text-sm text-slate-600">
                If your pet is unstable, call now. We will triage over the phone
                and direct you to the fastest safe option.
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-600">
            <p className="font-medium text-slate-800">Clinic address (placeholder)</p>
            <p className="mt-2">
              123 River Road, Suite 100
              <br />
              Your City, ST 00000
            </p>
          </div>
        </div>
      </div>
    </SiteChrome>
  );
}
