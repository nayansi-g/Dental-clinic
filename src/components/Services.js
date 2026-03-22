"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldPlus,
  SmilePlus,
  ScanLine,
  Users,
  Stethoscope,
  Sparkles,
} from "lucide-react";
import {
  cardReveal,
  fadeUp,
  imageHover,
  imageReveal,
  staggerContainer,
  subtleHover,
  viewportOnce,
} from "@/lib/motion";

const leftServices = [
  {
    title: "Root Canal Therapy",
    description:
      "Relieve infection, protect your tooth, and restore comfort with gentle root canal care.",
    icon: ShieldPlus,
  },
  {
    title: "Teeth Alignment",
    description:
      "Improve spacing, bite balance, and smile confidence with orthodontic planning.",
    icon: Users,
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Enhance tooth shape, shade, and symmetry for a brighter natural-looking smile.",
    icon: ScanLine,
  },
];

const rightServices = [
  {
    title: "Oral Hygiene",
    description:
      "Keep gums healthy and reduce plaque buildup with preventive cleanings and exams.",
    icon: SmilePlus,
  },
  {
    title: "Dental Consultation",
    description:
      "Get clear answers, treatment guidance, and personalized recommendations.",
    icon: Stethoscope,
  },
  {
    title: "Cavity Inspection",
    description:
      "Catch early decay before it becomes painful with careful examinations and imaging.",
    icon: Sparkles,
  },
];

function ServiceCard({ title, description, Icon, align = "left" }) {
  return (
    <motion.div
      className="rounded-md border border-[#d9d9d9] bg-transparent px-6 py-6"
      variants={cardReveal}
      whileHover={subtleHover}
    >
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
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <motion.section
      className="section-shell bg-white px-4 py-20 md:px-8 lg:px-10"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="site-shell">
        <motion.div className="section-heading" variants={staggerContainer}>
          <motion.p
            className="mb-3 text-center text-sm font-bold uppercase tracking-wide text-[#3563E9] sm:text-base md:text-[19px]"
            variants={fadeUp}
          >
            Our Services
          </motion.p>
          <motion.h2
            className="text-center text-[clamp(2rem,7vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.04em] text-[#06245b]"
            variants={fadeUp}
          >
            Complete Dental Services
          </motion.h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)_minmax(0,1fr)] lg:gap-8">
          <motion.div className="space-y-4" variants={staggerContainer}>
            {leftServices.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                Icon={service.icon}
                align="left"
              />
            ))}
          </motion.div>

          {/* Center image fades and zooms in on scroll for a polished focal point. */}
          <motion.div className="flex justify-center" variants={imageReveal}>
            <motion.div className="relative w-full max-w-[420px]" whileHover={imageHover}>
              <Image
                src="/services.png"
                alt="Dental treatment services including cosmetic, preventive, and restorative care"
                width={420}
                height={560}
                className="h-auto w-full object-contain"
                priority
              />
            </motion.div>
          </motion.div>

          <motion.div className="space-y-4" variants={staggerContainer}>
            {rightServices.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                Icon={service.icon}
                align="right"
              />
            ))}
          </motion.div>
        </div>

        <motion.div className="mt-10 flex justify-center" variants={fadeUp}>
          <motion.div whileHover={subtleHover}>
            <Link
              href="/services"
              className="inline-flex h-[52px] items-center justify-center rounded-md bg-gradient-to-r from-[#1699e8] to-[#4166e8] px-8 text-[14px] font-semibold uppercase text-white shadow-[0_16px_35px_rgba(65,102,232,0.22)] transition"
            >
              View All Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
