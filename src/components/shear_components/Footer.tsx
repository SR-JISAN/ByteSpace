"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import Image from "next/image";

const footerLinks = [
  {
    id: "courses",
    links: [
      { label: "Featured Courses", href: "#" },
      { label: "Featured Categories", href: "#" },
      { label: "Business", href: "#" },
      { label: "IT", href: "#" },
      { label: "Design", href: "#" },
    ],
  },
  {
    id: "categories",
    links: [
      { label: "Development", href: "#" },
      { label: "Marketing", href: "#" },
      { label: "Photography", href: "#" },
      { label: "Finance", href: "#" },
      { label: "Sport", href: "#" },
    ],
  },
  {
    id: "company",
    links: [
      { label: "Become a Creator", href: "#" },
      { label: "Affiliate Program", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Help", href: "#" },
      { label: "About", href: "#" },
    ],
  },
];

const bottomLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white px-5 sm:px-8 md:px-10 lg:px-12 xl:px-[8%]">
      <div className="mx-auto max-w-7xl pt-14 sm:pt-16 lg:pt-14.5">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.55fr_1fr_1fr_1fr] lg:gap-8">
          <div className="max-w-127.5">
            <Link href="/" className="flex items-start gap-2">
              <Image
                src="/logo.png"
                alt="ByteSpace"
                width={22}
                height={22}
                priority
                className="h-5.5 w-5.5 object-contain"
              />

              <span className="text-lg font-extrabold tracking-[-0.5px] text-black">
                ByteSpace
              </span>
            </Link>

            <p className="mt-5 text-[14px] leading-6 text-[#4e4e4e] sm:text-[15px]">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form className="mt-11 flex w-full max-w-126.25 flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-13 w-full rounded-full border border-[#d2d2d2] bg-white px-6 pr-12 text-[15px] text-[#333] outline-none transition placeholder:text-[#444] focus:border-[#b7ef00]"
                />

                <Search className="absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-transparent" />
              </div>

              <button
                type="submit"
                className="h-11.5 shrink-0 rounded-full bg-[#c5ff00] px-7 text-[16px] font-medium text-[#171717] transition hover:bg-[#b9f000] sm:h-11.5"
              >
                Search
              </button>
            </form>

            <p className="mt-7 max-w-117.5 text-[12px] leading-[1.55] text-[#4e4e4e]">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {footerLinks.map((column) => (
            <div key={column.id} className="flex flex-col gap-4.25">
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-fit text-[14px] leading-5 text-[#444] transition-colors hover:text-black"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-27.5 border-t border-[#d5d5d5] py-6 sm:mt-25 lg:mt-32">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[12px] text-[#4b4b4b]">
              @ 2023 ByteSpace. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {bottomLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[12px] text-[#4b4b4b] transition-colors hover:text-black"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
