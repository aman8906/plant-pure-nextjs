"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <div className="w-full bg-[#f8f8f8] border-t-[4px] border-[#0a963d]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-5 flex items-center justify-between">

          {/* MOBILE LOGO */}
          <div className="flex items-center">
            <Image
              src="https://plantpure.in/wp-content/uploads/2025/09/Plant-Pure-logo.png"
              alt="Plant Pure"
              width={85}
              height={120}
              className="object-contain"
            />
          </div>

          {/* DESKTOP SEARCH */}
          <div className="hidden md:flex items-center w-[380px] h-[52px] bg-white border border-[#3a3a3a] rounded-full overflow-hidden shadow-[0_2px_6px_rgba(0,0,0,0.15)]">

            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 h-full px-5 text-[17px] text-[#666] placeholder:text-[#8b8b8b] outline-none bg-transparent"
            />

            <button className="h-full px-10 bg-[#00a63f] hover:bg-[#00963a] text-white flex items-center justify-center gap-3 text-[17px] font-medium border-l border-[#008a35] transition-all">

              <FaSearch className="text-[15px]" />

              <span>Search</span>
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-5 md:gap-8">

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden w-[48px] h-[48px] rounded-[6px] bg-[#a9b71a] flex items-center justify-center text-white text-[24px]"
            >
              <FaBars />
            </button>

            {/* LOGIN */}
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-[38px] h-[38px] rounded-full bg-[#a9b71a] flex items-center justify-center">
                <FaUser className="text-white text-[16px]" />
              </div>

              <span className="text-[#a9b71a] text-[16px] font-medium hidden sm:block">
                Login
              </span>
            </div>

            {/* CART */}
            <div className="relative cursor-pointer w-[42px] h-[42px] rounded-full bg-[#efe5df] flex items-center justify-center">

              <FaShoppingCart className="text-[#006837] text-[21px]" />

              <span className="absolute top-[-5px] right-[-3px] w-[18px] h-[18px] rounded-full bg-[#ff5b5b] text-white text-[10px] flex items-center justify-center font-semibold">
                0
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 z-[9999] h-full w-full bg-black/40 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        {/* SIDEBAR */}
        <div
          className={`absolute top-0 left-0 h-full w-[305px] bg-[#08963c] transition-all duration-300 ${
            menuOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }`}
        >

          {/* CLOSE BTN */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-[-55px] w-[45px] h-[45px] rounded-full bg-black text-white flex items-center justify-center text-[20px]"
          >
            <FaTimes />
          </button>

          {/* LOGO */}
          <div className="px-8 pt-6 pb-5">
            <Image
              src="https://plantpure.in/wp-content/uploads/2025/09/Plant-Pure-logo.png"
              alt="Plant Pure"
              width={95}
              height={120}
              className="object-contain"
            />
          </div>

          {/* MENU */}
          <div className="mt-4">

            <Link
              href="/"
              className="block bg-[#a9b71a] text-[#17361e] text-[28px] font-normal px-6 py-5 border-b border-[#d5df7a]"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="block bg-[#a9b71a] text-white text-[16px] font-semibold px-6 py-5 border-b border-[#d5df7a]"
            >
              About Plant Pure
            </Link>

            <Link
              href="/product"
              className="block bg-[#a9b71a] text-white text-[16px] font-semibold px-6 py-5 border-b border-[#d5df7a]"
            >
              Product
            </Link>

            <Link
              href="/blog"
              className="block bg-[#a9b71a] text-white text-[16px] font-semibold px-6 py-5 border-b border-[#d5df7a]"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="block bg-[#a9b71a] text-white text-[16px] font-semibold px-6 py-5 border-b border-[#d5df7a]"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}