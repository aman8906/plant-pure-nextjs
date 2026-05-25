"use client";

import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    image:
      "https://plantpure.in/wp-content/uploads/2025/11/washing-hair-600x360.jpg",
    title:
      "The Ultimate Guide to Washing and Detangling Hair: Tips for Healthy, Tangle-Free Locks",
    desc:
      "Washing and detangling hair can be a daunting task, especially for those with long or curly locks. However, with the right techniques and tools, you",
  },

  {
    id: 2,
    image:
      "https://plantpure.in/wp-content/uploads/2025/11/henna-dye-blog-600x360.jpg",
    title:
      "The Natural Beauty of Henna: Unlocking its Uses and Advantages",
    desc:
      "Henna, also known as Lawsonia inermis, is a plant-based dye that has been used for centuries to adorn the body, hair, and skin. From traditional",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="bg-[#019332] h-[85px] md:h-[95px] flex items-center justify-center">
        
        <div className="text-center">
          
          <h1 className="text-white text-[20px] md:text-[24px] font-bold">
            Blog
          </h1>

          <div className="flex items-center justify-center gap-1 mt-[3px] text-[11px]">
            
            <Link
              href="/"
              className="text-[#d6e600] hover:underline"
            >
              Home
            </Link>

            <span className="text-white">/</span>

            <span className="text-white">
              Blog
            </span>
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-8 lg:px-10 py-6 md:py-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">

          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="
              bg-[#f7f7f7]
              border border-[#d6ead8]
              rounded-[8px]
              p-[10px]
              shadow-sm
              hover:shadow-md
              transition-all duration-300
            "
            >

              {/* IMAGE */}
              <div className="overflow-hidden rounded-[6px]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={500}
                  height={320}
                  className="
                  w-full
                  h-[200px]
                  sm:h-[210px]
                  md:h-[220px]
                  object-cover
                  hover:scale-[1.03]
                  transition-all duration-500
                "
                />
              </div>

              {/* CONTENT */}
              <div className="pt-3">

                <h2
                  className="
                  text-[#013220]
                  text-[15px]
                  sm:text-[16px]
                  leading-[22px]
                  font-extrabold
                  hover:text-[#019332]
                  transition-all duration-300
                  cursor-pointer
                  line-clamp-2
                "
                >
                  {blog.title}
                </h2>

                <p
                  className="
                  text-[#777]
                  text-[12px]
                  leading-[20px]
                  mt-3
                  line-clamp-3
                "
                >
                  {blog.desc}
                </p>

                {/* READ MORE */}
                <button
                  className="
                  mt-4
                  text-[#9ab600]
                  text-[12px]
                  font-semibold
                  hover:text-[#019332]
                  transition-all duration-300
                  relative
                  after:absolute
                  after:left-0
                  after:-bottom-[2px]
                  after:w-0
                  after:h-[1px]
                  after:bg-[#019332]
                  hover:after:w-full
                  after:transition-all
                  after:duration-300
                "
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}