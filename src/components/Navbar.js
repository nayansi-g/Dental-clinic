import Link from "next/link";
import Image from "next/image";
import MobileNav from "@/components/client/MobileNav";
import { clinic, primaryNav } from "@/lib/site";

export default function Navbar() {
  return (
    <header className="sticky left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/95 py-3 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <Link
          href="/"
          className="relative flex h-10 w-[130px] shrink-0 items-center sm:h-12 sm:w-[150px] md:h-14 md:w-[170px] lg:h-16 lg:w-[190px] xl:h-[72px] xl:w-[210px]"
          aria-label={`${clinic.name} homepage`}
        >
          <div className="relative h-20 w-[160px] md:h-26 md:w-[180px] lg:h-36 lg:w-[200px]">
            <Image
              src="/Dental-logo.png"
              alt={`${clinic.name} logo`}
              fill
              className="object-contain overflow-y-hidden"
              priority
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-7 2xl:gap-8 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[15px] font-bold text-[#17305E] transition hover:text-[#2E6BE6] xl:text-[16px] 2xl:text-[17px]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/book_an_appointment"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#19A0E8] to-[#3B63E6] px-4 py-3 text-xs font-semibold text-white shadow-[0_10px_30px_rgba(59,99,230,0.25)] transition hover:scale-[1.02] xl:px-6 xl:py-3.5 xl:text-sm 2xl:px-7"
          >
            BOOK APPOINTMENT
          </Link>
        </div>

        <MobileNav items={primaryNav} ctaHref="/book_an_appointment" />
      </div>
    </header>
  );
}
