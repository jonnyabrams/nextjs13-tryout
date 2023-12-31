"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

import { navLinks } from "@/src/constants";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();
  const session = useSession();

  const handleLogout = (event: any) => {
    event.preventDefault();
    signOut();
  };

  return (
    <div className="h-[100px] flex justify-between items-center fixed top-0 right-0 left-0 px-10 w-full bg-black z-30">
      <Link href="/" className="font-bold text-[22px]">
        Jonny
      </Link>
      <div className="flex items-center gap-5 max-md:hidden">
        <DarkModeToggle />
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
        {session.status === "authenticated" && (
          <button
            onClick={handleLogout}
            className="p-1 border-none bg-primary text-white text-sm cursor-pointer rounded-sm hover:scale-110 transition"
          >
            Logout
          </button>
        )}
      </div>
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        className="md:hidden relative"
      >
        {showDropdown ? (
          <ImMenu4 style={{ color: "white", fontSize: "40" }} />
        ) : (
          <ImMenu3 style={{ color: "white", fontSize: "40" }} />
        )}
        {showDropdown && (
          <div className="absolute right-3.5 top-9 min-w-[160px] py-3 rounded-sm bg-black border-2 border-white">
            <div className="flex flex-col items-center gap-2">
              {navLinks.map((link) => {
                const isActive =
                  (link.url.length > 1 && pathname.includes(link.url)) ||
                  pathname === link.url;
                return (
                  <Link
                    href={link.url}
                    className={`${
                      isActive ? "font-bold" : "font-extralight"
                    } w-full text-white text-center hover:bg-gray-400 transition`}
                    key={link.id}
                  >
                    {link.title}
                  </Link>
                );
              })}
              {session.status === "authenticated" && (
                <button
                  onClick={handleLogout}
                  className="p-1 mt-5 border-none bg-primary text-white text-sm cursor-pointer rounded-sm hover:bg-green-700 transition duration-300"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
