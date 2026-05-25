"use client";

import Link from "next/link";
import { FaHeadphonesAlt } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="hidden md:block w-full bg-white border-t border-b border-[#ececec]">
      
      <div className="max-w-[1280px] mx-auto h-[82px] px-4 lg:px-6 flex items-center justify-between">
        
        {/* LEFT */}
        <div className="flex items-center gap-[10px]">
          
          {/* ICON */}
          <div className="flex items-center justify-center">
            <FaHeadphonesAlt className="text-[#0c5b47] text-[18px]" />
          </div>

          {/* TEXT */}
          <div className="flex items-center gap-[10px]">
            
            <span className="text-[#0c5b47] text-[15px] font-medium tracking-[0.2px] whitespace-nowrap">
              Call us 24/7 :
            </span>

            <a
              href="tel:+919810999976"
              className="text-[#a4b61a] text-[15px] font-semibold tracking-[0.2px] hover:text-[#8ea012] transition-all duration-300"
            >
              +91-9810999976
            </a>
          </div>
        </div>

        {/* MENU DESKTOP ONLY */}
        <div className="hidden lg:flex items-center gap-[48px]">
          
          <Link
            href="/"
            className="text-[#a4b61a] text-[15px] font-medium"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-[#222] text-[15px] font-medium hover:text-[#a4b61a] transition-all duration-300"
          >
            About Plant Pure
          </Link>

          <Link
            href="/product"
            className="text-[#222] text-[15px] font-medium hover:text-[#a4b61a] transition-all duration-300"
          >
            Product
          </Link>

          <Link
            href="/blog"
            className="text-[#222] text-[15px] font-medium hover:text-[#a4b61a] transition-all duration-300"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className="text-[#222] text-[15px] font-medium hover:text-[#a4b61a] transition-all duration-300"
          >
            Contact
          </Link>

        </div>
      </div>
    </div>
  );
}