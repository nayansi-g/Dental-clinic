export const clinic = {
  name: "Decare Dental Clinic",
  shortName: "Decare",
  url: "https://www.decaredentalclinic.com",
  email: "care@decaredentalclinic.com",
  supportEmail: "appointments@decaredentalclinic.com",
  phone: "+91-7052-101-786",
  telephoneHref: "tel:+917052101786",
  priceRange: "$$",
  description:
    "Decare Dental Clinic provides preventive, cosmetic, restorative, pediatric, and emergency dental care with experienced dentists, modern technology, and patient-first treatment plans.",
  tagline: "Patient-first dental care for healthier, brighter smiles.",
  address: {
    streetAddress: "1247 Plot No. 39, 15th Phase, LHB Colony",
    addressLocality: "Kanpur",
    addressRegion: "Uttar Pradesh",
    postalCode: "208011",
    addressCountry: "IN",
  },
  geo: {
    latitude: "26.4499",
    longitude: "80.3319",
  },
  openingHours: [
    "Mo-Sa 09:00-20:00",
    "Su 10:00-14:00",
  ],
  socialLinks: [
    "https://www.facebook.com/decaredentalclinic",
    "https://www.instagram.com/decaredentalclinic",
    "https://x.com/decaredental",
    "https://www.youtube.com/@decaredentalclinic",
  ],
};

export const primaryNav = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "FAQ", href: "/faq" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const serviceLinks = [
  { name: "Root Canal Therapy", href: "/services#services-list" },
  { name: "Teeth Alignment", href: "/services#services-list" },
  { name: "Cosmetic Dentistry", href: "/services#services-list" },
  { name: "Oral Hygiene Care", href: "/services#services-list" },
  { name: "Emergency Dental Care", href: "/book_an_appointment" },
  { name: "Cavity Inspection", href: "/services#services-list" },
];

export const homepageKeywords = [
  "dental clinic in Kanpur",
  "best dentist in Kanpur",
  "emergency dental care",
  "cosmetic dentistry",
  "root canal treatment",
  "family dentist",
];

export function absoluteUrl(path = "/") {
  return new URL(path, clinic.url).toString();
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = "/banner-img.png",
}) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const fullTitle = title ? `${title} | ${clinic.name}` : `${clinic.name} | ${clinic.tagline}`;

  return {
    metadataBase: new URL(clinic.url),
    title: title || clinic.tagline,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      siteName: clinic.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title || clinic.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function medicalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
    "@id": `${clinic.url}/#organization`,
    name: clinic.name,
    url: clinic.url,
    description: clinic.description,
    telephone: clinic.phone,
    email: clinic.email,
    image: absoluteUrl("/banner-img.png"),
    priceRange: clinic.priceRange,
    address: {
      "@type": "PostalAddress",
      ...clinic.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      ...clinic.geo,
    },
    openingHoursSpecification: clinic.openingHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      opens: hours.split(" ")[1].split("-")[0],
      closes: hours.split(" ")[1].split("-")[1],
      dayOfWeek:
        hours.startsWith("Mo-Sa")
          ? [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ]
          : ["Sunday"],
    })),
    sameAs: clinic.socialLinks,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${clinic.url}/#website`,
    url: clinic.url,
    name: clinic.name,
    description: clinic.description,
    publisher: {
      "@id": `${clinic.url}/#organization`,
    },
    inLanguage: "en",
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceSchema(services) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "MedicalProcedure",
      position: index + 1,
      name: service.title,
      description: service.description,
      procedureType: "DentalProcedure",
      provider: {
        "@id": `${clinic.url}/#organization`,
      },
    })),
  };
}
