"use client";

import Image from "next/image";
import React from "react";
import Css from "../public/css3.svg";
import Figma from "../public/figma_icon.svg";
import Html from "../public/html5_icon.svg";
import Javascript from "../public/javascript_icon.svg";
import Nodejs from "../public/nodejs_icon.svg";
import Python from "../public/python_icon.svg";
import Wordpress from "../public/wordpress_icon.svg";
import ReactLogo from "../public/react.svg";
import MongoDB from "../public/mongodb-icon.svg";
import NextJS from "../public/nextjs-svgrepo-com.svg";
import Mysql from "../public/mysql.svg";
import Vuejs from "../public/vue-js-icon.svg";
import Marquee from "react-fast-marquee";
import Photoshop from "../public/adobe-photoshop-icon.svg";
import Illustrator from "../public/adobe-illustrator-icon.svg";
import { motion } from "framer-motion";
import { fadeIn } from "./motions/variants";

export default function Technologies() {
  return (
    <main className="flex items-center flex-col gap-10 justify-center mt-10">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-2xl font-semibold capitalize text-colorGray"
      >
        Technologies used
      </motion.div>
      <section className="overflow-x-hidden relative w-full">
        <Marquee>
          <Image src={Css} alt="css" className="mr-20 xl:w-20 w-16" />
          <Image src={Figma} alt="css" className="mr-20 xl:w-20 w-16" />
          <Image src={Html} alt="css" className="mr-20 xl:w-20 w-16" />
          <Image src={Javascript} alt="css" className="mr-20 xl:w-20 w-16" />
          <Image src={Nodejs} alt="css" className="mr-20 xl:w-20 w-16" />
          <Image src={Python} alt="css" className="mr-20 xl:w-20 w-16" />
          <Image src={Wordpress} alt="css" className="mr-20 xl:w-20 w-16" />
          <Image src={ReactLogo} alt="css" className="mr-20 xl:w-20 w-16" />
          <Image src={MongoDB} alt="css" className="mr-20 xl:w-20 w-16" />
          <Image src={Mysql} alt="css" className="mr-20 xl:w-20 w-16" />
          <Image src={NextJS} alt="css" className="mr-20 xl:w-20 w-16" />
          <Image src={Vuejs} alt="css" className="mr-20 xl:w-20 w-16" />
          <Image src={Photoshop} alt="css" className="mr-20 xl:w-20 w-16" />
          <Image src={Illustrator} alt="css" className="mr-20 xl:w-20 w-16" />
        </Marquee>
      </section>
    </main>
  );
}
