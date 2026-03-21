import AboutSection from "@/components/About";
import AppointmentCta from "@/components/AppoinmentCTA";
import BlogSection from "@/components/Blogs";
import DoctorsSection from "@/components/Doctor";
import FaqSection from "@/components/Faq";
import HeroSection from "@/components/Hero";
import PricingSection from "@/components/PricingSection";
import OurPromises from "@/components/Promises";
import ServicesSection from "@/components/Services";
import TestimonialSection from "@/components/Testimonals";
import StructuredData from "@/components/StructuredData";
import { buildMetadata, faqSchema, homepageKeywords } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Crown Dental Clinic & Implant Centre",
  description:
    "Visit Crown Dental Clinic for preventive, cosmetic, restorative, pediatric, and emergency dental care in Noida. Book appointments with experienced dentists today.",
  path: "/",
  keywords: homepageKeywords,
});

const homeFaqs = [
  {
    question: "Do you offer emergency dental treatment in Noida?",
    answer:
      "Yes. Crown Dental Clinic offers emergency dental support for tooth pain, swelling, broken teeth, and urgent oral health concerns.",
  },
  {
    question: "Which dental services are available at your clinic?",
    answer:
      "We provide routine dental checkups, teeth cleaning, cosmetic dentistry, root canal therapy, cavity treatment, pediatric dental care, and smile restoration services.",
  },
  {
    question: "Can I book an appointment online?",
    answer:
      "Yes. Patients can use the appointment page to request a visit for routine care, consultations, or emergency dental concerns.",
  },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden ">
      <StructuredData data={faqSchema(homeFaqs)} />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <OurPromises />
      <TestimonialSection />
      <PricingSection />
      <FaqSection />
      <DoctorsSection />
      <AppointmentCta />
      <BlogSection />
    </div>
  );
}
