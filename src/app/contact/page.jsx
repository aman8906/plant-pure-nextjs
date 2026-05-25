"use client";

import {
  FaPhoneAlt,
  FaEnvelopeOpenText,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="w-full bg-[#f7f7f7] min-h-screen overflow-hidden">

      {/* TOP BANNER */}
      <section className="w-full bg-[#049234] py-10 md:py-16 lg:py-20">
        
        <div className="max-w-[1280px] mx-auto text-center px-4">
          
          <h1 className="text-white text-[30px] sm:text-[40px] md:text-[55px] lg:text-[60px] font-bold">
            Contact
          </h1>

          <div className="mt-2 md:mt-4 flex items-center justify-center gap-2 text-[12px] sm:text-[15px] md:text-[18px]">
            
            <span className="text-[#d4ea00] underline cursor-pointer">
              Home
            </span>

            <span className="text-white">/</span>

            <span className="text-white">
              Contact
            </span>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-12 md:py-16 lg:py-24">
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

          {/* HEADING */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">

            <h2 className="text-[30px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-bold leading-tight text-[#003c33]">
              Get in Touch With Us
            </h2>

            <p className="mt-4 md:mt-6 text-[15px] sm:text-[17px] md:text-[20px] lg:text-[22px] text-[#4e4e4e] leading-[28px] max-w-[900px] mx-auto">
              Plant Pure is your source for healthy way of living.
              We welcome you at our facility at any time!
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* LEFT SIDE */}
            <div className="pt-0 lg:pt-10">

              {/* PHONE */}
              <div className="flex items-start sm:items-center gap-4 md:gap-5 mb-10 md:mb-12">

                <div className="text-[#aab71a] text-[24px] sm:text-[28px] md:text-[34px] mt-1 sm:mt-0">
                  <FaPhoneAlt />
                </div>

                <span className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] text-[#404040] break-all">
                  +91-9810999976
                </span>
              </div>

              {/* EMAIL */}
              <div className="flex items-start sm:items-center gap-4 md:gap-5">

                <div className="text-[#aab71a] text-[24px] sm:text-[28px] md:text-[34px] mt-1 sm:mt-0">
                  <FaEnvelopeOpenText />
                </div>

                <span className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] text-[#404040] break-all leading-[32px]">
                  indiacraftworld@gmail.com
                </span>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div>

              <form className="space-y-4 md:space-y-5">

                {/* NAME */}
                <input
                  type="text"
                  placeholder="Name *"
                  className="
                  w-full
                  h-[54px] md:h-[60px] lg:h-[64px]
                  border border-[#0b5d45]
                  rounded-[5px]
                  px-4 md:px-5
                  text-[15px] md:text-[18px] lg:text-[20px]
                  outline-none
                  bg-transparent
                  placeholder:text-[#a1a1a1]
                "
                />

                {/* PHONE */}
                <input
                  type="text"
                  placeholder="Phone Number *"
                  className="
                  w-full
                  h-[54px] md:h-[60px] lg:h-[64px]
                  border border-[#0b5d45]
                  rounded-[5px]
                  px-4 md:px-5
                  text-[15px] md:text-[18px] lg:text-[20px]
                  outline-none
                  bg-transparent
                  placeholder:text-[#a1a1a1]
                "
                />

                {/* EMAIL */}
                <input
                  type="email"
                  placeholder="Email *"
                  className="
                  w-full
                  h-[54px] md:h-[60px] lg:h-[64px]
                  border border-[#0b5d45]
                  rounded-[5px]
                  px-4 md:px-5
                  text-[15px] md:text-[18px] lg:text-[20px]
                  outline-none
                  bg-transparent
                  placeholder:text-[#a1a1a1]
                "
                />

                {/* MESSAGE */}
                <textarea
                  rows={5}
                  placeholder="Message *"
                  className="
                  w-full
                  border border-[#0b5d45]
                  rounded-[5px]
                  px-4 md:px-5
                  py-4
                  text-[15px] md:text-[18px] lg:text-[20px]
                  outline-none
                  resize-none
                  bg-transparent
                  placeholder:text-[#a1a1a1]
                "
                />

                {/* CHECKBOX */}
                <div className="flex items-start gap-3 pt-1">

                  <input
                    type="checkbox"
                    className="w-[17px] h-[17px] mt-1"
                  />

                  <p className="text-[13px] sm:text-[15px] md:text-[17px] lg:text-[18px] text-[#575757] leading-[24px]">
                    I agree that my submitted data is being
                    collected and stored.
                  </p>
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="
                  mt-2 md:mt-3
                  h-[52px] md:h-[60px] lg:h-[68px]
                  px-8 md:px-12 lg:px-14
                  rounded-[7px]
                  bg-[#aab71a]
                  hover:bg-[#97a116]
                  active:scale-[0.98]
                  transition-all
                  text-white
                  text-[16px] md:text-[20px] lg:text-[24px]
                  font-semibold
                "
                >
                  Send Message
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}