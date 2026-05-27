"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "PlantPure Natural Hair\nColoring Kit",
    desc: "Color, care, and condition in one gentle blend. With Henna, Indigo, and Hibiscus Oil, PlantPure delivers rich tones, radiant shine, and hair that feels as healthy as it looks.",
    btn: "Buy Now!",
    image: "/banner.png",
    link: "/product",
  },

  {
    id: 2,
    title: "Pure. Powerful.\nNaturally Beautiful.",
    desc: "Discover PlantPure’s 100% Natural Hair & Skin Care Range — crafted with herbs, oils, and botanicals that protect, restore, and nourish from root to tip.",
    btn: "Shop Collection",
    image: "/banner2.png",
    link: "/product",
  },
];

const products = [
  {
    id: 1,
    name: "Color Secure Hair Cleanser",
    price: "₹340.00",
    oldPrice: "₹680.00",
    image: "/p1.jpg",
    badge: "Sale 50%",
  },

  {
    id: 2,
    name: "Organic Cold-Pressed Jojoba Seed Oil",
    price: "₹375.00",
    image: "/p2.jpg",
  },

  {
    id: 3,
    name: "Moringa Oil",
    price: "₹350.00",
    image: "/p3.jpg",
  },

  {
    id: 4,
    name: "Hibiscus Flower Oil",
    price: "₹680.00",
    image: "/p4.jpg",
  },

  {
    id: 5,
    name: "Natural Hair Colour Kit",
    price: "₹900.00",
    image: "/p5.jpg",
  },

  {
    id: 6,
    name: "Hair Growth Oil",
    price: "₹550.00",
    image: "/p4.jpg",
  },
  {
    id: 7,
    name: "Cleansing & Nourishing Hair Cleanser",
    price: "₹340.00",
    oldPrice: "₹680.00",
    image: "/p7.jpg",
    badge: "Sale 50%",
  },

];

export default function HomePage() {
  const router = useRouter();

  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(true);

  const sliderRef = useRef(null);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);

  // ANIMATION
  const triggerAnimation = () => {
    setAnimate(false);

    setTimeout(() => {
      setAnimate(true);
    }, 100);
  };

  // NEXT
  const nextSlide = () => {
    triggerAnimation();

    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // PREV
  const prevSlide = () => {
    triggerAnimation();

    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // PRODUCT SLIDER
  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* ================= HERO BANNER ================= */}

      <section className="w-full overflow-hidden bg-white">
        <div className="relative w-full h-[320px] sm:h-[450px] md:h-[580px] lg:h-[650px]">

          {/* BACKGROUND IMAGE */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
              animate
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
            style={{
              backgroundImage: `url(${slides[current].image})`,
            }}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/5"></div>

          {/* CONTENT */}
          <div className="absolute inset-0 z-10 max-w-[1280px] mx-auto px-6 md:px-12 flex items-center">

            <div
              className={`max-w-[650px] transition-all duration-700 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >

              {/* TITLE */}
              <h1
                className="
                whitespace-pre-line
                text-[#014b35]
                font-bold
                leading-[0.95]
                text-[38px]
                sm:text-[58px]
                md:text-[72px]
                lg:text-[82px]
              "
              >
                {slides[current].title}
              </h1>

              {/* DESCRIPTION */}
              <p
                className="
                mt-5
                text-[#0c4a37]
                leading-[1.6]
                text-[14px]
                sm:text-[18px]
                md:text-[22px]
                max-w-[760px]
              "
              >
                {slides[current].desc}
              </p>

              {/* BUTTON */}
              <button
                onClick={() => router.push(slides[current].link)}
                className="
                mt-7
                relative
                overflow-hidden
                bg-[#a8b71a]
                hover:bg-[#8f9f10]
                hover:scale-105
                active:scale-95
                transition-all
                duration-300
                text-white
                font-semibold
                rounded-full
                px-8
                md:px-10
                h-[48px]
                md:h-[56px]
                text-[15px]
                md:text-[17px]
                shadow-lg
                cursor-pointer
                group
              "
              >
                <span className="relative z-10">
                  {slides[current].btn}
                </span>

                {/* HOVER EFFECT */}
                <span
                  className="
                  absolute
                  inset-0
                  bg-white/20
                  scale-x-0
                  group-hover:scale-x-100
                  origin-left
                  transition-transform
                  duration-500
                "
                ></span>
              </button>
            </div>
          </div>

          {/* LEFT BUTTON */}
          <button
            onClick={prevSlide}
            className="
            absolute
            left-3
            md:left-5
            top-1/2
            -translate-y-1/2
            z-20
            bg-white/80
            hover:bg-white
            hover:scale-110
            active:scale-95
            shadow-md
            rounded-full
            w-[42px]
            h-[42px]
            md:w-[55px]
            md:h-[55px]
            flex
            items-center
            justify-center
            transition-all
            duration-300
          "
          >
            <ChevronLeft className="text-[#014b35] w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            className="
            absolute
            right-3
            md:right-5
            top-1/2
            -translate-y-1/2
            z-20
            bg-white/80
            hover:bg-white
            hover:scale-110
            active:scale-95
            shadow-md
            rounded-full
            w-[42px]
            h-[42px]
            md:w-[55px]
            md:h-[55px]
            flex
            items-center
            justify-center
            transition-all
            duration-300
          "
          >
            <ChevronRight className="text-[#014b35] w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* DOTS */}
          <div className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">

            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  triggerAnimation();
                  setCurrent(index);
                }}
                className={`transition-all duration-300 rounded-full ${
                  current === index
                    ? "bg-[#9eb317] w-[34px] h-[10px]"
                    : "bg-white border border-[#9eb317] w-[10px] h-[10px]"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= WELCOME SECTION ================= */}

      <section className="bg-[#f5f5f5] py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 text-center">

          <h2
            className="
            text-[#014b35]
            font-semibold
            text-[34px]
            md:text-[52px]
            leading-tight
          "
          >
            Welcome to Plant Pure
          </h2>

          <p
            className="
            mt-8
            text-[#4a4a4a]
            text-[16px]
            md:text-[25px]
            leading-[1.8]
          "
          >
            Plantpure in india was born after having successfully converted
            5000 women in Japan from chemical coloring to 100% Natural hair
            coloring.
          </p>

          <p
            className="
            mt-8
            text-[#4a4a4a]
            text-[16px]
            md:text-[25px]
            leading-[1.8]
            max-w-[1000px]
            mx-auto
          "
          >
            The hair coloring kit comprises of henna, hibiscus oil and indigo
            powder. This not only covers your greys but prevents hair fall,
            thinning of hair and makes your hair frizz free and brings back the
            bounce in the hair.
          </p>

          <Link href="/about">
            <button
              className="
              mt-10
              bg-[#a8b71a]
              hover:bg-[#8e9d10]
              text-white
              font-semibold
              rounded-xl
              px-10
              h-[55px]
              text-[18px]
              transition-all
              duration-300
              hover:scale-105
              shadow-lg
              cursor-pointer
            "
            >
              Know More
            </button>
          </Link>
        </div>
      </section>

      {/* ================= WHO WE ARE SECTION ================= */}

      <section className="w-full bg-[#f3f3f3] py-14 md:py-20">
        <div className="max-w-[1320px] mx-auto px-4 md:px-6">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

            {/* LEFT */}
            <div className="text-center">

              <h2
                className="
                text-[#014b35]
                font-semibold
                text-[34px]
                md:text-[48px]
                leading-tight
              "
              >
                Who We Are
              </h2>

              <p
                className="
                mt-6
                text-[#3d3d3d]
                text-[17px]
                md:text-[20px]
                leading-[1.9]
                max-w-[420px]
                mx-auto
              "
              >
                Our journey began with one goal — to offer pure,
                chemical-free alternatives to everyday hair and
                skin care.
              </p>

              <p
                className="
                mt-8
                text-[#3d3d3d]
                text-[17px]
                md:text-[20px]
                leading-[1.9]
                max-w-[420px]
                mx-auto
              "
              >
                Each product combines traditional botanical
                wisdom with modern care, ensuring visible results
                without harmful additives.
              </p>

              <div className="mt-10 overflow-hidden rounded-xl">
                <img
                  src="/about1.png"
                  alt="Who We Are"
                  className="
                  w-full
                  h-[280px]
                  md:h-[420px]
                  object-cover
                "
                />
              </div>
            </div>

            {/* CENTER */}
            <div className="text-center">

              <div className="overflow-hidden rounded-xl">
                <img
                  src="/chemicalfree.png"
                  alt="Chemical Free"
                  className="
                  w-full
                  h-[280px]
                  md:h-[420px]
                  object-cover
                "
                />
              </div>

              <h2
                className="
                mt-8
                text-[#014b35]
                font-semibold
                text-[34px]
                md:text-[48px]
                leading-tight
              "
              >
                What We Create
              </h2>

              <p
                className="
                mt-6
                text-[#3d3d3d]
                text-[17px]
                md:text-[20px]
                leading-[1.9]
                max-w-[430px]
                mx-auto
              "
              >
                From plant-based hair colors to natural cleansers,
                serums, and oils, our products are powered by
                ingredients like hibiscus, rosemary, henna,
                moringa and seabuckthorn.
              </p>

              <p
                className="
                mt-8
                text-[#3d3d3d]
                text-[17px]
                md:text-[20px]
                leading-[1.9]
                max-w-[430px]
                mx-auto
              "
              >
                Every formula is made to nourish, protect, and
                enhance your natural beauty — the way nature
                intended.
              </p>
            </div>

            {/* RIGHT */}
            <div className="text-center">

              <h2
                className="
                text-[#014b35]
                font-semibold
                text-[34px]
                md:text-[48px]
                leading-tight
              "
              >
                How We Work
              </h2>

              <p
                className="
                mt-6
                text-[#3d3d3d]
                text-[17px]
                md:text-[20px]
                leading-[1.9]
                max-w-[430px]
                mx-auto
              "
              >
                We partner with trusted growers and local
                communities to source pure, sustainable
                botanicals.
              </p>

              <p
                className="
                mt-8
                text-[#3d3d3d]
                text-[17px]
                md:text-[20px]
                leading-[1.9]
                max-w-[430px]
                mx-auto
              "
              >
                Our process is simple — no harsh chemicals, no
                shortcuts, and no compromise on quality.
              </p>

              <div className="mt-10 overflow-hidden rounded-xl">
                <img
                  src="/farmers.png"
                  alt="How We Work"
                  className="
                  w-full
                  h-[280px]
                  md:h-[420px]
                  object-cover
                "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT SLIDER ================= */}

      <section className="w-full bg-[#f3f3f3] py-16 overflow-hidden">

        {/* HEADING */}
        <div className="text-center px-4">

          <h2
            className="
            text-[#014b35]
            text-[32px]
            md:text-[48px]
            font-semibold
            leading-tight
          "
          >
            Your favourites - Powered by Nature.
          </h2>

          <p
            className="
            mt-4
            text-[#555]
            text-[15px]
            md:text-[18px]
          "
          >
            These are our most-loved PlantPure essentials,
            chosen by customers who believe in natural,
            sustainable beauty.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative mt-14">

          {/* LEFT BTN */}
          <button
            onClick={scrollLeft}
            className="
            absolute
            left-2
            md:left-5
            top-1/2
            -translate-y-1/2
            z-30
            bg-white
            hover:bg-[#014b35]
            group
            shadow-xl
            w-[52px]
            h-[52px]
            rounded-sm
            flex
            items-center
            justify-center
            transition-all
            duration-300
          "
          >
            <ChevronLeft
              className="
              w-7
              h-7
              text-black
              group-hover:text-white
            "
            />
          </button>

          {/* RIGHT BTN */}
          <button
            onClick={scrollRight}
            className="
            absolute
            right-2
            md:right-5
            top-1/2
            -translate-y-1/2
            z-30
            bg-white
            hover:bg-[#014b35]
            group
            shadow-xl
            w-[52px]
            h-[52px]
            rounded-sm
            flex
            items-center
            justify-center
            transition-all
            duration-300
          "
          >
            <ChevronRight
              className="
              w-7
              h-7
              text-black
              group-hover:text-white
            "
            />
          </button>

          {/* PRODUCTS */}
          <div
            ref={sliderRef}
            className="
            flex
            gap-4
            overflow-x-auto
            scroll-smooth
            no-scrollbar
            px-3
            md:px-10
          "
          >

            {products.map((item) => (
              <div
                key={item.id}
                onClick={() => router.push("/product")}
                className="
                min-w-[300px]
                md:min-w-[320px]
                bg-[#008000]
                overflow-hidden
                rounded-[10px]
                cursor-pointer
                group
                transition-all
                duration-300
                hover:-translate-y-2
              "
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                    w-full
                    h-[330px]
                    object-cover
                    group-hover:scale-105
                    transition-all
                    duration-500
                  "
                  />

                  {/* SALE BADGE */}
                  {item.badge && (
                    <div
                      className="
                      absolute
                      top-4
                      left-4
                      bg-[#6d6d6d]
                      text-white
                      text-[14px]
                      font-semibold
                      px-4
                      py-2
                      rounded-md
                    "
                    >
                      {item.badge}
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="px-6 py-6 text-center">

                  <h3
                    className="
                    text-white
                    font-semibold
                    text-[22px]
                    leading-[1.5]
                    min-h-[70px]
                  "
                  >
                    {item.name}
                  </h3>

                  {item.oldPrice && (
                    <p
                      className="
                      text-[#d7d7d7]
                      line-through
                      text-[18px]
                      mt-2
                    "
                    >
                      {item.oldPrice}
                    </p>
                  )}

                  <p
                    className="
                    text-[#d4d410]
                    text-[22px]
                    font-medium
                    mt-2
                  "
                  >
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM BUTTON */}
          <div className="text-center mt-10">

            <button
              onClick={() => router.push("/product")}
              className="
              text-[#a8b71a]
              font-semibold
              text-[18px]
              hover:underline
              transition-all
            "
            >
              Shop All Products →
            </button>
          </div>
        </div>
      </section>
      {/* ================= WHY CHOOSE SECTION ================= */}

<section className="w-full bg-[#f3f3f3] py-16 md:py-20">

  <div className="max-w-[1180px] mx-auto px-4">

    {/* TITLE */}
    <h2
      className="
      text-center
      text-[#014b35]
      text-[34px]
      md:text-[52px]
      font-semibold
      leading-tight
    "
    >
      Why Choose PlantPure
    </h2>

    {/* CARDS */}
    <div
      className="
      mt-14
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
      gap-6
    "
    >

      {/* CARD 1 */}
      <div
        className="
        border
        border-[#00a651]
        rounded-[10px]
        bg-white
        px-6
        py-10
        text-center
        hover:-translate-y-2
        transition-all
        duration-300
      "
      >

        <img
          src="/natural-icon.png"
          alt=""
          className="
          w-[800px]
          h-[80px]
          object-contain
          mx-auto
        "
        />

        <h3
          className="
          mt-5
          text-[#014b35]
          text-[28px]
          font-semibold
          leading-[1.3]
        "
        >
          100% Natural Ingredients
        </h3>

        <p
          className="
          mt-4
          text-[#444]
          text-[17px]
          leading-[1.8]
        "
        >
          Made from pure herbs and plant extracts
        </p>
      </div>

      {/* CARD 2 */}
      <div
        className="
        border
        border-[#00a651]
        rounded-[10px]
        bg-white
        px-6
        py-10
        text-center
        hover:-translate-y-2
        transition-all
        duration-300
      "
      >

        <img
          src="/chemical-icon.png"
          alt=""
          className="
          w-[800px]
          h-[80px]
          object-contain
          mx-auto
        "
        />

        <h3
          className="
          mt-5
          text-[#014b35]
          text-[28px]
          font-semibold
          leading-[1.3]
        "
        >
          Chemical-Free Formulas
        </h3>

        <p
          className="
          mt-4
          text-[#444]
          text-[17px]
          leading-[1.8]
        "
        >
          No sulfates, parabens, or synthetic fragrances
        </p>
      </div>

      {/* CARD 3 */}
      <div
        className="
        border
        border-[#00a651]
        rounded-[10px]
        bg-white
        px-6
        py-10
        text-center
        hover:-translate-y-2
        transition-all
        duration-300
      "
      >

        <img
          src="/safe-icon.png"
          alt=""
          className="
          w-[800px]
          h-[80px]
          object-contain
          mx-auto
        "
        />

        <h3
          className="
          mt-5
          text-[#014b35]
          text-[28px]
          font-semibold
          leading-[1.3]
        "
        >
          Safe for All Hair & Skin Types
        </h3>

        <p
          className="
          mt-4
          text-[#444]
          text-[17px]
          leading-[1.8]
        "
        >
          Gentle, balanced, and effective
        </p>
      </div>

      {/* CARD 4 */}
      <div
        className="
        border
        border-[#00a651]
        rounded-[10px]
        bg-white
        px-6
        py-10
        text-center
        hover:-translate-y-2
        transition-all
        duration-300
      "
      >

        <img
          src="/cruelty-icon.png"
          alt=""
          className="
          w-[800px]
          h-[80px]
          object-contain
          mx-auto
        "
        />

        <h3
          className="
          mt-5
          text-[#014b35]
          text-[28px]
          font-semibold
          leading-[1.3]
        "
        >
          Cruelty-Free & Eco-Conscious
        </h3>

        <p
          className="
          mt-4
          text-[#444]
          text-[17px]
          leading-[1.8]
        "
        >
          Made with care for you and the planet
        </p>
      </div>
    </div>
  </div>
</section>

{/* ================= FAQ SECTION ================= */}

<section className="w-full bg-[#f3f3f3] pb-20">

  <div className="max-w-[1280px] mx-auto px-4">

    {/* TITLE */}
    <h2
      className="
      text-center
      text-[#014b35]
      text-[34px]
      md:text-[52px]
      font-semibold
      leading-tight
    "
    >
      Frequently Asked Questions
    </h2>

    {/* FAQS */}
    <div className="mt-12 space-y-3">

      {/* FAQ 1 */}
      <details
        open
        className="
        bg-[#01552f]
        rounded-[8px]
        overflow-hidden
        group
      "
      >

        <summary
          className="
          list-none
          cursor-pointer
          flex
          items-center
          justify-between
          px-6
          py-5
        "
        >

          <div className="flex items-center gap-5">

            <span
              className="
              text-white
              text-[28px]
              font-bold
            "
            >
              -
            </span>

            <h3
              className="
              text-white
              text-[18px]
              md:text-[20px]
              font-semibold
            "
            >
              What makes PlantPure products different from other brands?
            </h3>
          </div>
        </summary>

        <div
          className="
          bg-white
          px-6
          md:px-10
          py-10
        "
        >

          <p
            className="
            text-[#444]
            text-[17px]
            md:text-[18px]
            leading-[2]
          "
          >
            PlantPure focuses on pure, plant-based formulations that deliver visible results without chemicals. Our products nourish and protect using traditional herbal ingredients.
          </p>
        </div>
      </details>

      {/* FAQ 2 */}
      <details
        className="
        bg-[#029347]
        rounded-[8px]
        overflow-hidden
      "
      >

        <summary
          className="
          list-none
          cursor-pointer
          flex
          items-center
          gap-5
          px-6
          py-5
        "
        >

          <span
            className="
            text-white
            text-[24px]
            font-bold
          "
          >
            +
          </span>

          <h3
            className="
            text-white
            text-[18px]
            md:text-[20px]
            font-semibold
          "
          >
            Are PlantPure products safe for all hair and skin types?
          </h3>
        </summary>

        <div className="bg-white px-6 py-8">
          <p className="text-[#444] text-[17px] leading-[2]">
            Yes, PlantPure products are carefully formulated to suit all hair and skin types with gentle botanical ingredients.
          </p>
        </div>
      </details>

      {/* FAQ 3 */}
      <details
        className="
        bg-[#029347]
        rounded-[8px]
        overflow-hidden
      "
      >

        <summary
          className="
          list-none
          cursor-pointer
          flex
          items-center
          gap-5
          px-6
          py-5
        "
        >

          <span
            className="
            text-white
            text-[24px]
            font-bold
          "
          >
            +
          </span>

          <h3
            className="
            text-white
            text-[18px]
            md:text-[20px]
            font-semibold
          "
          >
            Do your products contain sulfates or parabens?
          </h3>
        </summary>

        <div className="bg-white px-6 py-8">
          <p className="text-[#444] text-[17px] leading-[2]">
            No, all PlantPure products are free from sulfates, parabens, and harmful synthetic chemicals.
          </p>
        </div>
      </details>

      {/* FAQ 4 */}
      <details
        className="
        bg-[#029347]
        rounded-[8px]
        overflow-hidden
      "
      >

        <summary
          className="
          list-none
          cursor-pointer
          flex
          items-center
          gap-5
          px-6
          py-5
        "
        >

          <span
            className="
            text-white
            text-[24px]
            font-bold
          "
          >
            +
          </span>

          <h3
            className="
            text-white
            text-[18px]
            md:text-[20px]
            font-semibold
          "
          >
            Where can I buy PlantPure products?
          </h3>
        </summary>

        <div className="bg-white px-6 py-8">
          <p className="text-[#444] text-[17px] leading-[2]">
            You can purchase PlantPure products directly from our official website and selected retail partners.
          </p>
        </div>
      </details>

      {/* FAQ 5 */}
      <details
        className="
        bg-[#029347]
        rounded-[8px]
        overflow-hidden
      "
      >

        <summary
          className="
          list-none
          cursor-pointer
          flex
          items-center
          gap-5
          px-6
          py-5
        "
        >

          <span
            className="
            text-white
            text-[24px]
            font-bold
          "
          >
            +
          </span>

          <h3
            className="
            text-white
            text-[18px]
            md:text-[20px]
            font-semibold
          "
          >
            Is PlantPure an Indian brand?
          </h3>
        </summary>

        <div className="bg-white px-6 py-8">
          <p className="text-[#444] text-[17px] leading-[2]">
            Yes, PlantPure is proudly made in India using carefully sourced natural ingredients and traditional herbal care.
          </p>
        </div>
      </details>
    </div>
  </div>
</section>
{/* ================= GOOGLE REVIEW SECTION ================= */}

<section className="w-full bg-[#f5f5f5] py-16 md:py-20 overflow-hidden">
  <div className="max-w-[1320px] mx-auto px-4">

    {/* TOP AREA */}
    <div className="flex flex-col lg:flex-row gap-10 items-start">

      {/* LEFT GOOGLE BOX */}
      <div className="min-w-[180px] flex flex-col items-center justify-center pt-6">

        <h3
          className="
          text-[#111]
          font-semibold
          text-[34px]
          leading-none
        "
        >
          EXCELLENT
        </h3>

        {/* STARS */}
        <div className="flex items-center gap-1 mt-4">
          {[1,2,3,4,5].map((item)=>(
            <span
              key={item}
              className="text-[#f4b400] text-[42px] leading-none"
            >
              ★
            </span>
          ))}
        </div>

        <p
          className="
          mt-2
          text-[#666]
          text-[15px]
        "
        >
          Based on 55 reviews
        </p>

        {/* GOOGLE */}
        <img
          src="https://cdn.trustindex.io/assets/platform/Google/logo.svg"
          alt="google"
          className="w-[120px] mt-4 object-contain"
        />
      </div>

      {/* REVIEWS SLIDER */}
      <div className="flex-1 overflow-x-auto no-scrollbar">
        <div className="flex gap-4 min-w-max">

          {/* CARD 1 */}
          <div
            className="
            bg-white
            border
            border-[#ddd]
            rounded-[14px]
            w-[260px]
            p-5
            shadow-sm
            hover:-translate-y-1
            transition-all
            duration-300
          "
          >
            <div className="flex items-start justify-between">

              <div className="flex items-center gap-3">
                <div
                  className="
                  w-[48px]
                  h-[48px]
                  rounded-full
                  bg-[#8c6b5d]
                  text-white
                  flex
                  items-center
                  justify-center
                  font-semibold
                  text-[20px]
                "
                >
                  N
                </div>

                <div>
                  <h4 className="text-[15px] font-medium text-[#111]">
                    Neeraja Ahuja
                  </h4>
                </div>
              </div>

              <img
                src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                alt=""
                className="w-[20px] h-[20px]"
              />
            </div>

            {/* STARS */}
            <div className="flex gap-[2px] mt-4">
              {[1,2,3,4,5].map((item)=>(
                <span
                  key={item}
                  className="text-[#f4b400] text-[18px]"
                >
                  ★
                </span>
              ))}
            </div>

            <p
              className="
              mt-4
              text-[#333]
              text-[15px]
              leading-[1.8]
            "
            >
              I have been using PlantPure products for the last couple of years. I am honestly impressed.
            </p>
          </div>

          {/* CARD 2 */}
          <div
            className="
            bg-white
            border
            border-[#ddd]
            rounded-[14px]
            w-[260px]
            p-5
            shadow-sm
            hover:-translate-y-1
            transition-all
            duration-300
          "
          >
            <div className="flex items-start justify-between">

              <div className="flex items-center gap-3">
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocK1epjAQ_…bxC1M3iA3rILC3KKtSNTIHFFboQ=w40-h40-c-rp-mo-br100"
                  alt=""
                  className="w-[48px] h-[48px] rounded-full object-cover"
                />

                <div>
                  <h4 className="text-[15px] font-medium text-[#111]">
                    Gitika Chitre
                  </h4>
                </div>
              </div>

              <img
                src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                alt=""
                className="w-[20px] h-[20px]"
              />
            </div>

            <div className="flex gap-[2px] mt-4">
              {[1,2,3,4,5].map((item)=>(
                <span
                  key={item}
                  className="text-[#f4b400] text-[18px]"
                >
                  ★
                </span>
              ))}
            </div>

            <p
              className="
              mt-4
              text-[#333]
              text-[15px]
              leading-[1.8]
            "
            >
              I recently tried the highly recommended cleanser from PlantPure and loved it.
            </p>
          </div>

          {/* CARD 3 */}
          <div
            className="
            bg-white
            border
            border-[#ddd]
            rounded-[14px]
            w-[260px]
            p-5
            shadow-sm
            hover:-translate-y-1
            transition-all
            duration-300
          "
          >
            <div className="flex items-start justify-between">

              <div className="flex items-center gap-3">

                <div
                  className="
                  w-[48px]
                  h-[48px]
                  rounded-full
                  bg-[#014b35]
                  text-white
                  flex
                  items-center
                  justify-center
                  font-semibold
                  text-[20px]
                "
                >
                  P
                </div>

                <div>
                  <h4 className="text-[15px] font-medium text-[#111]">
                    Palki Jain
                  </h4>
                </div>
              </div>

              <img
                src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                alt=""
                className="w-[20px] h-[20px]"

              />
            </div>

            <div className="flex gap-[2px] mt-4">
              {[1,2,3,4,5].map((item)=>(
                <span
                  key={item}
                  className="text-[#f4b400] text-[18px]"
                >
                  ★
                </span>
              ))}
            </div>

            <p
              className="
              mt-4
              text-[#333]
              text-[15px]
              leading-[1.8]
            "
            >
              I tried their Heena and Indigo. Amazing natural results and healthy hair feel.
            </p>
          </div>

          {/* CARD 4 */}
          <div
            className="
            bg-white
            border
            border-[#ddd]
            rounded-[14px]
            w-[260px]
            p-5
            shadow-sm
            hover:-translate-y-1
            transition-all
            duration-300
          "
          >
            <div className="flex items-start justify-between">

              <div className="flex items-center gap-3">

                <img
                  src="https://lh3.googleusercontent.com/a-/ALV-UjU6Jq8LB…Ifc8eHnvI7wALRw_WWsVV-XlrmH=w40-h40-c-rp-mo-br100"
                  alt=""
                  className="w-[48px] h-[48px] rounded-full object-cover border"
                />

                <div>
                  <h4 className="text-[15px] font-medium text-[#111]">
                    360 Mind Studio
                  </h4>
                </div>
              </div>

              <img
                src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                alt=""

            
                className="w-[20px] h-[20px]"
              />
            </div>

            <div className="flex gap-[2px] mt-4">
              {[1,2,3,4,5].map((item)=>(
                <span
                  key={item}
                  className="text-[#f4b400] text-[18px]"
                >
                  ★
                </span>
              ))}
            </div>

            <p
              className="
              mt-4
              text-[#333]
              text-[15px]
              leading-[1.8]
            "
            >
              Excellent product!
            </p>
          </div>

          {/* CARD 5 */}
          <div
            className="
            bg-white
            border
            border-[#ddd]
            rounded-[14px]
            w-[260px]
            p-5
            shadow-sm
            hover:-translate-y-1
            transition-all
            duration-300
          "
          >
            <div className="flex items-start justify-between">

              <div className="flex items-center gap-3">

                <div
                  className="
                  w-[48px]
                  h-[48px]
                  rounded-full
                  bg-[#7e57c2]
                  text-white
                  flex
                  items-center
                  justify-center
                  font-semibold
                  text-[20px]
                "
                >
                  S
                </div>

                <div>
                  <h4 className="text-[15px] font-medium text-[#111]">
                    Smita Luther
                  </h4>
                </div>
              </div>

              <img
                src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                alt=""
                className="w-[20px] h-[20px]"
              />
            </div>

            <div className="flex gap-[2px] mt-4">
              {[1,2,3,4,5].map((item)=>(
                <span
                  key={item}
                  className="text-[#f4b400] text-[18px]"
                >
                  ★
                </span>
              ))}
            </div>

            <p
              className="
              mt-4
              text-[#333]
              text-[15px]
              leading-[1.8]
            "
            >
              Using PlantPure indigo, henna and hibiscus oil with complete satisfaction.
            </p>
          </div>

        </div>
      </div>
    </div>

    {/* BOTTOM CONTENT */}
    <div className="text-center mt-20">

      <h2
        className="
        text-[#014b35]
        text-[34px]
        md:text-[52px]
        font-semibold
        leading-tight
      "
      >
        Bring Nature Home with PlantPure
      </h2>

      <p
        className="
        mt-6
        text-[#666]
        text-[16px]
        md:text-[19px]
        leading-[1.9]
        max-w-[980px]
        mx-auto
      "
      >
        Embrace the purity of nature in your daily care routine.
        From hair to skin, every PlantPure product is designed
        to protect, nourish, and restore — naturally.
      </p>

      {/* BUTTON */}
      <button
        onClick={() => router.push("/product")}
        className="
        mt-10
        bg-[#a8b71a]
        hover:bg-[#8d9b10]
        text-white
        font-semibold
        px-10
        h-[56px]
        rounded-lg
        text-[17px]
        shadow-md
        hover:scale-105
        active:scale-95
        transition-all
        duration-300
      "
      >
        Shop Now
      </button>
    </div>
  </div>
</section>
    </>
  );
}