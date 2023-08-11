import Link from "next/link";

import { navLinks } from "@/src/constants";

const Navbar = () => {
  return (
    <div>
      <Link href="/">Navbar</Link>
      <div>
        {navLinks.map((link) => (
          <Link href={link.url} key={link.id}>{link.title}</Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
