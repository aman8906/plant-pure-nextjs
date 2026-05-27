"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import {
  FaLeaf,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const principles = [
  {
    id: 1,
     image: "/natural-icon.png",
    title: "Nature-Based Ingredients",
    desc:
      "Every PlantPure product is made with traditional herbal ingredients known for their ability to nourish and restore hair health.",
  },

  {
    id: 2,
    image:
      "/chemical-icon.png",
    title: "Chemical-Free Formulas",
    desc:
      "We never use ammonia, parabens, or other harsh chemicals. Our focus is on pure, gentle care that supports scalp and skin health.",
  },

  {
    id: 3,
    image:
      "/safe-icon.png",
    title: "3. Healthy Hair Focus",
    desc:
      "PlantPure products promote stronger hair growth, reduce hair fall, and improve texture — all through the power of plants.",
  },
];

const faqs = [
  {
    question: "What is Plant Pure?",
    answer:
      "PlantPure is a natural hair care brand focused on chemical-free, herbal-based products for healthy hair and scalp care.",
  },

  {
    question: "Is PlantPure hair color completely natural?",
    answer:
      "Yes, PlantPure products are made using plant-based ingredients without harmful chemicals like ammonia and parabens.",
  },

  {
    question:
      "How is PlantPure different from other hair color brands?",
    answer:
      "PlantPure focuses on natural nourishment, scalp safety, and sustainable herbal formulas for long-term healthy hair.",
  },

  {
    question: "Where can I find PlantPure products?",
    answer:
      "You can purchase PlantPure products online and through selected retail and salon partners.",
  },

  {
    question:
      "Are PlantPure products safe for all hair types?",
    answer:
      "Yes, PlantPure products are designed to work safely on most hair types and textures.",
  },
];

export default function AboutPage() {

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  return (
    <main className="w-full bg-[#f6f6f6] overflow-hidden">

      {/* HERO */}
      <section className="bg-[#019331] py-10 md:py-14">
        
        <div className="max-w-[1280px] mx-auto text-center px-4">

          <h1 className="text-white text-[28px] sm:text-[38px] md:text-[50px] font-bold leading-tight">
            About Plant Pure Naturals
          </h1>

          <div className="flex items-center justify-center gap-1 mt-3 text-[12px] md:text-[16px]">
            
            <Link
              href="/"
              className="text-[#d7ea00] underline"
            >
              Home
            </Link>

            <span className="text-white">/</span>

            <span className="text-white">
              About Plant Pure Naturals
            </span>
          </div>
        </div>
      </section>

      {/* ABOUT TEXT */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 md:py-16 text-center">
        
        <p className="text-[#555] text-[16px] md:text-[20px] leading-[34px] max-w-[1180px] mx-auto">
          PlantPure is your one-stop solution for 100% natural,
          chemical-free hair care. Our products help maintain,
          color, and condition hair using time-tested,
          plant-based ingredients and simple natural
          techniques. From hair coloring kits to scalp
          cleansers, moisturizers, and natural oils,
          PlantPure offers complete care without harsh
          chemicals. In a short time, we’ve become a trusted
          name in natural hair care across India.
        </p>
      </section>

      {/* PRINCIPLES */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 pb-14">

        <h2 className="text-center text-[#00893b] text-[32px] md:text-[48px] font-bold mb-10">
          Our Key Principles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {principles.map((item) => (
            <div
              key={item.id}
              className="
              bg-white
              border border-[#12b44b]
              rounded-[16px]
              px-6 py-10
              text-center
              hover:shadow-lg
              transition-all duration-300
            "
            >

              {/* IMAGE */}
              <div className="flex justify-center">
                <img
  src={item.image}
  alt={item.title}
  className="w-[710px] h-[110px] object-contain"
/>
              </div>

              {/* TITLE */}
              <h3
                className="
                mt-6
                text-[#003c33]
                text-[24px]
                font-bold
              "
              >
                {item.title}
              </h3>

              {/* DESC */}
              <p
                className="
                mt-4
                text-[#003c33]
                text-[16px]
                leading-[34px]
              "
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* IMPACT */}
      <section className="pb-16 px-4">

        <div className="max-w-[900px] mx-auto text-center">

          <h2 className="text-[#00893b] text-[32px] md:text-[48px] font-bold">
            Our Impact
          </h2>

          <p className="mt-4 text-[#555] text-[16px] md:text-[20px] leading-[34px]">
            By offering{" "}
            <span className="font-bold">
              chemical-free, plant-based hair color and care,
            </span>{" "}
            PlantPure helps people across India:
          </p>

          {/* BOX */}
          <div
            className="
            mt-8
            border border-[#009640]
            rounded-[18px]
            bg-white
            px-5 md:px-7
            py-4
          "
          >

            {/* ITEM */}
            <div className="flex items-start gap-4 py-5 border-b border-[#d7d7d7]">
              
              <FaLeaf className="text-[#009640] text-[18px] mt-1" />

              <p className="text-left text-[#003c33] text-[16px] md:text-[18px]">
                Protect their hair from damage caused by
                synthetic treatments.
              </p>
            </div>

            {/* ITEM */}
            <div className="flex items-start gap-4 py-5 border-b border-[#d7d7d7]">
              
              <FaLeaf className="text-[#009640] text-[18px] mt-1" />

              <p className="text-left text-[#003c33] text-[16px] md:text-[18px]">
                Encourage natural growth through nutrient-rich
                ingredients.
              </p>
            </div>

            {/* ITEM */}
            <div className="flex items-start gap-4 py-5">
              
              <FaLeaf className="text-[#009640] text-[18px] mt-1" />

              <p className="text-left text-[#003c33] text-[16px] md:text-[18px]">
                Embrace natural beauty by choosing products
                that work in harmony with nature
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND */}
      <section className="bg-[#019331] py-14 md:py-20 px-4">

        <div className="max-w-[1200px] mx-auto text-center">

          <h2 className="text-white text-[34px] md:text-[52px] font-bold">
            The Brand Today
          </h2>

          <p className="mt-6 text-white text-[17px] md:text-[22px] leading-[40px]">
            PlantPure is now one of the fastest-growing natural
            hair care brands in India. Our products are known
            for safe coloring, deep cleansing, and long-lasting
            nourishment — all achieved without compromising
            scalp health.
          </p>

          <p className="mt-8 text-white text-[17px] md:text-[22px] leading-[40px]">
            Our consistent quality has earned the trust of
            customers nationwide, along with partnerships in
            leading hair salons across Delhi, Gurugram, and
            Mumbai. With every product, we stay true to our
            commitment to natural ingredients, healthy hair,
            and sustainable beauty.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-[1150px] mx-auto px-4 py-16">

        <h2 className="text-center text-[#00893b] text-[34px] md:text-[50px] font-bold mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[14px]"
            >

              {/* QUESTION */}
              <button
                onClick={() => toggleFaq(index)}
                className="
                w-full
                bg-[#07b53f]
                hover:bg-[#06a33a]
                transition-all duration-300
                px-5 md:px-7
                py-5
                flex items-center justify-between
                text-left
              "
              >

                <div className="flex items-center gap-5">

                  {openFaq === index ? (
                    <FaMinus className="text-white text-[14px]" />
                  ) : (
                    <FaPlus className="text-white text-[14px]" />
                  )}

                  <span
                    className="
                    text-white
                    text-[16px]
                    md:text-[24px]
                    font-medium
                  "
                  >
                    {faq.question}
                  </span>
                </div>
              </button>

              {/* ANSWER */}
              <div
                className={`
                bg-white
                transition-all duration-300 overflow-hidden
                ${
                  openFaq === index
                    ? "max-h-[300px] py-5 px-6"
                    : "max-h-0 px-6"
                }
              `}
              >
                <p className="text-[#444] text-[15px] md:text-[18px] leading-[32px]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROMISE */}
      <section className="pb-16 px-4">

        <div className="max-w-[1200px] mx-auto text-center">

          <h2 className="text-[#00893b] text-[34px] md:text-[50px] font-bold">
            Our Promise
          </h2>

          <p className="mt-8 text-[#555] text-[17px] md:text-[22px] leading-[40px]">
            At PlantPure, we believe healthy hair starts with
            nature. Every product we create reflects our
            mission —{" "}
            <span className="font-bold">
              to care for your hair the natural way
            </span>
            , without compromise.
          </p>

          <h3
            className="
            mt-12
            text-[#00893b]
            italic
            text-[28px]
            md:text-[48px]
            font-light
          "
          >
            PlantPure — 100% Natural. Chemical-Free.
            Beautifully Pure.
          </h3>
        </div>
      </section>
    </main>
  );
}