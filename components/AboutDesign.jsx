"use client";

import { ArrowOutward } from "@mui/icons-material";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { aboutDesigns, designs } from "@/assets/Data";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "./motions/variants";

export default function AboutDesign() {
  return (
    <main className="bg-cardBg py-8">
      <section className="container">
        {aboutDesigns.map((item, id) => {
          return (
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              key={id}
              className="flex flex-col xl:flex-row md:flex-row justify-between py-10 gap-8"
            >
              <article className="flex xl:flex-1 md:flex-1 flex-col items-start gap-6">
                <h2 className="xl:text-4xl text-3xl font-semibold capitalize text-colorDark xl:w-2/3">
                  {item.heading}
                </h2>
                <p className="xl:w-3/4 text-textGray">{item.desc}</p>

                <div className="xl:flex md:flex md:gap-4 items-center gap-16 hidden">
                  <Link href="https://www.behance.net/walshakmanasseh">
                    <Button>
                      {item.cta1}{" "}
                      <ArrowOutward className="ml-2 text-colorGray transform transition duration-500 group-hover:-translate-y-2" />{" "}
                    </Button>
                  </Link>
                  <Link href="/contact">
                    {" "}
                    <Button variant="third">
                      {item.cta2}{" "}
                      <ArrowOutward className="ml-2 text-primary transform transition duration-500 group-hover:-translate-y-2" />
                    </Button>
                  </Link>
                </div>
              </article>
              <article className="flex xl:justify-end md:justify-end gap-20 xl:flex-1 md:flex-1">
                <div className="flex flex-col xl:items-end md:items-end md:text-end xl:text-end gap-12">
                  <div>
                    <h4 className="uppercase text-textGray">experience</h4>
                    <p className="font-semibold text-colorDark capitalize">
                      {item.experience}
                    </p>
                  </div>
                  <div>
                    <h4 className="uppercase text-textGray">team</h4>
                    <p className="font-semibold text-colorDark capitalize">
                      {item.team}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col xl:items-end md:items-end md:text-end xl:text-end gap-12">
                  <div>
                    <h4 className="uppercase text-textGray">logos</h4>
                    <p className="font-semibold text-colorDark capitalize">
                      {item.logo}
                    </p>
                  </div>
                  <div>
                    <h4 className="uppercase text-textGray">projects</h4>
                    <p className="font-semibold text-colorDark capitalize">
                      {item.projects}
                    </p>
                  </div>
                </div>
              </article>
              <Link href="https://www.behance.net/walshakmanasseh">
                <Button className="xl:hidden w-full md:hidden">
                  {item.cta1}{" "}
                  <ArrowOutward className="ml-2 text-colorGray transform transition duration-500 group-hover:-translate-y-2" />
                </Button>
              </Link>
            </motion.div>
          );
        })}
      </section>

      <motion.section
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="container grid grid-cols-2 flex-col xl:grid xl:grid-cols-4 gap-8 md:grid md:grid-cols-3 w-full mt-4"
      >
        {designs.map((item, id) => {
          return (
            <div
              key={id}
              className="border border-colorDark w-fit p-2 rounded-md"
            >
              <article className="flex flex-col space-y-2">
                <div className="xl:h-[10rem] md:h-[8rem] h-[9rem] overflow-hidden">
                  <Image
                    src={item.image.default}
                    alt="project"
                    className="xl:w-[15rem] w-[13rem] md:w-[13rem] rounded-md"
                  />
                </div>
                <div>
                  <p className="text-textGray xl:text-1xl text-sm uppercase">
                    {item.name}
                  </p>
                </div>
              </article>
            </div>
          );
        })}
      </motion.section>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="container mt-8"
      >
        <Link href="/contact">
          <Button variant="third" className="xl:hidden w-full md:hidden">
            i need a design
            <ArrowOutward className="ml-2 text-primary transform transition duration-500 hover:-translate-y-2" />
          </Button>
        </Link>
      </motion.div>
    </main>
  );
}
