import { getMedivetSiteUrl } from "@/lib/medivet/site-url";

const buildJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: "Medivet",
  description:
    "Compassionate veterinary care for dogs and cats including surgery, vaccines, dental, and preventive care with 24/7 emergency support.",
  url: getMedivetSiteUrl(),
  telephone: "+1-555-555-0100",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Care Lane",
    addressLocality: "Your City",
    addressRegion: "ST",
    postalCode: "00000",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "00:00",
      closes: "23:59",
      description: "24/7 emergency line — call anytime for urgent concerns.",
    },
  ],
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 0,
      longitude: 0,
    },
    geoRadius: "25000",
    description: "City and surrounding neighborhoods — update with real service area.",
  },
  sameAs: [],
});

export function MedivetJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
    />
  );
}
