import Link from "next/link";
import {
  Clock3,
  MapPin,
  PhoneCall,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  ArrowRight,
} from "lucide-react";
import { clinic, primaryNav, serviceLinks } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[#002055]  text-white">
      <div className=" pb-0 pt-16">
        <div className="grid grid-cols-1 gap-12 px-4 md:px-8  md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1fr]">
          <div>
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#1f8ff0] text-[#1f8ff0]">
                  D
                </div>
                <p className="text-[34px] font-bold leading-none tracking-tight">
                  {clinic.shortName}.
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-[360px] text-[16px] leading-[1.9] text-[#d7e3ff]">
              {clinic.description}
            </p>

            <div className="mt-7 flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#1899e7] to-[#4364e8]">
                <Clock3 className="h-5 w-5" />
              </div>

              <div className="text-[16px] leading-[1.8] text-[#d7e3ff]">
                <p>Monday - Saturday: 9:00am - 8:00pm</p>
                <p>Sunday: 10:00am - 2:00pm</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[22px] font-bold">Quick Links</h3>

            <ul className="mt-6 space-y-4">
              {primaryNav.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 text-[16px] text-[#d7e3ff] transition hover:text-white"
                  >
                    <ArrowRight className="h-4 w-4 text-[#4f7df3]" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[22px] font-bold">Dental Services</h3>

            <ul className="mt-6 space-y-4">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 text-[16px] text-[#d7e3ff] transition hover:text-white"
                  >
                    <ArrowRight className="h-4 w-4 text-[#4f7df3]" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[22px] font-bold">Contact Us</h3>

            <div className="mt-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#1899e7] to-[#4364e8]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="text-[16px] leading-[1.8] text-[#d7e3ff]">
                  <p>{clinic.address.streetAddress}</p>
                  <p>
                    {clinic.address.addressLocality}, {clinic.address.addressRegion}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#1899e7] to-[#4364e8]">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div className="text-[16px] leading-[1.8] text-[#d7e3ff]">
                  <p>{clinic.phone}</p>
                  <p>Emergency support available daily</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#1899e7] to-[#4364e8]">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="text-[16px] leading-[1.8] text-[#d7e3ff]">
                  <p>{clinic.email}</p>
                  <p>{clinic.supportEmail}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t px-4 md:px-8  border-white/10 bg-[#001946] py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[15px] text-white">
            Copyright (c) 2026 {clinic.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <Link
              href={clinic.socialLinks[0]}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Link>

            <Link
              href={clinic.socialLinks[1]}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>

            <Link
              href={clinic.socialLinks[2]}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
