import Image from "next/image";
import Link from "next/link";
import { clinic } from "@/lib/site";

export default function BannerHero({ heading, pagename }) {
  return (
    <section className="relative flex h-[350px] w-full items-center md:h-[420px]">
      <Image
        src="/banner-img.png"
        alt={`${clinic.name} ${heading} page banner`}
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-14">
        <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
          {heading}
        </h1>

        <div className="flex items-center gap-3 text-sm text-white/90 md:text-base">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="opacity-70">|</span>
          <span className="opacity-80">{pagename}</span>
        </div>
      </div>
    </section>
  );
}
