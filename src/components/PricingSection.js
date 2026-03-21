import { CheckCircle2, ShieldPlus, HeartPulse, Sparkles } from "lucide-react";

const plans = [
  {
    id: 1,
    title: "Preventive Care Plan",
    price: 49,
    icon: ShieldPlus,
    features: [
      "Routine dental examination",
      "Professional teeth cleaning",
      "Digital cavity screening",
      "Personalized oral hygiene guidance",
      "Annual preventive care reminders",
    ],
  },
  {
    id: 2,
    title: "Smile Care Plan",
    price: 99,
    icon: HeartPulse,
    features: [
      "All preventive care plan features",
      "Whitening and smile consultation",
      "Priority appointment scheduling",
      "Restorative treatment planning",
      "Follow-up comfort checks",
    ],
  },
  {
    id: 3,
    title: "Family Dental Plan",
    price: 149,
    icon: Sparkles,
    features: [
      "Family-friendly hygiene support",
      "Flexible consultation visits",
      "Emergency dental guidance",
      "Pediatric and adult care planning",
      "Ongoing treatment coordination",
    ],
  },
];

function PricingCard({ plan }) {
  const Icon = plan.icon;

  return (
    <div className="flex h-full flex-col rounded-xl border border-gray-100 bg-white px-5 pb-7 pt-8 shadow-lg sm:px-6 sm:pb-8 sm:pt-9 md:px-7 lg:px-8">
      <div className="text-center">
        <Icon
          className="mx-auto h-9 w-9 text-[#3d67e8] sm:h-10 sm:w-10"
          strokeWidth={1.6}
        />

        <h3 className="mt-4 text-[22px] font-bold text-[#08285f] sm:mt-5 sm:text-[24px] lg:text-[26px]">
          {plan.title}
        </h3>

        <div className="mt-4 flex flex-wrap items-end justify-center gap-x-1 gap-y-1">
          <span className="text-[40px] font-bold leading-none text-[#3d67e8] xs:text-[42px] sm:text-[48px] lg:text-[56px]">
            ${plan.price}
          </span>
          <span className="mb-1 text-[18px] font-bold text-[#08285f] sm:text-[20px] lg:text-[22px]">
            /
          </span>
          <span className="mb-[2px] text-[18px] font-bold text-[#08285f] sm:text-[20px] lg:text-[22px]">
            Starting
          </span>
        </div>

        <div className="mx-auto mt-5 h-px w-full max-w-[235px] bg-[#e7e7e7]" />
      </div>

      <ul className="mt-7 space-y-3 sm:mt-8 sm:space-y-4">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0 text-[#3d67e8]"
              strokeWidth={1.7}
            />
            <span className="text-[14px] leading-[1.7] text-[#7a7a7a] sm:text-[15px] lg:text-[16px]">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-7 flex flex-1 items-end justify-center sm:mt-8">
        <button className="inline-flex h-11 w-full max-w-[180px] items-center justify-center rounded-md bg-gradient-to-r from-[#1699e8] to-[#4166e8] px-6 text-[13px] font-medium uppercase tracking-wide text-white shadow-[0_16px_30px_rgba(65,102,232,0.22)] transition hover:scale-[1.02] sm:h-[44px] sm:w-auto sm:min-w-[150px] sm:px-7 sm:text-[14px]">
          Choose Plan
        </button>
      </div>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-10 lg:py-24 xl:px-14">
      <div className="site-shell mx-auto w-full max-w-[1400px]">
        <div className="mt-4 sm:mt-8">
          <p className="mb-3 text-center text-sm font-bold uppercase tracking-wide text-[#3563E9] sm:text-base md:text-[18px]">
            Care Plans
          </p>

          <h2 className="text-center text-[clamp(2rem,7vw,3.6rem)] font-bold leading-[1.05] tracking-[-0.04em] text-[#06245b]">
            Affordable Dental Care Options
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 md:gap-6 xl:mt-14 xl:grid-cols-3 xl:gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
