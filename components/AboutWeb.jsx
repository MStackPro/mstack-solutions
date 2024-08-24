"use client";

import { ArrowOutward } from "@mui/icons-material";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { aboutWebDev, webProjects } from "@/assets/Data";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "./motions/variants";

export default function AboutWeb() {
  return (
    <main className="py-8">
      <section className="container">
        {aboutWebDev.map((item, id) => {
          return (
            <div
              key={id}
              className="flex flex-col xl:flex-row md:flex-row justify-between py-10 gap-8"
            >
              <motion.div
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex xl:flex-1 md:flex-1 flex-col items-start gap-6"
              >
                <h2 className="xl:text-4xl text-3xl font-semibold capitalize text-colorGray xl:w-2/3">
                  {item.heading}
                </h2>
                <p className="xl:w-3/4 text-textGray">{item.desc}</p>

                <div className="xl:flex md:flex md:gap-4 items-center gap-16 hidden">
                  <Link href="https://www.behance.net/walshakmanasseh">
                    <Button>
                      {item.cta1}{" "}
                      <ArrowOutward className="ml-2 text-colorGray transform transition duration-500 group-hover:-translate-y-2" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="secondary">
                      {item.cta2}{" "}
                      <ArrowOutward className="ml-2 text-primary transform transition duration-500 group-hover:-translate-y-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex xl:justify-end md:justify-end gap-20 xl:flex-1 md:flex-1"
              >
                <div className="flex flex-col xl:items-end md:items-end md:text-end xl:text-end gap-12">
                  <div>
                    <h4 className="uppercase text-textGray">experience</h4>
                    <p className="font-semibold text-colorGray capitalize">
                      {item.experience}
                    </p>
                  </div>
                  <div>
                    <h4 className="uppercase text-textGray">team</h4>
                    <p className="font-semibold text-colorGray capitalize">
                      {item.team}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col xl:items-end md:items-end md:text-end xl:text-end gap-12">
                  <div>
                    <h4 className="uppercase text-textGray">web projects</h4>
                    <p className="font-semibold text-colorGray capitalize">
                      {item.web}
                    </p>
                  </div>
                  <div>
                    <h4 className="uppercase text-textGray">projects</h4>
                    <p className="font-semibold text-colorGray capitalize">
                      {item.projects}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <Link href="https://www.behance.net/walshakmanasseh">
                  <Button className="xl:hidden w-full md:hidden">
                    {item.cta1}{" "}
                    <ArrowOutward className="ml-2 text-colorGray transform transition duration-500 group-hover:-translate-y-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          );
        })}
      </section>

      {/* WEB PROJECTS */}

      <section className="container grid grid-cols-1 xl:grid-cols-3 justify-between gap-8 md:grid-cols-2 w-full mt-4">
        {webProjects.map((item, id) => {
          return (
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              key={id}
              className="border border-primary w-fit p-4 rounded-md"
            >
              <div className="flex flex-col space-y-2">
                <div className="h-[15rem] overflow-hidde relative overflow-hidden">
                  <Image
                    src={item.image.default}
                    alt="project"
                    className="transition-transform duration-1000 hover:translate-y-[-100%] rounded-md"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-textGray uppercase">{item.name}</p>
                  <Link href={item.link}>
                    <Button variant="link">
                      visit project
                      <ArrowOutward className="ml-2 text-primary transform transition duration-500 group-hover:-translate-y-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <Link href="/contact">
            <Button variant="secondary" className="xl:hidden w-full md:hidden">
              i need a website
              <ArrowOutward className="ml-2 text-primary transform transition duration-500 hover:-translate-y-2" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
