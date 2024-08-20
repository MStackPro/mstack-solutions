"use client"

import Image from "next/image";
import React from "react";
import Logo from "../public/nodejs_icon.svg";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { navlinks } from "@/assets/Data";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const socials = [
  { id: 1, icon: <FaInstagram />, link: "#" },
  { id: 2, icon: <FaLinkedin />, link: "#" },
  { id: 3, icon: <FaXTwitter />, link: "#" },
  { id: 4, icon: <FaWhatsapp />, link: "#" },
];

const supportLinks = [
  {id: 1, name: "Privacy policy", link: "#"},
  {id: 1, name: "Terms and conditions", link: "#"},
]
export default function Footer() {
  const pathname = usePathname()
  return (
    <main className="bg-colorGray mt-28">
      <section>
      <footer className="container py-16 text-colorDark flex xl:flex-row flex-wrap justify-center gap-8  xl:justify-between">
        <article className="flex flex-col xl:items-start items-center gap-8">
          <Image src={Logo} alt="logo" priority width={80} />
          <div className="flex items-center gap-8">
            {socials.map((item, id) => {
              return (
                <Link
                  key={id}
                  href={item.link}
                  className="text-colorDark xl:text-4xl text-2xl hover:text-primary transition-all duration-500 ease-in-out"
                >
                  {item.icon}
                </Link>
              );
            })}
          </div>
        </article>

        <article className="flex flex-col xl:items-start items-center gap-4">
          <h3 className="text-2xl font-semibold capitalize inline-block border-b-2 pb-2 border-primary">
            useful links
          </h3>
          <div className="flex flex-col gap-4 transition-all duration-500 ease-out">
            {navlinks.map((item) => {
              return (
                <Link key={item.name} href={item.path} className={`${
                  item.path == pathname &&
                  "text-primary border-b border-primary transition-all ease-in-out"
                } capitalize transition-all ease-in-out hover:text-primary`}>
                  {item.name}
                </Link>
              );
            })}
          </div>
        </article>

        <article className="flex flex-col xl:items-start items-center gap-4">
          <h3 className="text-2xl font-semibold capitalize inline-block border-b-2 pb-2 border-primary">
            support
          </h3>
          <div className="flex flex-col gap-4 text-center transition-all duration-500 ease-out">
            {supportLinks.map((item, id) => {
              return (
                <Link key={id} href={item.link} className={`${
                  item.link == pathname &&
                  "text-primary border-b border-primary transition-all ease-in-out"
                } capitalize transition-all ease-in-out hover:text-primary`}>{item.name}</Link>
              )
            })}
          </div>
        </article>

        <article className="flex flex-col xl:items-start gap-4 items-center">
          <h3 className="text-2xl font-semibold capitalize inline-block border-b-2 pb-2 border-primary">
            get in touch
          </h3>
          <Link href="#">
            <Button>Let's talk</Button>
          </Link>
        </article>
        </footer>
      </section>

        <div className=" container py-2 text-colorDark text-center border-t border-colorDark">
          <small>&copy; 2024 Mstack Solutions, All Rights Reserved</small>
        </div>
    </main>
  );
}
