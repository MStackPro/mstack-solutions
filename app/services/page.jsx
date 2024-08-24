"use client";
import { services } from "@/assets/Data";
import SectionHero from "@/components/SectionHero";
import HeroImage from "/assets/servicesHero.JPG";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/motions/variants";

export default function Services() {
  return (
    <main>
      <SectionHero title="our services" image={HeroImage}>
        Tailored solutions to drive your success
      </SectionHero>

      <section>
        <div className="container py-8 mt-6">
          <motion.article
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 justify-between gap-8"
          >
            {services.map((item, id) => {
              return (
                <div
                  key={id}
                  className="flex flex-col flex-1 group gap-4 bg-[#3c3c3c] border border-textGray hover:border-primary p-4 rounded-md transition-all duration-500 ease-in-out"
                >
                  <div className="bg-cardBg w-fit p-2 text-primary rounded-md group-hover:text-colorGray group-hover:bg-primary transition-all duration-500 ease-in-out">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <div>
                    <h2 className="text-[18px] font-semibold capitalize text-primary group-hover:text-colorGray transition-all duration-500 ease-in-out">
                      {item.name}
                    </h2>
                    <p className="text-colorGray text-[15px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.article>
        </div>
      </section>
    </main>
  );
}
