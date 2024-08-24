"use client";

import { testimonies } from "@/assets/Data";
import { Avatar } from "@mui/material";
import Image from "next/image";
import React from "react";
import "swiper/css";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeIn } from "./motions/variants";

export default function Testimonials() {
  return (
    <main className="mt-16">
      <section className="flex flex-col gap-12 items-center justify-center">
        <motion.h3
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-2xl w-[20rem] text-colorGray text-center font-semibold capitalize"
        >
          more than 10+ satisfied clients testimonies
        </motion.h3>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={100}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 60,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 60,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="container xl:w-full md:w-[400px] w-[330px]"
        >
          {testimonies.map((item, id) => {
            return (
              <SwiperSlide
                key={id}
                className="flex flex-col items-start space-y-4 xl:px-6 px-4 py-2 xl:w-[400px] w-[250px] rounded-md border border-primary transition duration-500 ease-in-out bg-cardBg cursor-pointer"
              >
                <FaQuoteLeft className="text-primary text-2xl" />
                <p className="leading-5 text-sm text-colorDark">{item.quote}</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <Image src={item.avatar} alt="avatar" />
                  </Avatar>
                  <div className="flex flex-col text-colorDark leading-5">
                    <span className="font-semibold capitalize">
                      {item.name}
                    </span>
                    <small className="uppercase">{item.job}</small>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </main>
  );
}
