import BannerHero from "@/components/BannerHero";
import DoctorsSection from "@/components/Doctor";
import AppointmentCta from "@/components/AppoinmentCTA";
import StructuredData from "@/components/StructuredData";
import AccordionListClient from "@/components/client/AccordionListClient";
import Image from "next/image";
import Link from "next/link";
import {
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
} from "@/lib/site";

export const metadata = buildMetadata({
  title: "About Our Dental Clinic and Experienced Dentists",
  description:
    "Learn about Crown Dental Clinic, our experienced dentists, patient-first philosophy, and our commitment to preventive, restorative, and emergency dental care.",
  path: "/about",
  keywords: [
    "about dental clinic",
    "experienced dentist team",
    "patient-first dental care",
    "family dentist in Noida",
  ],
});

const aboutFaqs = [
  {
    question: "What makes Crown Dental Clinic different?",
    answer:
      "We combine modern dental technology, experienced clinicians, and a calm patient-first approach so treatment feels more transparent, comfortable, and personalized.",
  },
  {
    question: "Do you create customized treatment plans?",
    answer:
      "Yes. We build treatment recommendations around each patient’s oral health condition, goals, budget, and schedule rather than using a one-size-fits-all approach.",
  },
  {
    question: "Can I visit your clinic for both routine and advanced care?",
    answer:
      "Yes. Our team supports preventive checkups, cosmetic smile improvements, restorative procedures, and emergency visits in one clinic.",
  },
  {
    question: "Do you welcome anxious dental patients?",
    answer:
      "Absolutely. We focus on clear communication, gentle care, and a supportive environment to help nervous patients feel more comfortable throughout treatment.",
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden bg-white">
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <StructuredData data={faqSchema(aboutFaqs)} />

      <BannerHero heading="About Us" pagename="About" />

      <section className="section-shell bg-white px-4 py-12 md:px-8 lg:px-14">
        <div className="site-shell grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[520px]">
              <div className="absolute inset-0 rotate-[4deg] rounded-[6px] bg-gradient-to-b from-[#3b63e6] to-[#1699e8]" />

              <div className="relative overflow-hidden rotate-[4deg] rounded-[4px] p-3">
                <Image
                  src="/about-img.png"
                  alt="Dentist discussing treatment options with a patient at Crown Dental Clinic"
                  width={520}
                  height={560}
                  className="h-[360px] w-full object-cover sm:h-[440px] lg:h-[520px]"
                  priority
                />
              </div>

              <div className="absolute bottom-6 right-4 z-20 flex items-center gap-3 rounded-[8px] bg-[#FFFFFF] px-5 py-4 shadow-[0_12px_30px_rgba(15,45,103,0.08)] sm:bottom-10 sm:right-[-20px] sm:gap-4 sm:px-8 sm:py-5">
                <span className="text-[42px] font-bold leading-none text-[#3b63e6] sm:text-[58px]">
                  15+
                </span>
                <div className="max-w-[160px] text-base font-bold leading-[1.25] text-[#102d67] sm:text-[18px]">
                  Years of trusted dental care
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[700px]">
            <p className="mb-3 text-base font-bold uppercase tracking-tight text-[#3563E9] md:text-lg">
              About Our Clinic
            </p>

            <h2 className="mt-4 text-[clamp(2.25rem,5vw,3.7rem)] font-bold leading-[1.08] text-[#06245b]">
              Personalized Dental Care Built Around Comfort And Trust
            </h2>

            <p className="mt-3 text-base leading-[1.8] text-[#7b7b7b] sm:mt-4 sm:text-[15px]">
              Crown Dental Clinic was built to give patients a better dental
              experience, one that combines preventive care, smile-focused
              treatments, and emergency support with clear communication at every
              step.
            </p>

            <p className="mt-2 text-base leading-[1.8] text-[#7b7b7b] sm:mt-3 sm:text-[15px]">
              Our dentists work closely with every patient to explain diagnoses,
              outline treatment options, and create practical plans for long-term
              oral health. We care for children, adults, and families with the
              same focus on detail, comfort, and quality.
            </p>

            <Link
              href="/book_an_appointment"
              className="mt-10 inline-flex h-[56px] items-center justify-center rounded-[4px] bg-gradient-to-r from-[#1699e8] to-[#4166e8] px-8 text-[18px] font-medium uppercase text-white shadow-[0_16px_35px_rgba(65,102,232,0.22)] transition hover:scale-[1.02]"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f7faff] px-4 py-16 md:px-8 lg:px-14">
        <div className="site-shell grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[#3563E9] sm:text-base">
              Our Mission
            </p>
            <h2 className="mt-3 text-[clamp(2rem,5vw,3.3rem)] font-bold leading-[1.08] text-[#06245b]">
              Healthy smiles start with education, prevention, and compassionate care
            </h2>
            <p className="mt-4 text-[15px] leading-[1.9] text-[#6f7688] sm:text-base">
              We believe dental visits should help patients feel informed rather
              than overwhelmed. That means spending time on diagnosis, answering
              questions honestly, and using technology that supports safer and more
              efficient treatment planning.
            </p>
          </div>

          <div className="rounded-[18px] bg-white p-6 shadow-[0_16px_40px_rgba(6,36,91,0.08)] sm:p-8">
            <p className="text-sm font-bold uppercase tracking-wide text-[#3563E9] sm:text-base">
              Common Questions
            </p>
            <h2 className="mt-3 text-[clamp(1.8rem,4vw,2.6rem)] font-bold leading-[1.15] text-[#06245b]">
              Learn more about our approach to care
            </h2>
            <div className="mt-8">
              <AccordionListClient items={aboutFaqs} defaultOpen={0} />
            </div>
          </div>
        </div>
      </section>

      <DoctorsSection />
      <AppointmentCta />
    </div>
  );
}
