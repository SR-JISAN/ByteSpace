"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="relative z-50 mx-auto w-full max-w-220px-4 sm:px-6 lg:px-0">
      <div className="flex h-19 items-center justify-between border-b border-white/10 w-11/12 mx-auto">
        <Link href="/" className="flex items-start justify-center gap-2">
          <Image
            src="/logo.png"
            alt="ByteSpace"
            width={22}
            height={22}
            priority
            className="h-5.5 w-5.5 object-contain"
          />

          <span className="text-[17px] font-extrabold tracking-[-0.5px] text-white">
            ByteSpace
          </span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-1.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative block px-3 py-2 text-[11px] font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <button
            type="button"
            className="text-sm font-medium text-white/80 transition hover:text-white"
          >
            Sign In
          </button>

          <button
            type="button"
            className="text-[11px] font-medium text-white/80 transition hover:text-white"
          >
            Join Us
          </button>

          <button
            type="button"
            aria-label="Shopping bag"
            className="text-white"
          >
            <ShoppingBag size={16} strokeWidth={1.5} />
          </button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="absolute left-4 right-4 top-19 border border-white/10 bg-[#003BE2] p-5 md:hidden">
          <nav>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block px-3 py-3 text-sm ${
                      isActive(link.href) ? "text-white" : "text-white/70"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-4 flex items-center gap-6 border-t border-white/10 pt-4">
            <button type="button" className="text-sm text-white/80">
              Sign In
            </button>
            <button type="button" className="text-sm text-white/80">
              Join Us
            </button>
            <ShoppingBag size={17} className="ml-auto text-white" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
