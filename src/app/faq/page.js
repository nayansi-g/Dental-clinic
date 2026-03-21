import BannerHero from "@/components/BannerHero";
import StructuredData from "@/components/StructuredData";
import AccordionListClient from "@/components/client/AccordionListClient";
import {
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
} from "@/lib/site";

export const metadata = buildMetadata({
  title: "Dental FAQ for Appointments, Treatments and Oral Health",
  description:
    "Read frequently asked questions about dental appointments, oral hygiene, emergency treatment, cosmetic dentistry, children’s dental care, and recovery guidance.",
  path: "/faq",
  keywords: [
    "dental faq",
    "oral health questions",
    "emergency dentist faq",
    "dental appointment questions",
  ],
});

const faqColumns = [
  [
    {
      question: "How often should I get my teeth professionally cleaned?",
      answer:
        "Most patients should schedule a professional dental cleaning every six months, although some may need shorter intervals depending on gum condition or cavity risk.",
    },
    {
      question: "Do you treat patients with dental anxiety?",
      answer:
        "Yes. We focus on calm communication, gentle techniques, and step-by-step guidance so nervous patients feel more supported during treatment.",
    },
    {
      question: "When should a child first visit the dentist?",
      answer:
        "Children should ideally visit the dentist within six months of the first tooth appearing or by their first birthday to establish healthy habits early.",
    },
    {
      question: "What if I have sudden swelling or severe tooth pain?",
      answer:
        "These can be signs of infection or another urgent issue. Contact our clinic as soon as possible so we can guide you and arrange emergency care if needed.",
    },
  ],
  [
    {
      question: "Can cosmetic dentistry also improve function?",
      answer:
        "Yes. Some cosmetic treatments can also help with worn enamel, minor shape corrections, bite balance, or damaged teeth, depending on the case.",
    },
    {
      question: "How long does recovery take after a root canal?",
      answer:
        "Many patients return to normal routines quickly, though mild tenderness can last a short time. We provide aftercare guidance based on the specific treatment performed.",
    },
    {
      question: "Do you offer same-day appointments?",
      answer:
        "We try to accommodate urgent concerns as quickly as possible and may offer same-day appointments when available, especially for emergency dental issues.",
    },
    {
      question: "Can I book appointments for my family together?",
      answer:
        "Yes. We welcome family dental visits and can help organize appointments in a way that works for your schedule.",
    },
  ],
];

export default function FAQPage() {
  const allFaqs = faqColumns.flat();

  return (
    <div className="bg-white">
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <StructuredData data={faqSchema(allFaqs)} />

      <BannerHero heading="Frequently Asked Questions" pagename="FAQ" />

      <section className="bg-gray-100 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-[#3563E9] sm:text-base">
              Dental Help Center
            </p>
            <h2 className="mt-3 text-[clamp(2rem,5vw,2.4rem)] font-bold text-[#0b2a63]">
              Answers To Common Questions About Dental Care
            </h2>
            <p className="mt-4 text-[15px] leading-[1.9] text-[#6f7688] sm:text-base">
              Explore quick answers about appointments, oral hygiene, children’s
              dental visits, emergency treatment, and common procedures.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {faqColumns.map((column, index) => (
              <div key={index} className="space-y-5">
                <AccordionListClient items={column} defaultOpen={0} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
