import { brand, contact, site } from "@/content/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: site.name,
    slogan: brand.taglinePrimary,
    url: site.url,
    email: contact.email,
    telephone: contact.phoneDisplay,
    description:
      "In-home pediatric speech therapy serving Northwest Houston, including Spring, The Woodlands, Tomball, Conroe, and Magnolia.",
    areaServed: [
      { "@type": "City", name: "Spring", containedInPlace: { "@type": "State", name: "Texas" } },
      { "@type": "City", name: "The Woodlands", containedInPlace: { "@type": "State", name: "Texas" } },
      { "@type": "City", name: "Tomball", containedInPlace: { "@type": "State", name: "Texas" } },
      { "@type": "City", name: "Conroe", containedInPlace: { "@type": "State", name: "Texas" } },
      { "@type": "City", name: "Magnolia", containedInPlace: { "@type": "State", name: "Texas" } },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
