import Image from "next/image";
import Link from "next/link";

export default function AppointmentCta() {
  return (
    <section className="bg-white py-8 sm:py-10 ">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
        
        <div className="relative  rounded-[14px] bg-[#132f5b]">

          {/* GRID */}
          <div className="grid items-center lg:grid-cols-[520px_1fr] ">

            {/* LEFT IMAGE SIDE */}
            <div className="relative flex items-end overflow-hidden justify-center lg:justify-start h-full min-h-[320px] sm:min-h-[360px] lg:min-h-[320px]">

              {/* BLUE SHAPE */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-[60px] lg:translate-x-0 h-[80%] w-[80%] sm:w-[70%] lg:w-[360px] rounded-[30px] rotate-[-6deg] bg-gradient-to-b from-[#3b63e6] to-[#1699e8]" />

              {/* DOCTOR IMAGE */}
              <Image
                src="/cta-img.png"
                alt="Dentist inviting patients to book a dental appointment"
                width={420}
                height={520}
                className="relative z-10 h-[400px] w-[260px] sm:w-[300px] md:w-[340px] lg:w-[420px] object-contain self-end"
                priority
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="px-6 py-10 sm:px-8 md:px-10 lg:px-0 lg:py-16">
              
              <p className="text-sm font-semibold text-[#4f7df3] sm:text-base">
                Book A Dental Appointment
              </p>

              <h2 className="mt-4 max-w-[620px] text-[clamp(1.8rem,6vw,3.6rem)] font-bold leading-[1.08] text-white">
                We Are Open And Welcoming New Patients
              </h2>

              <Link
                href="/book_an_appointment"
                className="mt-8 inline-flex h-[50px] items-center justify-center rounded-md bg-gradient-to-r from-[#1699e8] to-[#4166e8] px-6 sm:px-8 text-[14px] sm:text-[15px] font-semibold uppercase text-white shadow-[0_16px_35px_rgba(65,102,232,0.25)] transition hover:scale-[1.03]"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
