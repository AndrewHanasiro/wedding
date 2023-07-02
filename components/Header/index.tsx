"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import style from "./header.module.scss";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    {
      url: "#home",
      tab: "Principal",
    },
    {
      url: "#information",
      tab: "informações",
    },
    {
      url: "#rsvp",
      tab: "Confirmar",
    },
    {
      url: "#gift",
      tab: "Presentes",
    },
  ];

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
