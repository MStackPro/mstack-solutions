import React from "react";
import { ArrowOutward } from "@mui/icons-material";
import { Button } from "./ui/button";
import HeroBg from "/public/landing.png";
import Link from "next/link";
import Image from "next/image";


export default function Hero() {
  return (
    <main
      className="h-screen relative overflow-hidden flex justify-center items-center mt-[1.6rem]"
    >
      <div className="absolute bg-colorDark opacity-35">
        <Image src={HeroBg} alt="hero bg"/>
      </div>
      <div className="flex z-10 flex-col items-center text-center xl:space-y-8 space-y-6">
        <h1 className="xl:text-6xl text-4xl font-semibold xl:w-1/2 w-full capitalize">
          We create <span className="text-primary">amazing</span> experiences
          for your brand.
        </h1>
        <p className="capitalize xl:w-1/2 w-3/4">
          premium web, mobile applications design, development and SEO services
          to help your business stand out.
        </p>

        <div className="flex flex-col items-center gap-8 xl:flex-row md:flex-row">
          <Link href="/contact">
            <Button className="w-full">
              get in touch{" "}
              <ArrowOutward className="ml-2 text-colorGray transform transition duration-500 group-hover:-translate-y-2" />
            </Button>
          </Link>
          <Link href="https://www.behance.net/walshakmanasseh">
            <Button variant="secondary">
              See all projects{" "}
              <ArrowOutward className="ml-2 text-primary transform transition duration-500 group-hover:-translate-y-2" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
