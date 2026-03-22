"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram } from "lucide-react";
import {
  cardReveal,
  fadeUp,
  imageHover,
  staggerContainer,
  subtleHover,
  viewportOnce,
} from "@/lib/motion";

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
    <motion.div
      className="flex h-full flex-col rounded-[10px] border border-[#d9d9d9] bg-white p-2 sm:p-3"
      variants={cardReveal}
      whileHover={subtleHover}
    >
      <div className="overflow-hidden rounded-[6px]">
        {/* Card images scale subtly on hover without affecting layout. */}
        <motion.div whileHover={imageHover}>
          <Image
            src={doctor.image}
            alt={`${doctor.name}, ${doctor.role} at Crown Dental Clinic`}
            width={260}
            height={320}
            className="h-[460px] w-full object-cover p-4 sm:h-[300px] md:h-[320px] md:p-2 lg:h-[340px] lg:p-1 xl:h-[320px] 2xl:h-[350px]"
          />
        </motion.div>
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
          {[Facebook, Twitter, Instagram].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              aria-label={Icon.displayName || "Social"}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dfe6fb] text-[#3d67e8] transition sm:h-10 sm:w-10"
              whileHover={{ scale: 1.08, y: -2 }}
            >
              <Icon className="h-4 w-4" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function DoctorsSection() {
  return (
    <motion.section
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-10 lg:py-24 xl:px-14"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="site-shell mx-auto w-full max-w-[1400px]">
        <motion.div className="section-heading" variants={staggerContainer}>
          <motion.p
            className="mb-3 text-center text-sm font-bold uppercase tracking-wide text-[#3563E9] sm:text-base md:text-[19px]"
            variants={fadeUp}
          >
            Our Dentists
          </motion.p>
          <motion.h2
            className="text-center text-[clamp(2rem,7vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.04em] text-[#06245b]"
            variants={fadeUp}
          >
            Meet Our Experienced Dental Team
          </motion.h2>
        </motion.div>

        {/* Multiple cards use staggered reveal for a cleaner section entrance. */}
        <motion.div
          className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:mt-14 xl:grid-cols-4 xl:gap-6"
          variants={staggerContainer}
        >
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </motion.div>

        <motion.div
          className="mt-8 flex items-center justify-center gap-2 sm:mt-10 sm:gap-3"
          variants={fadeUp}
        >
          <span className="h-[7px] w-[7px] rounded-[2px] bg-[#4166e8] sm:h-[8px] sm:w-[8px]" />
          <span className="h-[7px] w-[7px] rounded-[2px] bg-[#d2d2d2] sm:h-[8px] sm:w-[8px]" />
          <span className="h-[7px] w-[7px] rounded-[2px] bg-[#d2d2d2] sm:h-[8px] sm:w-[8px]" />
          <span className="h-[7px] w-[7px] rounded-[2px] bg-[#d2d2d2] sm:h-[8px] sm:w-[8px]" />
          <span className="h-[7px] w-[7px] rounded-[2px] bg-[#d2d2d2] sm:h-[8px] sm:w-[8px]" />
        </motion.div>
      </div>
    </motion.section>
  );
}
