"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ImMenu3 } from "react-icons/im";

import { navLinks } from "@/src/constants";
import { useState } from "react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();

  return (
    <div className="h-[100px] flex justify-between items-center fixed top-0 right-0 left-0 px-10 w-full bg-black">
      <Link href="/" className="font-bold text-[22px]">
        Navbar
      </Link>
      <div className="flex items-center gap-5 max-md:hidden">
        {navLinks.map((link) => {
          const isActive =
            (link.url.length > 1 && pathname.includes(link.url)) ||
            pathname === link.url;
          return (
            <Link
              href={link.url}
              className={isActive ? "text-white" : "text-gray-400"}
              key={link.id}
            >
              {link.title}
            </Link>
          );
        })}
        <button className="p-1 border-none bg-main-green text-white text-sm cursor-pointer rounded-sm hover:scale-110 transition">
          Logout
        </button>
      </div>
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        className="md:hidden relative"
      >
        <ImMenu3 style={{ color: "white", fontSize: "40" }} />
        {showDropdown && (
          <div className="absolute right-3.5 top-9 min-w-[160px] min-h-[280px] py-2 rounded-sm bg-white">
            <div className="flex flex-col items-center gap-5">
              {navLinks.map((link) => {
                const isActive =
                  (link.url.length > 1 && pathname.includes(link.url)) ||
                  pathname === link.url;
                return (
                  <Link
                    href={link.url}
                    className={isActive ? "text-black" : "text-gray-400"}
                    key={link.id}
                  >
                    {link.title}
                  </Link>
                );
              })}
              <button className="p-1 border-none bg-main-green text-white text-sm cursor-pointer rounded-sm hover:scale-110 transition">
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
