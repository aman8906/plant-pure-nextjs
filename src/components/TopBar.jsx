"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHeadphonesAlt } from "react-icons/fa";

export default function TopBar() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Plant Pure",
      path: "/about",
    },
    {
      name: "Product",
      path: "/product",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="hidden md:block w-full bg-white border-t border-b border-[#ececec]">
      
      <div className="max-w-[1280px] mx-auto h-[82px] px-6 flex items-center relative">
        
        {/* LEFT CALL SECTION */}
        <div className="flex items-center gap-[10px] min-w-fit">
          
          <FaHeadphonesAlt className="text-[#0c5b47] text-[18px]" />

          <div className="flex items-center gap-[8px]">
            <span className="text-[#0c5b47] text-[15px] font-medium whitespace-nowrap">
              Call us 24/7 :
            </span>

            <a
              href="tel:+919810999976"
              className="text-[#a4b61a] text-[15px] font-semibold hover:text-[#8ea012] transition-all duration-300"
            >
              +91-9810999976
            </a>
          </div>
        </div>

        {/* CENTER MENU */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-[42px]">
            
            {navItems.map((item, index) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={index}
                  href={item.path}
                  className={`
                    relative text-[15px] font-semibold transition-all duration-300
                    ${
                      isActive
                        ? "text-[#a4b61a]"
                        : "text-[#222] hover:text-[#a4b61a]"
                    }
                  `}
                >
                  {item.name}

                  {/* ACTIVE LINE */}
                  <span
                    className={`
                      
                      ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  ></span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}