"use client";
import { plans } from "@/assets/Data";
import SectionHero from "@/components/SectionHero";
import { Button } from "@/components/ui/button";
import { ArrowOutward } from "@mui/icons-material";
import HeroImage from "/assets/pricesHero.jpg";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/motions/variants";

export default function Pricing() {
  return (
    <main>
      <SectionHero title="prices" image={HeroImage}>
        Choose a package that suits your need and budget. Transparent pricing
        with no hidden fees.
      </SectionHero>
      <motion.section
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="container text-colorGray mt-20 mb-10 flex flex-col space-y-10 items-center"
      >
        <article className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 place-items-center gap-6">
          {plans.map((item, id) => {
            return (
              <article
                key={id}
                className="flex flex-1 p-4 flex-col items-center gap-2 w-[20rem] rounded-md border border-colorGray hover:border-primary transition-all duration-500 ease-in-out"
              >
                <h3 className="uppercase font-semibold">{item.title}</h3>
                <p className="text-textGray text-3xl">&#8358; {item.price}</p>
                <div className="w-full flex flex-col gap-4">
                  {item.features.map((feaureItem, id) => {
                    return (
                      <div
                        key={id}
                        className="flex items-center text-[13px] justify-between border-b border-textGray pb-1"
                      >
                        <p className="uppercase text-colorGray">
                          {feaureItem.feature}
                        </p>
                        <p className="text-textGray">
                          &#8358; {feaureItem.price}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <Link href="/contact">
                  <Button className="w-full mt-4">
                    Get started
                    <ArrowOutward className="ml-2 text-colorGray transform transition duration-500 group-hover:-translate-y-2" />
                  </Button>
                </Link>
              </article>
            );
          })}
        </article>
      </motion.section>
    </main>
  );
}
