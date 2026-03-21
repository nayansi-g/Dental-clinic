import Image from "next/image";
import AccordionListClient from "@/components/client/AccordionListClient";

const faqs = [
  {
    question: "How often should I schedule a dental checkup?",
    answer:
      "Most patients benefit from a dental checkup and cleaning every six months, although some may need more frequent visits depending on gum health, cavity risk, or ongoing treatment.",
  },
  {
    question: "Do you treat children and adults at the same clinic?",
    answer:
      "Yes. We provide family dental care for children, teens, adults, and seniors with treatment plans designed around age, comfort, and oral health goals.",
  },
  {
    question: "Can cosmetic treatments also improve oral health?",
    answer:
      "In many cases, yes. Cosmetic dental care can improve smile appearance while also helping with worn enamel, bite issues, or damaged teeth depending on the treatment selected.",
  },
  {
    question: "What should I do during a dental emergency?",
    answer:
      "Call our clinic as soon as possible for guidance. Prompt care is important for severe tooth pain, swelling, bleeding, broken teeth, and signs of infection.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full py-4">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[#0d2b63] px-6 py-16 md:px-12 lg:px-16">
          <div className="max-w-[520px]">
            <p className="text-[14px] font-bold uppercase tracking-wide text-[#3f74ff]">
              FAQ
            </p>

            <h2 className="mt-2 text-[clamp(2.25rem,5vw,3.6rem)] font-bold leading-tight text-white">
              Frequently Asked
              <br />
              Dental Questions
            </h2>

            <div className="mt-10">
              <AccordionListClient items={faqs} defaultOpen={0} />
            </div>
          </div>
        </div>

        <div className="relative min-h-[400px] lg:min-h-[650px]">
          <Image
            src="/faq-img.png"
            alt="Patient receiving answers during a dental consultation"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
