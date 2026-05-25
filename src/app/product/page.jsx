"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaShoppingBag,
  FaCheck,
} from "react-icons/fa";

const products = [
  {
    id: 1,
    image:
      "https://plantpure.in/wp-content/uploads/2025/10/IMG20251027142920-compressed.png",
    category: "Natural Hair Coloring Kit",
    title: "Natural Hair Coloring Kit",
    price: "900.00",
    sale: false,
  },

  {
    id: 2,
    image:
      "https://plantpure.in/wp-content/uploads/2025/10/pp_0000_hair-shampoo-cleansing.jpg",
    category: "Hair Cleansers",
    title: "Cleansing & Nourishing Hair Cleanser",
    oldPrice: "680.00",
    price: "340.00",
    sale: true,
  },

  {
    id: 3,
    image:
      "https://plantpure.in/wp-content/uploads/2025/10/pp_0001_hair-shampoo-color-protect.jpg",
    category: "Hair Cleansers",
    title: "Color Secure Hair Cleanser",
    oldPrice: "680.00",
    price: "340.00",
    sale: true,
  },

  {
    id: 4,
    image:
      "https://plantpure.in/wp-content/uploads/2025/10/jojoba-oil-back.jpg",
    category: "Natural Skin Care",
    title: "Organic Cold-Pressed Jojoba Seed Oil",
    price: "375.00",
    sale: false,
  },

  {
    id: 5,
    image:
      "https://plantpure.in/wp-content/uploads/2025/10/hibiscus-oil.jpg",
    category: "Natural Skin Care",
    title: "Moringa Oil",
    price: "350.00",
    sale: false,
  },
   {
    id: 6,
    image:
      "https://plantpure.in/wp-content/uploads/2025/10/skin-care-moringa-oil-1.jpg",
    category: "Natural Skin Care",
    title: "Hibiscus Flower Oil",
    price: "680.00",
    sale: false,
  },
];

export default function ProductPage() {

  const [addedItems, setAddedItems] = useState([]);

  const handleCart = (id) => {
    if (addedItems.includes(id)) {
      setAddedItems(
        addedItems.filter((item) => item !== id)
      );
    } else {
      setAddedItems([...addedItems, id]);
    }
  };

  return (
    <main className="w-full bg-[#f6f6f6] min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="bg-[#019331] py-10 md:py-14">
        
        <div className="text-center px-4">

          <h1 className="text-white text-[28px] md:text-[42px] font-bold">
            Product
          </h1>

          <div className="flex items-center justify-center gap-1 mt-2 text-[11px] md:text-[14px]">
            
            <Link
              href="/"
              className="text-[#d6e600] hover:underline"
            >
              Home
            </Link>

            <span className="text-white">/</span>

            <span className="text-white">
              Product
            </span>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-[1320px] mx-auto px-4 md:px-6 py-10">

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">

          {products.map((product) => {

            const isAdded = addedItems.includes(product.id);

            return (
              <div
                key={product.id}
                className="
                bg-[#f8f8f8]
                border border-[#e5e7c9]
                rounded-[14px]
                p-[10px]
                hover:shadow-md
                transition-all duration-300
                relative
              "
              >

                {/* SALE */}
                {product.sale && (
                  <div
                    className="
                    absolute top-[14px] left-[14px]
                    bg-white
                    text-[#000]
                    text-[11px]
                    px-3 py-[3px]
                    rounded-full
                    z-10
                    shadow-sm
                  "
                  >
                    Sale!
                  </div>
                )}

                {/* CART ICON */}
                <button
                  className="
                  absolute top-[12px] right-[12px]
                  w-[28px] h-[28px]
                  rounded-full
                  bg-[#eef1f3]
                  flex items-center justify-center
                  shadow-sm
                  hover:bg-[#dfe5e8]
                  transition-all duration-300
                  z-10
                "
                >
                  <FaShoppingBag className="text-[#4d4d4d] text-[12px]" />
                </button>

                {/* IMAGE */}
                <div className="overflow-hidden rounded-[10px]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={500}
                    height={500}
                    className="
                    w-full
                    h-[170px]
                    sm:h-[240px]
                    md:h-[260px]
                    object-cover
                    hover:scale-[1.04]
                    transition-all duration-500
                  "
                  />
                </div>

                {/* CONTENT */}
                <div className="pt-4">

                  {/* CATEGORY */}
                  <p
                    className="
                    text-[#9b9b9b]
                    text-[10px]
                    sm:text-[12px]
                    mb-1
                  "
                  >
                    {product.category}
                  </p>

                  {/* TITLE */}
                  <h2
                    className="
                    text-[#003c33]
                    text-[14px]
                    sm:text-[18px]
                    leading-[20px]
                    sm:leading-[26px]
                    font-extrabold
                    min-h-[44px]
                    sm:min-h-[58px]
                  "
                  >
                    {product.title}
                  </h2>

                  {/* PRICE */}
                  <div className="mt-2 flex items-center gap-2 flex-wrap">

                    {product.oldPrice && (
                      <span
                        className="
                        text-[#9d9d9d]
                        line-through
                        text-[12px]
                        sm:text-[15px]
                        font-semibold
                      "
                      >
                        ₹{product.oldPrice}
                      </span>
                    )}

                    <span
                      className="
                      text-[#aab71a]
                      text-[15px]
                      sm:text-[22px]
                      font-bold
                    "
                    >
                      ₹{product.price}
                    </span>
                  </div>

                  {/* BUTTON */}
                  <button
                    onClick={() => handleCart(product.id)}
                    className={`
                    mt-5
                    h-[42px]
                    sm:h-[46px]
                    px-5 sm:px-6
                    rounded-[6px]
                    text-white
                    text-[13px]
                    sm:text-[15px]
                    font-medium
                    flex items-center justify-center gap-2
                    transition-all duration-300
                    ${
                      isAdded
                        ? "bg-[#aab71a]"
                        : "bg-[#aab71a] hover:bg-[#98a414]"
                    }
                  `}
                  >
                    Add to cart

                    {isAdded && (
                      <FaCheck className="text-white text-[12px]" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}