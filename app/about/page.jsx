import { aboutUs } from "@/assets/Data";
import SectionHero from "@/components/SectionHero";
import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";
import AboutHero from "/assets/aboutHero.jpg"
import AboutImage2 from "/assets/about2.jpg"
import AboutImage1 from "/assets/about1.JPG"

export default function About() {
  return (
    <main>
      <SectionHero title="about us" image={AboutHero}></SectionHero>
      <section className="container mt-20 flex flex-col space-y-20">

        <article className="grid xl:grid-cols-2 xl:gap-40 md:gap-10 md:grid-cols-2 grid-cols-1 gap-8">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold capitalize text-colorGray">
              get to know us
            </h3>
            <p className="text-[15px] text-textGray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              debitis ab blanditiis repellendus Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Obcaecati totam id distinctio
              deserunt aliquid neque quam culpa tempore unde recusandae ipsa eum
              consequatur, fugit, minima quibusdam quis labore similique
              maiores! repudiandae optio illum aliquam a ipsum corrupti.
            </p>
          </div>
          <div>
            <Image src={AboutImage1} alt="about" className="rounded-md" />
          </div>
        </article>

        <article className="grid xl:grid-cols-3 xl:gap-12 md:grid-cols-2 gap-4">
          {aboutUs.map((item, index) => (
            <div
              key={index}
              className=" flex-1 flex flex-col gap-4 items-center text-center rounded-md text-textGray bg-colorGray p-4"
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="text-2xl capitalize font-semibold">
                {item.title}
              </h3>
              {Array.isArray(item.desc) ? (
                <ul className="text-start">
                  {item.desc.map((value, i) => (
                    <li key={i} className="flex items-center capitalize gap-2">
                      <GoDotFill />
                      {value}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-[15px]">{item.desc}</p>
              )}
            </div>
          ))}
        </article>

        <article className="grid xl:grid-cols-2 xl:gap-40 md:gap-10 md:grid-cols-2 grid-cols-1 gap-8">
          
          <div className="flex flex-col gap-6 xl:w-[30rem] w-fit">
            <h3 className="text-2xl font-semibold capitalize text-colorGray">
              our process
            </h3>
            <div className="felx flex-col gap-4 text-[15px]">
              <div className="text-textGray flex gap-2">
                <GoDotFill className="text-[1.5rem]" />
                <p>
                  <strong>Discovery:</strong> We start by understanding your brand, goals, and audience.
                </p>
              </div>
              <div className="text-textGray flex items-start gap-2">
                <GoDotFill className="text-[2rem]" />
                <p>
                  <strong>Wireframes:</strong> Our creative team brings your vision to life with innovative sketches and prototypes.
                </p>
              </div>
              <div className="text-textGray flex items-start gap-2">
                <GoDotFill className="text-[2rem]" />
                <p>
                  <strong>Design:</strong> Our creative team brings your vision to life with innovative and engaging designs.
                </p>
              </div>
              <div className="text-textGray flex items-start gap-2">
                <GoDotFill className="text-[2rem]" />
                <p>
                  <strong>Development:</strong> Our creative team brings your vision to life with innovative and engaging designs.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image src={AboutImage2} alt="about" className="rounded-md" />
          </div>
        </article>
      </section>
    </main>
  );
}
