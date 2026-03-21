import Link from "next/link";
import Image from "next/image";
import MobileNav from "@/components/client/MobileNav";
import { clinic, primaryNav } from "@/lib/site";

export default function Navbar() {
  return (
    <header className="sticky left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/95 py-3 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1440px] h-18 items-center overflow-y-hidden justify-between px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <Link href="/" className="flex items-center justify-start pt-4 overflow-y-hidden">
  <Image
    src="/first_logo.png"
    alt="Logo"
    width={220}
    height={80}
    className="h-auto w-[220px] md:w-[260px] lg:w-[270px]"
    priority
  />
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
