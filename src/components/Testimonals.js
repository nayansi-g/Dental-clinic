import Image from "next/image";
import { MapPin, User, Star, Quote, Building2 } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ananya Sharma",
    role: "Root canal patient",
    image: "/testimonals1.png",
    text: `I came in with severe tooth pain and left feeling relieved, informed, and genuinely cared for. The dentist explained every step of the treatment and made the entire visit much less stressful than I expected.`,
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Family dental care patient",
    image: "/testimonal2.png",
    text: `Our whole family now visits Decare Dental Clinic. The staff is warm, the appointments run on time, and the clinic does a great job balancing professional care with a comfortable patient experience.`,
  },
];

const clinicLocations = [
  "Kanpur Branch",
  "Lucknow Branch",
  "Delhi Branch",
  "Noida Branch",
  "Gurugram Branch",
  "Ghaziabad Branch",
];

const dentalDepartments = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Orthodontics",
  "Root Canal Treatment",
  "Dental Implants",
  "Pediatric Dentistry",
  "Oral Surgery",
  "Teeth Whitening",
  "Periodontics",
  "Emergency Dental Care",
];

function TestimonialCard({ item }) {
  return (
    <div className="relative rounded-xl bg-white px-5 pb-6 pt-14 shadow-lg sm:px-6 sm:pb-7 md:px-8">
      <div className="absolute left-5 top-[-34px] sm:left-6 md:left-8">
        <div className="rounded-md border border-[#4f6cf0] bg-white p-[4px] shadow-[0_8px_18px_rgba(79,124,240,0.12)]">
          <div className="h-[58px] w-[58px] overflow-hidden rounded-[4px] sm:h-[62px] sm:w-[62px] md:h-[64px] md:w-[64px]">
          <Image
            src={item.image}
            alt={`${item.name} sharing a review about dental care at Decare Dental Clinic`}
            width={64}
            height={64}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <Quote
        className="absolute right-4 top-4 h-10 w-10 text-[#bcd1f7] sm:right-6 sm:top-5 sm:h-12 sm:w-12 md:right-8 md:top-6 md:h-14 md:w-14"
        strokeWidth={1.8}
      />

      <div className="mb-5 flex items-center gap-1 text-[#f4b400]">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current sm:h-5 sm:w-5" />
        ))}
      </div>

      <p className="max-w-[470px] text-[14px] leading-[1.9] text-[#7a7a7a] sm:text-[15px] sm:leading-[2]">
        {item.text}
      </p>

      <div className="mt-5">
        <h3 className="text-[18px] font-bold text-[#0b2a63] sm:text-[19px] md:text-[20px]">
          {item.name}
        </h3>
        <p className="mt-1 text-[14px] text-[#3563e9] sm:text-[15px]">
          {item.role}
        </p>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section className="relative bg-[#f5f7fb] pt-0">
      <div className="h-[72px] bg-white sm:h-[85px] md:h-[98px]" />

      <div className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 sm:pb-20 md:px-8 lg:px-10 xl:px-14">
        {/* Top Form */}
        <div className="relative z-10 mx-auto -mt-[42px] rounded-lg bg-gradient-to-r from-[#1699e8] to-[#4166e8] p-4 shadow-[0_20px_45px_rgba(65,102,232,0.28)] sm:-mt-[50px] sm:p-5 md:-mt-[62px] md:p-6">
          <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_180px]">
            <div className="flex h-[48px] items-center justify-between rounded-[8px] bg-white px-4 sm:h-[52px]">
              <input
                type="text"
                placeholder="Patient name"
                className="w-full border-none bg-transparent text-[13px] text-[#666] outline-none placeholder:text-[#8b8b8b] sm:text-[14px]"
              />
              <User
                className="ml-3 h-4 w-4 shrink-0 text-[#9f9f9f]"
                strokeWidth={1.8}
              />
            </div>

            <div className="flex h-[48px] items-center rounded-[8px] bg-white px-4 sm:h-[52px]">
              <MapPin
                className="mr-3 h-4 w-4 shrink-0 text-[#9f9f9f]"
                strokeWidth={1.8}
              />
              <select className="w-full appearance-none border-none bg-transparent text-[13px] text-[#666] outline-none sm:text-[14px]">
                <option value="">Select clinic location</option>
                {clinicLocations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex h-[48px] items-center rounded-[8px] bg-white px-4 sm:h-[52px]">
              <Building2
                className="mr-3 h-4 w-4 shrink-0 text-[#9f9f9f]"
                strokeWidth={1.8}
              />
              <select className="w-full appearance-none border-none bg-transparent text-[13px] text-[#666] outline-none sm:text-[14px]">
                <option value="">Select dental service</option>
                {dentalDepartments.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </div>

            <button className="h-[48px] rounded-[8px] bg-[#0b2a63] px-5 text-[13px] font-bold uppercase tracking-wide text-white shadow-[0_14px_30px_rgba(11,42,99,0.28)] transition hover:scale-[1.02] sm:h-[52px] sm:text-[14px]">
              Request Visit
            </button>
          </div>
        </div>

        <div className="mt-14 sm:mt-18 md:mt-20 lg:mt-24">
          <p className="mb-3 text-center text-sm font-bold uppercase tracking-wide text-[#3563E9] sm:text-base md:text-[19px]">
            Patient Reviews
          </p>
          <h2 className="text-center text-[clamp(2rem,7vw,3.4rem)] mb-10 font-bold leading-[1.05] tracking-[-0.04em] text-[#06245b]">
            What Our Patients Say
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-12 lg:grid-cols-2 lg:gap-6 xl:mt-20">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 sm:mt-10 sm:gap-3 md:mt-12">
          <span className="h-[7px] w-[7px] rounded-[2px] bg-[#4166e8] sm:h-[8px] sm:w-[8px]" />
          <span className="h-[7px] w-[7px] rounded-[2px] bg-[#d2d2d2] sm:h-[8px] sm:w-[8px]" />
          <span className="h-[7px] w-[7px] rounded-[2px] bg-[#d2d2d2] sm:h-[8px] sm:w-[8px]" />
        </div>
      </div>
    </section>
  );
}
