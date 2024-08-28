"use client";

import Image from "next/image";
import React from "react";
import Logo from "../public/mstackDark.svg";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { navlinks } from "@/assets/Data";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { fadeIn } from "./motions/variants";

const socials = [
  {
    id: 1,
    icon: <FaInstagram />,
    link: "https://www.instagram.com/mstacksolutions?igsh=MWx3ZHpzamgwN25meg%3D%3D&utm_source=qr",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    link: "linkedin.com/company/mstack-solutions",
  },
  {
    id: 3,
    icon: <FaXTwitter />,
    link: "https://www.twitter.com/mstacksolutions",
  },
  { id: 4, icon: <FaWhatsapp />, link: "https://wa.link/2demo6" },
];

const supportLinks = [
  { id: 1, name: "Privacy policy", link: "/privacy" },
  { id: 1, name: "Terms of service", link: "/terms" },
];

export default function Footer() {
  const pathname = usePathname();
  return (
    <main className="bg-cardBg mt-28">
      <motion.section
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="container"
      >
        <footer className="py-16 text-colorDark flex xl:flex-row flex-col md:flex-row md:items-start xl:items-start justify-center gap-12  xl:justify-between md:justify-between">
          <article className="flex flex-col items-center gap-8">
            <Link href="/">
              <Image src={Logo} alt="logo" priority width={200} />
            </Link>
            <div className="flex items-center gap-8">
              {socials.map((item, id) => {
                return (
                  <Link
                    key={id}
                    href={item.link}
                    className="text-colorDark xl:text-3xl text-2xl hover:text-primary transition-all duration-500 ease-in-out"
                  >
                    {item.icon}
                  </Link>
                );
              })}
            </div>
          </article>

          <div className="flex justify-center gap-20 xl:gap-40">
            <article className="flex flex-col items-start gap-4">
              <h3 className="xl:text-2xl text-[15px] font-semibold capitalize inline-block border-b-2 pb-2 border-primary">
                useful links
              </h3>
              <div className="flex flex-col gap-4 transition-all duration-500 ease-out text-sm xl:text-[16px]">
                {navlinks.map((item) => {
                  return (
                    <Link
                      key={item.name}
                      href={item.path}
                      className={`${
                        item.path == pathname &&
                        "text-primary transition-all ease-in-out"
                      } capitalize transition-all ease-in-out hover:text-primary`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </article>

            <article className="flex flex-col items-start gap-4 ">
              <h3 className="xl:text-2xl text-[15px] font-semibold capitalize inline-block border-b-2 pb-2 border-primary">
                legal
              </h3>
              <div className="flex flex-col gap-4 text-start transition-all duration-500 ease-out text-sm xl:text-[16px]">
                {supportLinks.map((item, id) => {
                  return (
                    <Link
                      key={id}
                      href={item.link}
                      className={`${
                        item.link == pathname &&
                        "text-primary transition-all ease-in-out"
                      } transition-all ease-in-out hover:text-primary `}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </article>
          </div>

          <article className="flex flex-col items-start xl:mx-0 mx-auto gap-4">
            <h3 className="xl:text-2xl text-[15px] font-semibold capitalize inline-block border-b-2 pb-2 border-primary">
              get in touch
            </h3>
            <Link href="/contact">
              <Button>Let's talk</Button>
            </Link>
          </article>
        </footer>
        <div className="py-2 flex flex-col md:flex-row xl:flex-row justify-between text-colorDark text-center border-t border-colorDark">
          <small>&copy; 2024 Mstack Solutions, All Rights Reserved</small>
          <small>Designed by Mstack Solutions</small>
        </div>
      </motion.section>
    </main>
  );
}
