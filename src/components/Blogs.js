"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import {
  cardReveal,
  fadeUp,
  imageHover,
  staggerContainer,
  subtleHover,
  viewportOnce,
} from "@/lib/motion";

const blogs = blogPosts.slice(0, 3);

function BlogCard({ blog }) {
  return (
    <motion.div
      className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg"
      variants={cardReveal}
      whileHover={subtleHover}
    >
      <div className="relative overflow-hidden">
        {/* Blog thumbnails use a soft zoom so hover feels responsive but restrained. */}
        <motion.div whileHover={imageHover}>
          <Image
            src={blog.image}
            alt={blog.title}
            width={360}
            height={240}
            className="h-[220px] w-full object-cover sm:h-[240px] md:h-[220px] lg:h-[230px] xl:h-[240px]"
          />
        </motion.div>

        <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#1699e8] to-[#4166e8] px-3 py-2 text-[12px] font-medium text-white shadow-[0_10px_24px_rgba(65,102,232,0.20)] sm:bottom-4 sm:left-5 sm:text-[13px]">
          <CalendarDays className="h-4 w-4" />
          <span>{blog.date}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-7 pt-5 sm:px-6 sm:pb-8 sm:pt-6">
        <h3 className="max-w-[320px] text-[20px] font-bold leading-[1.2] text-[#08285f] sm:text-[21px] lg:text-[22px]">
          {blog.title}
        </h3>

        <p className="mt-4 text-[14px] leading-[1.9] text-[#7a7a7a] sm:text-[15px]">
          {blog.excerpt}
        </p>

        <motion.div className="mt-6 inline-block" whileHover={{ x: 4 }}>
          <Link
            href={`/blog/${blog.slug}`}
            className="inline-block text-[13px] font-medium uppercase text-[#3563e9] underline underline-offset-4 sm:text-[14px]"
          >
            Read More
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function BlogSection() {
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
            Dental Blog
          </motion.p>
          <motion.h2
            className="text-center text-[clamp(2rem,7vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.04em] text-[#06245b]"
            variants={fadeUp}
          >
            Oral Health Tips And Clinic Updates
          </motion.h2>
        </motion.div>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:gap-7 md:grid-cols-2 xl:mt-14 xl:grid-cols-3 xl:gap-8"
          variants={staggerContainer}
        >
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
