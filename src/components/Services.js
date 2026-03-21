import Image from "next/image";
import Link from "next/link";
import {
  ShieldPlus,
  SmilePlus,
  ScanLine,
  Users,
  Stethoscope,
  Sparkles,
} from "lucide-react";

const leftServices = [
  {
    title: "Root Canal Therapy",
    description: "Relieve infection, protect your tooth, and restore comfort with gentle root canal care.",
    icon: ShieldPlus,
  },
  {
    title: "Teeth Alignment",
    description: "Improve spacing, bite balance, and smile confidence with orthodontic planning.",
    icon: Users,
  },
  {
    title: "Cosmetic Dentistry",
    description: "Enhance tooth shape, shade, and symmetry for a brighter natural-looking smile.",
    icon: ScanLine,
  },
];

const rightServices = [
  {
    title: "Oral Hygiene",
    description: "Keep gums healthy and reduce plaque buildup with preventive cleanings and exams.",
    icon: SmilePlus,
  },
  {
    title: "Dental Consultation",
    description: "Get clear answers, treatment guidance, and personalized recommendations.",
    icon: Stethoscope,
  },
  {
    title: "Cavity Inspection",
    description: "Catch early decay before it becomes painful with careful examinations and imaging.",
    icon: Sparkles,
  },
];

function ServiceCard({ title, description, Icon, align = "left" }) {
  return (
    <div className="rounded-md border border-[#d9d9d9] bg-transparent px-6 py-6">
      <div
        className={`flex items-start gap-5 ${
          align === "right"
            ? "flex-row text-left"
            : "flex-row text-left lg:flex-row-reverse lg:text-right"
        }`}
      >
        <Icon className="mt-1 h-14 w-14 shrink-0 text-[#2f6cf6]" strokeWidth={1.7} />

        <div>
          <h3 className="text-[18px] font-bold leading-tight text-[#06245b] sm:text-[20px]">
            {title}
          </h3>
          <p className="mt-1 text-base leading-[1.3] text-[#7a7a7a] sm:mt-2 sm:text-[14px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="section-shell px-4 md:px-8 lg:px-10 py-20    bg-white">
      <div className="site-shell">
         <div className="section-heading">
          <p className="mb-3 text-center text-sm font-bold uppercase tracking-wide text-[#3563E9] sm:text-base md:text-[19px]">
            Our Services
          </p>
          <h2 className="text-center text-[clamp(2rem,7vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.04em] text-[#06245b]">
            Complete Dental Services
          </h2>
        </div>
       

        <div className="mt-14 grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)_minmax(0,1fr)] lg:gap-8">
          <div className="space-y-4">
            {leftServices.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                Icon={service.icon}
                align="left"
              />
            ))}
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-[420px]">
              <Image
                src="/services.png"
                alt="Dental treatment services including cosmetic, preventive, and restorative care"
                width={420}
                height={560}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>

          <div className="space-y-4">
            {rightServices.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                Icon={service.icon}
                align="right"
              />
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="inline-flex h-[52px] items-center justify-center rounded-md bg-gradient-to-r from-[#1699e8] to-[#4166e8] px-8 text-[14px] font-semibold uppercase text-white shadow-[0_16px_35px_rgba(65,102,232,0.22)] transition hover:scale-[1.02]"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
