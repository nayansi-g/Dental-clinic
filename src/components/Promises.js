import {
  Stethoscope,
  ScanLine,
  ClipboardList,
  Sparkles,
  Users,
  Hospital,
} from "lucide-react";

const promises = [
  {
    title: "Experienced Dental Specialists",
    desc: "Our patients receive care from dentists who focus on precision, comfort, and clear communication throughout every stage of treatment.",
    icon: Stethoscope,
  },
  {
    title: "Advanced Dental Technology",
    desc: "We use modern imaging and diagnostic tools to improve accuracy, reduce delays, and plan treatment more effectively.",
    icon: ScanLine,
  },
  {
    title: "Comprehensive Care Under One Roof",
    desc: "From preventive checkups to restorative and cosmetic dentistry, we make it easier to manage your smile in one trusted clinic.",
    icon: ClipboardList,
  },
  {
    title: "Comfort-Focused Visits",
    desc: "We aim to make each visit calm, respectful, and as stress-free as possible for both adults and children.",
    icon: Sparkles,
  },
  {
    title: "Shared Treatment Decisions",
    desc: "We explain diagnoses, treatment options, and expected outcomes clearly so you can choose care with confidence.",
    icon: Users,
  },
  {
    title: "Emergency Dental Support",
    desc: "When urgent issues happen, our team is ready to guide you quickly with practical next steps and fast appointment support.",
    icon: Hospital,
  },
];

export default function OurPromises() {
  return (
    <section className="bg-white px-4 py-16">

        <div className="section-heading">
          <p className="mb-3 text-center text-sm font-bold uppercase tracking-wide text-[#3563E9] sm:text-base md:text-[19px]">
            Why Patients Choose Us
          </p>
          <h2 className="text-center text-[clamp(2rem,7vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.04em] text-[#06245b]">
            Our Care Promises
          </h2>
          <p className="mx-auto mt-3 mb-6 max-w-2xl text-gray-500">
          We know patients have many choices when selecting a dental clinic, so we
          focus on trust, technology, comfort, and treatment quality in every
          visit.
        </p>
        </div>
      

      <div className="mx-auto grid max-w-6xl border border-gray-200 md:grid-cols-2">
        {promises.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex gap-5 border border-gray-200 bg-white p-8 transition hover:shadow-md"
            >
              <div className="text-blue-500">
                <Icon size={48} strokeWidth={1.5} />
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
