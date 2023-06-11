"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import style from "./header.module.scss";

const navLinks = [
  {
    url: "/",
    tab: "Home",
  },
  {
    url: "/information",
    tab: "Information",
  },
  {
    url: "/rsvp",
    tab: "RSVP",
  },
  {
    url: "/gift",
    tab: "Gift",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className={style.header}>
      {navLinks.map((link) => {
        const isActive = pathname === link.url;

        return (
          <Link
            className={
              isActive ? style.header__link_active : style.header__link
            }
            href={link.url}
            key={link.url}
          >
            {link.tab}
          </Link>
        );
      })}
    </header>
  );
}
