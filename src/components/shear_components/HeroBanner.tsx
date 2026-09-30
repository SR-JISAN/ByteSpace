"use client";

import Image from "next/image";
import { Search, Star } from "lucide-react";
import Navbar from "./Navbar";

const HeroBanner = () => {
  return (
    <section className="hero-section relative mx-auto min-h-167.5 w-full max-w-full overflow-hidden bg_blue text-white">
      <div
        className="hidden md:block absolute left-0 top-24 z-20 w-60.5 h-90.75"
        style={{
          maskImage: "url('/heroOne.png')",
          WebkitMaskImage: "url('/heroOne.png')",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          backgroundColor: "#CCFF00",
        }}
      ></div>
      <div
        className="hidden md:block absolute -right-18 top-24 z-20 w-60.5 h-90.75"
        style={{
          maskImage: "url('/heroFour.png')",
          WebkitMaskImage: "url('/heroFour.png')",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          backgroundColor: "#CCFF00",
        }}
      ></div>
      <div
        className="hidden md:block absolute right-18 bottom-0 z-20 w-30.5 h-60.75"
        style={{
          maskImage: "url('/heroFive.png')",
          WebkitMaskImage: "url('/heroFive.png')",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          backgroundColor: "white",
        }}
      ></div>
      <div
        className="hidden md:block absolute left-27 bottom-27 z-20 w-30.5 h-60.75"
        style={{
          maskImage: "url('/heroFive.png')",
          WebkitMaskImage: "url('/heroFive.png')",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          backgroundColor: "white",
        }}
      ></div>
      <div className="hero-grid absolute inset-0" />

      <div className="hero-ring hero-ring-left" />

      <div className="hero-triangle" />
      <Navbar />
      <div className="relative z-10 mx-auto flex max-w-220 flex-col items-center px-4 pt-10.75 text-center sm:pt-12.5">
        <h1 className="max-w-175 text-[42px] font-bold leading-[1.08] tracking-[-1.8px] sm:text-[52px] lg:text-[46px]">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        <p className="mt-6.25 max-w-162.5 text-[12px] leading-5 text-white/75 sm:text-[13px]">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <div className="mt-9.5 flex w-full md:max-w-140 items-center gap-2.5 max-w-93.5">
          <div className="flex h-8.5 flex-1 items-center rounded-full bg-white px-4">
            <Search size={14} strokeWidth={2} className="text-[#7b7b7b]" />

            <input
              type="text"
              placeholder="Course, topic, creator"
              className="ml-2 min-w-0 flex-1 bg-transparent text-[11px] text-black outline-none placeholder:text-[#999]"
            />
          </div>

          <button
            type="button"
            className="h-8.5  rounded-full bg_lime px-4.25 text-[11px] font-medium text-black transition hover:brightness-95"
          >
            Search
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 z-10 h-75 w-100% -translate-x-1/2 rotate-180 bg_lime sm:w-[68%] lg:h-70.5 lg:w-135 rounded-b-full" />
      <div className="absolute bottom-0 left-1/2 z-20 w-82.5 -translate-x-1/2 sm:w-97.5 lg:w-107.5">
        <Image
          src="/hero.png"
          alt="Student learning"
          width={500}
          height={500}
          priority
          className="h-auto w-full object-contain"
        />
      </div>
      <div className="hero-card hero-card-course">
        <p className="text-sm  font-medium text-[#222]">UI/UX Design</p>
        <span className="text-sm text-[#999]">
          200 Courses · 1000+ Students
        </span>
      </div>
      <div className="hero-card hero-card-progress">
        <p className="text-sm font-medium text-[#222]">Learning Progress</p>
        <strong className="mt-1 block text-[30px] leading-none text-[#222]">
          55%
        </strong>
        <div className="mt-3 h-1.25 w-full rounded-full bg-[#eeeeee]">
          <div className="h-full w-[55%] rounded-full bg_lime" />
        </div>
      </div>
      <div className="hero-card hero-card-students ">
        <p className="text-[15px] font-medium text-[#222]">Happy Students</p>

        <div className="mt-1 flex items-center justify-center">
          <span className="text-[14px] text-[#777]">4.5 (240)</span>

          <Star
            size={11}
            fill="#D4FB20"
            strokeWidth={0}
            className="mr-auto ml-1"
          />
        </div>
        <div className="flex justify-start items-center">
          <div className="mt-1 flex items-center -space-x-2">
            {[1, 2, 3, 4, 5].map((item) => (
              <Image
                key={item}
                src={`/person${item}.png`}
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 rounded-full border border-white object-cover"
              />
            ))}
          </div>
          <span className="rounded-full bg_lime p-2 text-[7px] font-semibold">
            2K+
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
