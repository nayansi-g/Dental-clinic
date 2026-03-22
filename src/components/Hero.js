"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { clinic } from "@/lib/site";
import {
  fadeUp,
  imageHover,
  imageReveal,
  staggerContainer,
  subtleHover,
  viewportOnce,
} from "@/lib/motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#eef2f7] px-4 sm:px-6 md:px-8 lg:px-10 ">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.95),transparent_35%),radial-gradient(circle_at_right,rgba(59,130,246,0.10),transparent_30%)]" />

      <div className="site-shell relative grid min-h-[100svh] grid-cols-1 items-center gap-6 pt-16 sm:pt-20 md:pt-10 lg:min-h-[760px] lg:grid-cols-[minmax(0,1fr)_minmax(340px,600px)] lg:pt-0">
        <motion.div
          className="max-w-[640px] pb-2 lg:pb-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* Text content uses staggered children so copy appears smoothly in sequence. */}
          <motion.p
            className="mb-3 text-sm font-bold uppercase tracking-tight text-[#3563E9] sm:text-base md:text-lg"
            variants={fadeUp}
          >
            Welcome To {clinic.shortName}
          </motion.p>

          {/* Hero headline fades in and lifts slightly for a polished entry. */}
          <motion.h1
            className="text-[clamp(2.5rem,8vw,3.4rem)] font-bold leading-[1.02] tracking-[-0.04em] text-[#0f3d67]"
            variants={fadeUp}
          >
            Trusted Dental Care For Every Smile
          </motion.h1>

          <motion.p
            className="mt-4 max-w-[610px] text-[15px] leading-[1.8] text-[#7b7f87] sm:text-[16px] md:text-[17px] lg:text-[18px]"
            variants={fadeUp}
          >
            From preventive checkups to cosmetic dentistry and emergency dental
            care, our clinic helps children and adults feel comfortable, informed,
            and confident at every stage of treatment.
          </motion.p>

          <motion.div
            className="mt-8 flex w-full max-w-[560px] flex-col gap-3 sm:mt-10 sm:flex-row"
            variants={fadeUp}
          >
            <motion.div whileHover={subtleHover}>
              <Link
                href="/book_an_appointment"
                className="inline-flex h-12 items-center justify-center rounded-[8px] bg-gradient-to-r from-[#1699e8] to-[#4166e8] px-6 text-[13px] font-semibold uppercase tracking-wide text-white shadow-[0_10px_30px_rgba(65,102,232,0.25)] transition sm:h-14 sm:min-w-[190px] sm:text-[14px] md:h-16 md:text-[15px]"
              >
                Book Appointment
              </Link>
            </motion.div>

            <motion.div whileHover={subtleHover}>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-[8px] border border-[#c8d8ff] bg-white px-6 text-[13px] font-semibold uppercase tracking-wide text-[#17305E] transition hover:border-[#3563E9] hover:text-[#3563E9] sm:h-14 sm:min-w-[190px] sm:text-[14px] md:h-16 md:text-[15px]"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Images fade and zoom gently when they enter the viewport. */}
        <motion.div
          className="relative mx-auto w-full max-w-[560px] self-end"
          variants={imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="relative h-[420px] w-full sm:h-[500px] md:h-[560px] lg:h-[640px] xl:h-[700px]">
            <motion.div
              className="absolute bottom-0 left-1/2 h-[72%] w-[78%] -translate-x-1/2 rotate-[5deg] rounded-t-[28px] bg-gradient-to-b from-[#3b63e6] to-[#1699e8] shadow-[0_20px_60px_rgba(59,99,230,0.25)] sm:h-[74%] sm:w-[76%] lg:left-[52%] lg:w-[74%]"
              whileHover={imageHover}
            >
              <div className="absolute left-[10%] top-[8%] h-[82%] w-[78%] rounded-t-[999px] border-[4px] border-white/90" />
            </motion.div>

            <motion.div
              className="absolute -bottom-20 left-1/2 z-10 w-[98%] max-w-[520px] -translate-x-1/2 sm:w-[84%] md:w-[82%] lg:w-[86%]"
              whileHover={imageHover}
            >
              <Image
                src="/Hero-img.png"
                alt="Experienced dentist welcoming patients at Crown Dental Clinic"
                width={540}
                height={700}
                className="h-auto w-full object-contain object-bottom"
                priority
              />
            </motion.div>

            <motion.div
              className="absolute -right-10 z-20 flex max-w-[190px] items-center gap-2 rounded-[10px] bg-white px-1 py-2 shadow-[0_10px_35px_rgba(15,45,103,0.12)] sm:right-0 sm:top-14 sm:max-w-[250px] sm:gap-3 sm:px-2 sm:py-1 md:right-[-10px] md:top-16 md:gap-4 md:px-2 md:py-2 lg:right-[-18px] lg:top-20"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              whileHover={subtleHover}
            >
              <div className="h-10 w-10 overflow-hidden rounded-full bg-[#d9e7ff] sm:h-12 sm:w-12 md:h-14 md:w-14">
                <Image
                  src="/doctor4.png"
                  alt="Lead dental specialist at Crown Dental Clinic"
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h4 className="tex-[11px] font-semibold leading-none text-[#0f2d67] sm:text-[13px] md:text-[15px]">
                  Dental Specialists
                </h4>
                <p className="mt-1 text-[11px] text-[#8a8f98] sm:text-[13px] md:mt-2 md:text-[15px]">
                  Preventive and cosmetic care
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
