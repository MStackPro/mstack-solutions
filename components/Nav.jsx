"use client";

import { List } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "/public/mstackWhite.svg";
import { usePathname } from "next/navigation";
import MobileNav from "/components/MobileNav";
import { navlinks } from "@/assets/Data";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "./ui/button";

export default function Navbar() {
  const [navbarBg, setnavbarBg] = useState(false);

  const navbarBgChange = () => {
    if (window.scrollY >= 80) {
      setnavbarBg(true);
    } else {
      setnavbarBg(false);
    }
  };

  useEffect(() => {
    navbarBgChange();
    window.addEventListener("scroll", navbarBgChange);
  });

  const pathname = usePathname();
  return (
    <nav
      className={`${
        navbarBg
          ? "bg-colorDark bg-opacity-95 border-b border-textGray shadow-md transition duration-500ms ease-in-out"
          : "bg-transparent"
      } top-0 h-20 mt-[1.65rem] flex items-center fixed w-screen z-40`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image src={Logo} alt="logo" width={170} priority />
        </Link>

        <List className="text-white xl:flex gap-10 items-center hidden transition-all ease-in-out">
          {navlinks.map((item, index) => {
            return (
              <Link
                href={item.path}
                key={index}
                className={`${
                  item.path == pathname &&
                  "text-primary border-b border-primary transition-all ease-in-out"
                } capitalize transition-all ease-in-out hover:text-primary`}
              >
                {item.name}
                {/* {item.name === "Services" && (<IoIosArrowDown className="ml-1"/>)} */}
              </Link>
            );
          })}
          <Link href="/contact">
            <Button>Contact</Button>
          </Link>
        </List>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
