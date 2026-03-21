import Image from "next/image";
import { Facebook, Twitter, Instagram } from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Howard Holmes",
    role: "Restorative Dentist",
    image: "/doctor-1.png",
  },
  {
    id: 2,
    name: "Dr. Ella Thompson",
    role: "Cosmetic Dentist",
    image: "/doctor-2.png",
  },
  {
    id: 3,
    name: "Dr. Vincent Cooper",
    role: "Family Dentist",
    image: "/Doctor3.png",
  },
  {
    id: 4,
    name: "Dr. Danielle Bryant",
    role: "Pediatric Dentist",
    image: "/doctor4.png",
  },
];

function DoctorCard({ doctor }) {
  return (
    <div className="flex h-full flex-col rounded-[10px] border border-[#d9d9d9] bg-white p-2 sm:p-3">
      <div className="overflow-hidden rounded-[6px]">
        <Image
          src={doctor.image}
          alt={`${doctor.name}, ${doctor.role} at Decare Dental Clinic`}
          width={260}
          height={320}
          className="h-[460px] w-full object-cover sm:h-[300px] p-4 md:p-2 lg:p-1 md:h-[320px] lg:h-[340px] xl:h-[320px] 2xl:h-[350px]"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between pt-4 text-center sm:pt-5">
        <div>
          <h3 className="text-[20px] font-bold text-[#08285f] sm:text-[21px] lg:text-[22px]">
            {doctor.name}
          </h3>
          <p className="mt-2 text-[13px] text-[#3d67e8] sm:text-[14px]">
            {doctor.role}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-center gap-3 sm:gap-4">
          <a
            href="#"
            aria-label="Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dfe6fb] text-[#3d67e8] transition hover:scale-105 sm:h-10 sm:w-10"
          >
            <Facebook className="h-4 w-4" />
          </a>

          <a
            href="#"
            aria-label="Twitter"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dfe6fb] text-[#3d67e8] transition hover:scale-105 sm:h-10 sm:w-10"
          >
            <Twitter className="h-4 w-4" />
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dfe6fb] text-[#3d67e8] transition hover:scale-105 sm:h-10 sm:w-10"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function DoctorsSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-10 lg:py-24 xl:px-14">
      <div className="site-shell mx-auto w-full max-w-[1400px]">
        <div className="section-heading">
          <p className="mb-3 text-center text-sm font-bold uppercase tracking-wide text-[#3563E9] sm:text-base md:text-[19px]">
            Our Dentists
          </p>
          <h2 className="text-center text-[clamp(2rem,7vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.04em] text-[#06245b]">
            Meet Our Experienced Dental Team
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:mt-14 xl:grid-cols-4 xl:gap-6">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 sm:mt-10 sm:gap-3">
          <span className="h-[7px] w-[7px] rounded-[2px] bg-[#4166e8] sm:h-[8px] sm:w-[8px]" />
          <span className="h-[7px] w-[7px] rounded-[2px] bg-[#d2d2d2] sm:h-[8px] sm:w-[8px]" />
          <span className="h-[7px] w-[7px] rounded-[2px] bg-[#d2d2d2] sm:h-[8px] sm:w-[8px]" />
          <span className="h-[7px] w-[7px] rounded-[2px] bg-[#d2d2d2] sm:h-[8px] sm:w-[8px]" />
          <span className="h-[7px] w-[7px] rounded-[2px] bg-[#d2d2d2] sm:h-[8px] sm:w-[8px]" />
        </div>
      </div>
    </section>
  );
}
