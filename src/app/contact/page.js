import BannerHero from "@/components/BannerHero";
import StructuredData from "@/components/StructuredData";
import { Mail, Clock, MapPin, Phone } from "lucide-react";
import {
  breadcrumbSchema,
  buildMetadata,
  clinic,
} from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact Our Dental Clinic and Book Your Visit",
  description:
    "Contact Decare Dental Clinic for appointments, treatment questions, emergency dental support, office hours, and clinic location details in Kanpur.",
  path: "/contact",
  keywords: [
    "contact dentist in Kanpur",
    "dental appointment contact",
    "emergency dental clinic phone number",
  ],
});

export default function ContactPage() {
  return (
    <section className="bg-white">
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <BannerHero heading="Contact Us" pagename="Contact" />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2 md:px-8">
        <div className="bg-[#F6F5FB] p-10">
          <h2 className="mb-3 text-center text-3xl font-bold text-gray-900">
            Connect with us
          </h2>
          <p className="mx-auto mb-8 max-w-[480px] text-center text-sm leading-[1.8] text-gray-500">
            Send us your details and our team will help you schedule the right
            consultation, follow-up, or urgent dental visit.
          </p>

          <form className="space-y-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-md text-gray-400 border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-md border text-gray-400 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full rounded-md border text-gray-400 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Preferred Service"
                className="w-full rounded-md border text-gray-400 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <textarea
              placeholder="Tell us about your concern or the appointment you would like to book"
              rows={5}
              className="w-full rounded-md border text-gray-400 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 py-3 font-semibold text-white transition hover:opacity-90"
            >
              SEND MESSAGE 
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-blue-600 p-4 text-white">
              <MapPin size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Clinic Address</h3>
              <p className="mt-1 text-sm text-gray-500">
                {clinic.address.streetAddress}
                <br />
                {clinic.address.addressLocality}, {clinic.address.addressRegion}{" "}
                {clinic.address.postalCode}
              </p>
            </div>
          </div>

          <hr className="text-gray-200" />

          <div className="flex items-start gap-4">
            <div className="rounded-full bg-blue-600 p-4 text-white">
              <Clock size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Working Hours</h3>
              <p className="mt-1 text-sm text-gray-500">
                Monday to Saturday 09:00 to 20:00
                <br />
                Sunday 10:00 to 14:00
              </p>
            </div>
          </div>

          <hr className="text-gray-200" />

          <div className="flex items-start gap-4">
            <div className="rounded-full bg-blue-600 p-4 text-white">
              <Mail size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email Us</h3>
              <p className="mt-1 text-sm text-gray-500">
                {clinic.email}
                <br />
                {clinic.supportEmail}
              </p>
            </div>
          </div>

          <hr className="text-gray-200" />

          <div className="flex items-start gap-4">
            <div className="rounded-full bg-blue-600 p-4 text-white">
              <Phone size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Call Our Team</h3>
              <p className="mt-1 text-sm text-gray-500">
                {clinic.phone}
                <br />
                Emergency appointment guidance available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
