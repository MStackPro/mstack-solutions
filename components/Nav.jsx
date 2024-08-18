"use client";

import { List } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "/assets/mstack.png";
import { usePathname } from "next/navigation";
import MobileNav from '/components/MobileNav'
import { navlinks } from "@/assets/Data";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "./ui/button";



export default function Navbar() {

  const pathname = usePathname();
  return (
    <nav className="h-20 mt-[1.65rem] bg-colorDark shadow-md flex items-center fixed w-screen z-50">
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
          <Button
            href="/contact"
          >
            Contact
          </Button>
        </List>

        {/* mobile nav */}
      <div className="xl:hidden">
      <MobileNav/>
      </div>
      </div>
    </nav>
  );
}
