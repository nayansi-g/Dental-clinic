import BannerHero from "@/components/BannerHero";
import AppointmentCta from "@/components/AppoinmentCTA";
import StructuredData from "@/components/StructuredData";
import AccordionListClient from "@/components/client/AccordionListClient";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  ScanLine,
  ShieldPlus,
  SmilePlus,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import {
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  serviceSchema,
} from "@/lib/site";

export const metadata = buildMetadata({
  title: "Dental Services for Preventive, Cosmetic and Emergency Care",
  description:
    "Explore Crown Dental Clinic services including root canal therapy, oral hygiene, cosmetic dentistry, cavity checks, family dental care, and emergency appointments.",
  path: "/services",
  keywords: [
    "dental services in Noida",
    "root canal treatment",
    "cosmetic dentist",
    "oral hygiene care",
    "emergency dentist",
  ],
});

const serviceHighlights = [
  "Experienced dentists and hygienists",
  "Digital diagnostics and treatment planning",
  "Comfort-focused visits for children and adults",
  "Emergency appointment support when needed",
];

const services = [
  {
    title: "Root Canal Therapy",
    description:
      "Save infected teeth with precise treatment that removes pain, preserves structure, and protects long-term oral health.",
    details:
      "Our root canal care uses modern diagnostic tools and careful step-by-step treatment to remove infection while keeping your natural tooth intact. We focus on comfort, clear aftercare, and a smooth recovery.",
    includes: [
      "Digital X-rays and detailed diagnosis",
      "Gentle infection removal and tooth preservation",
      "Restoration planning after treatment",
    ],
    icon: ShieldPlus,
  },
  {
    title: "Teeth Alignment",
    description:
      "Straighten crowded or uneven teeth with care designed to improve appearance, bite balance, and oral hygiene.",
    details:
      "We evaluate bite spacing, smile symmetry, and day-to-day comfort before recommending the best alignment option. The goal is a healthier bite that also looks great.",
    includes: [
      "Smile and bite assessment",
      "Planning for spacing and crowding issues",
      "Progress checks throughout treatment",
    ],
    icon: Users,
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Refresh your smile with customized care that improves tooth color, shape, and confidence.",
    details:
      "From whitening guidance to aesthetic reshaping recommendations, our cosmetic care is built around natural-looking results that fit your facial features and personal goals.",
    includes: [
      "Smile design consultation",
      "Color and shape improvement options",
      "Natural-looking finish planning",
    ],
    icon: Sparkles,
  },
  {
    title: "Oral Hygiene Care",
    description:
      "Protect your teeth and gums with preventive cleanings, professional evaluations, and home-care guidance.",
    details:
      "Routine hygiene visits help prevent plaque buildup, gum irritation, and future dental complications. We combine cleaning, exam support, and practical habits you can keep at home.",
    includes: [
      "Professional cleaning and polishing",
      "Preventive checks for gum health",
      "Easy daily-care recommendations",
    ],
    icon: SmilePlus,
  },
  {
    title: "Dental Consultation",
    description:
      "Get expert support for treatment questions, dental concerns, and the right next steps before small issues become larger problems.",
    details:
      "Our team guides patients through symptoms, treatment choices, and appointment preparation so every visit feels informed and reassuring from the start.",
    includes: [
      "Treatment and symptom guidance",
      "Care planning before procedures",
      "Friendly support for patient questions",
    ],
    icon: Stethoscope,
  },
  {
    title: "Cavity Inspection",
    description:
      "Detect decay early with thorough examinations that identify hidden issues and help you avoid more complex procedures later.",
    details:
      "We inspect vulnerable areas carefully and explain what we see in simple language, so you understand the issue, the urgency, and the most effective treatment path.",
    includes: [
      "Early decay detection",
      "Digital assessment and recommendations",
      "Preventive next-step treatment planning",
    ],
    icon: ScanLine,
  },
];

const serviceFaqs = [
  {
    question: "How do I know which dental treatment is right for me?",
    answer:
      "We begin with an exam and consultation to understand your symptoms, oral health history, and smile goals. From there, we recommend the treatment that best fits your needs, comfort, and budget.",
  },
  {
    question: "Do you provide preventive care as well as advanced treatments?",
    answer:
      "Yes. We offer preventive hygiene visits, cavity inspections, and oral health maintenance alongside restorative and cosmetic services, so patients can manage both current concerns and long-term care.",
  },
  {
    question: "Are dental procedures performed with patient comfort in mind?",
    answer:
      "Absolutely. Comfort is built into each step of care, from consultation and diagnosis to treatment and recovery guidance. We take time to explain each procedure and help patients feel at ease.",
  },
  {
    question: "Can I book an appointment for my whole family?",
    answer:
      "Yes. We welcome individual patients and families, and we can help coordinate routine visits, consultations, and follow-up appointments in a way that fits your schedule.",
  },
];

const processSteps = [
  {
    title: "Consultation",
    text: "We listen to your concerns, review symptoms, and understand your oral health goals before treatment begins.",
  },
  {
    title: "Diagnosis",
    text: "Our team uses digital diagnostics and careful examinations to identify the root cause accurately.",
  },
  {
    title: "Treatment Plan",
    text: "You receive a clear explanation of options, expected outcomes, timing, and aftercare guidance.",
  },
  {
    title: "Ongoing Support",
    text: "We stay involved with follow-ups, preventive advice, and maintenance to protect your smile long term.",
  },
];

export default function ServicesPage() {
  const accordionItems = services.map((service) => ({
    title: service.title,
    content: (
      <div>
        <p className="text-[15px] leading-[1.9] text-[#6f7688]">{service.details}</p>
        <div className="mt-5 space-y-3">
          {service.includes.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[#2f6cf6]" />
              <span className="text-sm font-medium leading-[1.7] text-[#17305E]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <div className="overflow-x-hidden bg-white">
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <StructuredData data={serviceSchema(services)} />
      <StructuredData data={faqSchema(serviceFaqs)} />

      <BannerHero heading="Our Services" pagename="Services" />

      <section className="section-shell bg-white px-4 py-16 md:px-8 lg:px-14">
        <div className="site-shell grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-[720px]">
            <p className="text-base font-bold uppercase tracking-wide text-[#3563E9] md:text-lg">
              Modern Dental Care
            </p>
            <h2 className="mt-4 text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] text-[#06245b]">
              Complete Dental Services For Healthier, Happier Smiles
            </h2>
            <p className="mt-5 text-[15px] leading-[1.9] text-[#6f7688] sm:text-base">
              We provide preventive, restorative, and cosmetic dental care with a
              warm patient-first experience. Every treatment is designed to improve
              comfort, confidence, and long-term oral health for children, adults,
              and families.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {serviceHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[10px] border border-[#dfe8ff] bg-[#f7faff] px-4 py-4"
                >
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#2f6cf6]" />
                  <p className="text-sm font-medium leading-[1.6] text-[#17305E]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#services-list"
                className="inline-flex h-[54px] items-center justify-center rounded-[6px] bg-gradient-to-r from-[#1699e8] to-[#4166e8] px-7 text-[15px] font-semibold uppercase text-white shadow-[0_16px_35px_rgba(65,102,232,0.22)] transition hover:scale-[1.02]"
              >
                Explore Services
              </Link>
              <Link
                href="/book_an_appointment"
                className="inline-flex h-[54px] items-center justify-center rounded-[6px] border border-[#c9d7ff] px-7 text-[15px] font-semibold uppercase text-[#17305E] transition hover:border-[#3563E9] hover:text-[#3563E9]"
              >
                Book Appointment
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px]">
              <div className="absolute inset-0 rotate-[5deg] rounded-[16px] bg-gradient-to-b from-[#3b63e6] to-[#1699e8]" />
              <div className="relative overflow-hidden rounded-[16px] border-[10px] border-white bg-white shadow-[0_18px_50px_rgba(6,36,91,0.14)]">
                <Image
                  src="/services.png"
                  alt="Dental treatment services including root canal, hygiene care, and cosmetic dentistry"
                  width={520}
                  height={620}
                  className="h-[420px] w-full object-cover sm:h-[520px]"
                  priority
                />
              </div>

              <div className="absolute bottom-5 left-4 right-4 rounded-[14px] bg-white px-5 py-5 shadow-[0_18px_40px_rgba(6,36,91,0.12)] sm:left-auto sm:right-[-20px] sm:w-[250px]">
                <div className="flex items-center gap-3">
                  <Clock3 className="h-10 w-10 rounded-full bg-[#ecf3ff] p-2 text-[#2f6cf6]" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#3563E9]">
                      Available Care
                    </p>
                    <p className="mt-1 text-lg font-bold text-[#06245b]">
                      Same-day support for urgent dental concerns
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services-list" className="bg-[#f7faff] px-4 py-16 md:px-8 lg:px-14">
        <div className="site-shell">
          <div className="max-w-[760px]">
            <p className="text-sm font-bold uppercase tracking-wide text-[#3563E9] sm:text-base">
              Service List
            </p>
            <h2 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.08] text-[#06245b]">
              Explore Treatments With Expandable Details
            </h2>
            <p className="mt-4 text-[15px] leading-[1.9] text-[#6f7688] sm:text-base">
              Open any service below to view a fuller description and what is
              included in the treatment experience.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="overflow-hidden rounded-[14px] border border-[#dbe5ff] bg-white shadow-[0_10px_30px_rgba(6,36,91,0.05)]"
                >
                  <div className="flex items-start gap-4 px-5 py-5 sm:px-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[12px] bg-[#eef4ff]">
                      <Icon className="h-7 w-7 text-[#2f6cf6]" strokeWidth={1.8} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl font-bold text-[#06245b]">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-[1.8] text-[#6f7688]">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="px-5 pb-5 sm:px-6">
                    <AccordionListClient
                      items={[
                        {
                          title: "View treatment details",
                          content: accordionItems.find(
                            (item) => item.title === service.title
                          )?.content,
                        },
                      ]}
                      defaultOpen={null}
                      variant="soft"
                      questionClassName="text-[15px]"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8 lg:px-14">
        <div className="site-shell grid gap-10 rounded-[18px] bg-[#0f2d62] px-6 py-10 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:py-14">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[#4f7df3] sm:text-base">
              How We Work
            </p>
            <h2 className="mt-3 text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.08] text-white">
              Clear Steps, Caring Support, Better Results
            </h2>
            <p className="mt-4 max-w-[520px] text-[15px] leading-[1.9] text-white/75 sm:text-base">
              Our process keeps treatment simple and transparent, so you always
              know what to expect before, during, and after your visit.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[14px] border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm"
              >
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#79a2ff]">
                  0{index + 1}
                </div>
                <h3 className="mt-3 text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-[1.8] text-white/75">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-[#0d2b63] px-6 py-16 md:px-12 lg:px-16">
            <div className="max-w-[560px]">
              <p className="text-[14px] font-bold uppercase tracking-wide text-[#3f74ff]">
                FAQ
              </p>

              <h2 className="mt-2 text-[clamp(2.2rem,5vw,3.6rem)] font-bold leading-tight text-white">
                Frequently Asked
                <br />
                Service Questions
              </h2>

              <p className="mt-4 max-w-[480px] text-[15px] leading-[1.9] text-white/75">
                Learn more about our treatments, appointments, and patient care
                approach.
              </p>

              <div className="mt-10">
                <AccordionListClient items={serviceFaqs} defaultOpen={0} />
              </div>
            </div>
          </div>

          <div className="relative min-h-[400px] lg:min-h-[720px]">
            <Image
              src="/faq-img.png"
              alt="Dental consultation for treatment planning and patient questions"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <AppointmentCta />
    </div>
  );
}
