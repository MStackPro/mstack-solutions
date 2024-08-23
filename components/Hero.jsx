"use client"

import React from "react";
import { ArrowOutward } from "@mui/icons-material";
import { Button } from "./ui/button";
import HeroBg from "/public/landing.png";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "./motions/variants";


export default function Hero() {
  return (
    <main
      className="h-screen relative overflow-hidden flex justify-center items-center mt-[1.6rem]"
    >
      <div className="absolute bg-colorDark opacity-35">
        <Image src={HeroBg} alt="hero bg"/>
      </div>
      <div className="flex z-10 flex-col items-center text-center xl:space-y-8 space-y-6">
        <motion.div 
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}}

          className="xl:text-6xl text-4xl font-semibold xl:w-1/2 w-full capitalize">
          We create <span className="text-primary">amazing</span> experiences
          for your brand.
        </motion.div>
        <motion.div
         variants={fadeIn("up", 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.7}}
         
         className="capitalize xl:w-1/2 w-3/4">
          premium web, mobile applications design, development and SEO services
          to help your business stand out.
        </motion.div>

        <div className="flex flex-col items-center gap-8 xl:flex-row md:flex-row">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            >
          <Link href="/contact">
            <Button className="w-full">
              get in touch{" "}
              <ArrowOutward className="ml-2 text-colorGray transform transition duration-500 group-hover:-translate-y-2" />
            </Button>
          </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            >
          <Link href="https://www.behance.net/walshakmanasseh">
            <Button variant="secondary">
              See all projects{" "}
              <ArrowOutward className="ml-2 text-primary transform transition duration-500 group-hover:-translate-y-2" />
            </Button>
          </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
