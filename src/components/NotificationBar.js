import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

export default function NotificationBar() {
  return (
    <div className="w-full bg-[#0d2b63] text-white">
      <div className="mx-auto flex min-h-[56px] max-w-[1920px] items-center justify-between px-6 md:px-10 lg:px-24">
        {/* Left side */}
        <div className="flex flex-wrap items-center gap-6 md:gap-10">
          <a
            href="mailto:info@example.com"
            className="flex items-center gap-3 text-[18px] font-semibold hover:opacity-80"
          >
            <Mail className="h-5 w-5 text-[#2f6bff]" strokeWidth={2} />
            <span>info@example.com</span>
          </a>

          <a
            href="tel:+917052101786"
            className="flex items-center gap-3 text-[18px] font-semibold hover:opacity-80"
          >
            <Phone className="h-5 w-5 text-[#2f6bff]" strokeWidth={2} />
            <span>+91-7052-101-786</span>
          </a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-5 md:gap-6">
          <a href="#" aria-label="Facebook" className="hover:opacity-80">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:opacity-80">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:opacity-80">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" aria-label="YouTube" className="hover:opacity-80">
            <Youtube className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
}