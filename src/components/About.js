"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeUp,
  imageHover,
  imageReveal,
  staggerContainer,
  subtleHover,
  viewportOnce,
} from "@/lib/motion";

export default function AboutSection() {
  return (
    <motion.section
      className="section-shell bg-white px-4 py-10 md:px-8 lg:px-14"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="site-shell grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
        {/* Image block uses fade + zoom for a soft reveal on scroll. */}
        <motion.div className="relative flex justify-center lg:justify-start" variants={imageReveal}>
          <div className="relative w-full max-w-[520px]">
            <div className="absolute inset-0 rotate-[4deg] rounded-[6px] bg-gradient-to-b from-[#3b63e6] to-[#1699e8]" />

            <motion.div
              className="relative overflow-hidden rounded-[4px] p-3 rotate-[4deg]"
              whileHover={imageHover}
            >
              <Image
                src="/about-img.png"
                alt="Dental clinic consultation focused on patient comfort and oral health"
                width={520}
                height={560}
                className="h-[360px] w-full object-cover sm:h-[440px] lg:h-[520px]"
                priority
              />
            </motion.div>

            <motion.div
              className="absolute bottom-6 right-4 z-20 flex items-center gap-3 rounded-[8px] bg-[#FFFFFF] px-5 py-4 shadow-[0_12px_30px_rgba(15,45,103,0.08)] sm:bottom-10 sm:right-[-20px] sm:gap-4 sm:px-8 sm:py-5"
              variants={fadeUp}
              whileHover={subtleHover}
            >
              <span className="text-[42px] font-bold leading-none text-[#3b63e6] sm:text-[58px]">
                50
              </span>
              <div className="max-w-[140px] text-base font-bold leading-[1.25] text-[#102d67] sm:text-[18px]">
                Years of Experience
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Copy uses staggered animation so each line settles naturally. */}
        <motion.div className="max-w-[700px]" variants={staggerContainer}>
          <motion.p
            className="mb-3 text-base font-bold uppercase tracking-tight text-[#3563E9] md:text-lg"
            variants={fadeUp}
          >
            About Our Clinic
          </motion.p>

          <motion.h2
            className="mt-4 text-[clamp(2.25rem,5vw,3.7rem)] font-bold leading-[1.08] text-[#06245b]"
            variants={fadeUp}
          >
            Gentle Dentistry
            <br />
            For Lifelong Oral Health
          </motion.h2>

          <motion.p
            className="mt-3 text-base leading-[1.8] text-[#7b7b7b] sm:mt-4 sm:text-[15px]"
            variants={fadeUp}
          >
            Crown Dental Clinic combines experienced dentists, digital diagnostics,
            and a calm patient-first environment to make routine visits and complex
            treatments feel more comfortable and more predictable.
          </motion.p>

          <motion.p
            className="mt-2 text-base leading-[1.8] text-[#7b7b7b] sm:mt-3 sm:text-[15px]"
            variants={fadeUp}
          >
            We help families with preventive checkups, smile enhancement,
            restorative care, and emergency dental treatment while explaining every
            step clearly so patients can make confident decisions about their care.
          </motion.p>

          <motion.div variants={fadeUp} whileHover={subtleHover} className="inline-block">
            <Link
              href="/about"
              className="mt-10 inline-flex h-[56px] items-center justify-center rounded-[4px] bg-gradient-to-r from-[#1699e8] to-[#4166e8] px-8 text-[18px] font-medium uppercase text-white shadow-[0_16px_35px_rgba(65,102,232,0.22)] transition"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
