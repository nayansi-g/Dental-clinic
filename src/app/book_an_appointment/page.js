import BannerHero from "@/components/BannerHero";
import StructuredData from "@/components/StructuredData";
import { CheckCircle2 } from "lucide-react";
import { breadcrumbSchema, buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Book a Dental Appointment Online",
  description:
    "Book an appointment with Decare Dental Clinic for routine checkups, cosmetic dentistry, emergency dental care, or family dental visits.",
  path: "/book_an_appointment",
  keywords: [
    "book dental appointment",
    "online dentist appointment",
    "emergency dental booking",
  ],
});

export default function BookAnAppointmentPage() {
  return (
    <div className="overflow-x-hidden bg-white">
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Book an Appointment", path: "/book_an_appointment" },
        ])}
      />

      <BannerHero heading="Book Appointment" pagename="Book Appointment" />

      <section className="relative overflow-hidden bg-[#f8fbff] px-4 py-16 md:px-8 lg:px-14 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,108,246,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(22,153,232,0.1),transparent_32%)]" />
        <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(120deg,rgba(255,255,255,0.94),rgba(255,255,255,0.9))]" />

        <div className="site-shell relative z-10 grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
          <div className="max-w-[420px]">
            <p className="text-[20px] font-semibold leading-tight text-[#17305E] sm:text-[24px]">
              With access to
            </p>

            <h2 className="mt-3 text-[clamp(3rem,8vw,5rem)] font-bold uppercase leading-[0.9] tracking-[-0.05em] text-[#356fea] ">
              24 Hour
            </h2>

            <h3 className="mt-1 text-[clamp(3rem,8vw,5rem)] font-bold uppercase leading-[0.9] tracking-[-0.05em] text-[#111827]">
              Emergency
            </h3>

            <p className="mt-3 text-[clamp(2rem,5vw,3.1rem)] font-semibold leading-[1] text-[#17305E]">
              Assistance
            </p>

            <div className="mt-8 h-[4px] w-14 rounded-full bg-[#356fea] " />

            <p className="mt-8 text-[17px] leading-[1.9] text-[#243b63]">
              Our dental team is available to support urgent concerns, routine
              appointments, and family visits with fast and friendly scheduling.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Fast responses for urgent dental pain",
                "Professional guidance before your visit",
                "Simple appointment booking for all ages",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2f6cf6]" />
                  <span className="text-sm font-medium leading-[1.7] text-[#17305E]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[6px] border border-[#e4e7ec] bg-white/90 p-5 shadow-[0_20px_50px_rgba(6,36,91,0.08)] backdrop-blur-sm sm:p-7 md:p-8">
            <h2 className="text-center text-[clamp(1.9rem,4vw,2.2rem)] font-medium text-[#111827]">
              Book an <span className="font-bold">Appointment</span> Now
            </h2>

            <form className="mt-8 space-y-0">
              <input
                type="text"
                placeholder="Preferred Doctor"
                className="h-[52px] w-full border border-[#e2e5ea] px-4 text-[15px] text-[#17305E] outline-none placeholder:text-[#b4b7c1] focus:border-[#2f6cf6]"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your name"
                  className="h-[52px] w-full border border-t-0 border-[#e2e5ea] px-4 text-[15px] text-[#17305E] outline-none placeholder:text-[#b4b7c1] focus:border-[#2f6cf6]"
                />
                <input
                  type="number"
                  placeholder="Your age"
                  className="h-[52px] w-full border border-t-0 border-[#e2e5ea] px-4 text-[15px] text-[#17305E] outline-none placeholder:text-[#b4b7c1] focus:border-[#2f6cf6] sm:border-l-0"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2">
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="h-[52px] w-full border border-t-0 border-[#e2e5ea] px-4 text-[15px] text-[#17305E] outline-none placeholder:text-[#b4b7c1] focus:border-[#2f6cf6]"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="h-[52px] w-full border border-t-0 border-[#e2e5ea] px-4 text-[15px] text-[#17305E] outline-none placeholder:text-[#b4b7c1] focus:border-[#2f6cf6] sm:border-l-0"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Appointment date"
                  className="h-[52px] w-full border border-t-0 border-[#e2e5ea] px-4 text-[15px] text-[#17305E] outline-none placeholder:text-[#b4b7c1] focus:border-[#2f6cf6]"
                />
                <select className="h-[52px] w-full appearance-none border border-t-0 border-[#e2e5ea] bg-white px-4 text-[15px] font-medium text-[#111827] outline-none focus:border-[#2f6cf6] sm:border-l-0">
                  <option>12:00 PM</option>
                  <option>10:00 AM</option>
                  <option>02:00 PM</option>
                  <option>04:30 PM</option>
                </select>
              </div>

              <textarea
                placeholder="Type your essential message here..."
                rows={8}
                className="min-h-[180px] w-full resize-y border border-t-0 border-[#e2e5ea] px-4 py-4 text-[15px] text-[#17305E] outline-none placeholder:text-[#b4b7c1] focus:border-[#2f6cf6]"
              />

              <button
                type="submit"
                className="mt-4 inline-flex h-[52px] items-center justify-center rounded-[2px] bg-gradient-to-r from-[#4b8df7] to-[#356fea] px-8 text-[16px] font-medium text-white shadow-[0_16px_30px_rgba(53,111,234,0.25)] transition hover:scale-[1.02]"
              >
                Make an Appointment
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
