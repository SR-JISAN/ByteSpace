"use client"

import { cn } from "cn";
import LogoImage from "../images/LogoImage";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";

const Navbar = () => {

    const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Creators", href: "/creators" },
    
]
const pathname = usePathname();

const isActive = (href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);


    return (
      <header className="p-5 mb-5 flex justify-evenly items-center bg-transparent">
        <div className="flex gap-1  justify-center items-start">
          <LogoImage></LogoImage>
          <h1 className="font-extrabold text-xl text-white">ByteSpace</h1>
        </div>
        <div>
          <ul className="flex gap-3 items-center text-white">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-md ",

                      active ?? "text-white hover:text_lime",
                    )}
                  >
                    {link.label}
                    {active && <span className="absolute" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-6 items-center text-white">
          <button type="button">Sign In</button>
          <button type="button">Join Us</button>
          <ShoppingBag size={16} color="#ffffff" strokeWidth={1.5} />
        </div>
      </header>
    );
};

export default Navbar;