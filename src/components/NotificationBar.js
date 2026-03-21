import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { clinic } from "@/lib/site";

export default function NotificationBar() {
  return (
    <div className="hidden w-full bg-[#0d2b63] px-4 md:px-8 lg:px-14 text-white md:block">
      <div className="site-shell flex min-h-[56px] flex-wrap items-center justify-between gap-4 py-3">
        <div className="flex flex-wrap items-center gap-4 lg:gap-8">
          <a
            href={`mailto:${clinic.email}`}
            className="flex items-center gap-3 text-sm font-semibold hover:opacity-80 lg:text-base"
          >
            <Mail className="h-5 w-5 text-[#2f6bff]" strokeWidth={2} />
            <span>{clinic.email}</span>
          </a>

          <a
            href={clinic.telephoneHref}
            className="flex items-center gap-3 text-sm font-semibold hover:opacity-80 lg:text-base"
          >
            <Phone className="h-5 w-5 text-[#2f6bff]" strokeWidth={2} />
            <span>{clinic.phone}</span>
          </a>
        </div>

        <div className="flex items-center gap-4 lg:gap-5">
          <a href={clinic.socialLinks[0]} aria-label="Facebook" className="hover:opacity-80">
            <Facebook className="h-5 w-5" />
          </a>
          <a href={clinic.socialLinks[1]} aria-label="Instagram" className="hover:opacity-80">
            <Instagram className="h-5 w-5" />
          </a>
          <a href={clinic.socialLinks[2]} aria-label="Twitter" className="hover:opacity-80">
            <Twitter className="h-5 w-5" />
          </a>
          <a href={clinic.socialLinks[3]} aria-label="YouTube" className="hover:opacity-80">
            <Youtube className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
