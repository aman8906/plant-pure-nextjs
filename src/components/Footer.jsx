"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaChevronUp,
} from "react-icons/fa";

export default function Footer() {

  const [showScroll, setShowScroll] = useState(false);

  // SHOW BUTTON AFTER SCROLL
  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  // SCROLL TOP
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#04552d] overflow-hidden">

      {/* MAIN FOOTER */}
      <div className="max-w-[980px] mx-auto px-5 pt-14 pb-8 text-center">

        {/* LOGO */}
        <div className="flex justify-center">
          <Image
           src="https://plantpure.in/wp-content/uploads/2025/09/Plant-Pure-logo.png"
              alt="Plant Pure"
            width={95}
            height={95}
            className="object-contain"
          />
        </div>

        {/* LINE */}
        <div className="border-t border-[#d9d9d9] mt-7"></div>

        {/* MENU */}
        <div className="flex flex-wrap justify-center items-center gap-5 md:gap-7 py-5 text-white font-semibold text-[15px]">

          <Link
            href="/"
            className="text-[#d4d91f]"
          >
            Home
          </Link>

          <span>|</span>

          <Link
            href="/about"
            className="hover:text-[#d4d91f] transition-all duration-300"
          >
            About Plant Pure
          </Link>

          <span>|</span>

          <Link
            href="/product"
            className="hover:text-[#d4d91f] transition-all duration-300"
          >
            Product
          </Link>

          <span>|</span>

          <Link
            href="/blog"
            className="hover:text-[#d4d91f] transition-all duration-300"
          >
            Blog
          </Link>

          <span>|</span>

          <Link
            href="/contact"
            className="hover:text-[#d4d91f] transition-all duration-300"
          >
            Contact
          </Link>
        </div>

        {/* LINE */}
        <div className="border-t border-[#d9d9d9]"></div>

        {/* CONTACT */}
        <div className="py-7 flex flex-wrap items-center justify-center gap-3 text-[15px]">

          <span className="text-white font-semibold">
            Phone :
          </span>

          <a
            href="tel:+919810999976"
            className="text-[#d4d91f] font-bold hover:text-white transition-all duration-300"
          >
            +91-9810999976
          </a>

          <span className="text-white font-semibold">
            Email :
          </span>

          <a
            href="mailto:indiacraftworld@gmail.com"
            className="text-[#d4d91f] font-bold hover:text-white transition-all duration-300"
          >
            indiacraftworld@gmail.com
          </a>
        </div>

        {/* LINE */}
        <div className="border-t border-[#d9d9d9]"></div>

        {/* COPYRIGHT */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-5 text-sm">

          <p className="text-white leading-[24px] text-center md:text-left">
            Copyright © Plantpure - 2025. All Rights
            <br className="hidden md:block" />
            Reserved.
          </p>

          <p className="text-white leading-[24px] text-center md:text-left">
            Website designed & developed by{" "}
            <span className="text-[#48d21f]">
              Web Palettes
            </span>{" "}
            — Website designing company in
            <br className="hidden md:block" />
            <span className="text-[#48d21f]">
              Noida, India
            </span>
          </p>
        </div>
      </div>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919810999976"
        target="_blank"
        rel="noopener noreferrer"
        className="
        fixed bottom-6 left-4 z-50
        bg-[#2cbfa5]
        hover:bg-[#23a18d]
        active:scale-[0.96]
        transition-all duration-300
        h-[52px] px-5
        rounded-md shadow-2xl
        flex items-center gap-3
        animate-bounce
      "
      >
        <FaWhatsapp className="text-white text-[22px]" />

        <span className="text-white font-medium text-[15px] whitespace-nowrap">
          How may I help you?
        </span>
      </a>

      {/* SCROLL TOP BUTTON */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="
          fixed bottom-6 right-5 z-50
          w-[34px] h-[34px]
          bg-[#79be1f]
          hover:bg-[#6aaa18]
          active:scale-95
          transition-all duration-300
          rounded-sm
          shadow-xl
          flex items-center justify-center
        "
        >
          <FaChevronUp className="text-white text-[13px]" />
        </button>
      )}
    </footer>
  );
}