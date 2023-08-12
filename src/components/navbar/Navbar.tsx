"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/src/constants";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="h-[100px] flex justify-between items-center fixed top-0 w-full bg-black">
      <Link href="/" className="font-bold text-[22px]">
        Navbar
      </Link>
      <div className="flex items-center gap-5 mr-20">
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
        <button className="p-1 border-none bg-[#53c28b] text-white text-sm cursor-pointer rounded-sm hover:scale-110 transition">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
