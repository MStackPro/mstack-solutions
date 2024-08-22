import { aboutUs, ourProcess } from "@/assets/Data";
import SectionHero from "@/components/SectionHero";
import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";
import AboutHero from "/assets/aboutHero.jpg";
import AboutImage2 from "/assets/about2.jpg";
import AboutImage1 from "/assets/about1.JPG";
import { BiSliderAlt } from "react-icons/bi";
import { MdGroups } from "react-icons/md";

export default function About() {
  return (
    <main>
      <SectionHero title="about us" image={AboutHero}>
        Our journey of innovation and excellence
      </SectionHero>
      <section className="container mt-20 flex flex-col space-y-20">
        <article className="grid xl:grid-cols-2 xl:gap-40 md:gap-10 md:grid-cols-1 grid-cols-1 gap-8">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold capitalize text-colorGray">
              get to know us
            </h3>
            <p className="text-[15px] text-textGray">
              Mstack Solutions is dedicated to building innovative, scalable,
              and reliable technology solutions that empower businesses to reach
              their full potential. Founded on excellence and integrity, we’ve
              grown into a trusted partner across various industries. <br />
              Our services include web and mobile application development, IT
              consulting, and branding. With a skilled team passionate about
              technology, we deliver customized solutions that align with our
              clients’ unique goals. At Mstack Solutions, we’re committed to
              continuous innovation and helping businesses navigate the digital
              landscape with confidence.
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

        <div className="flex xl:flex-row flex-col gap-8">
          <div className="flex flex-col gap-4 text-colorGray">
            <div className="bg-primary w-fit py-1 px-2 rounded-full">
              Why Choose us
            </div>
            <div className="bg-colorDark text-2xl rounded-md py-2 pr-8 pl-3 font-semibold w-fit">
              Our <br />
              Advantages
            </div>
          </div>

          <div className="flex xl:flex-row flex-col md:flex-row gap-8">
            <article className="flex flex-col gap-4 bg-colorGray rounded-md p-4 text-colorDark">
              <div className="flex gap-6 items-center">
                <MdGroups className="text-2xl" />
                <h3 className="font-semibold ">Team of Experts</h3>
              </div>
              <p className="text-[15px]">
                Our expert team of tech enthusiats and industry veterans,
                dedicated to shaping cutting-edge solutions for your sucess.
              </p>
            </article>
            <article className="flex flex-col gap-4 bg-colorGray rounded-md p-4 text-colorDark">
              <div className="flex gap-6 items-center">
                <BiSliderAlt className="text-2xl" />
                <h3 className="font-semibold ">Personalization</h3>
              </div>
              <p className="text-[15px]">
                We excel in tailoring solutions to your unique needs, ensuring a
                personalized experience that aligns perfectly with your
                requirements.
              </p>
            </article>
          </div>
        </div>

        <article className="grid xl:grid-cols-2 xl:gap-40 md:gap-10 md:grid-cols-1 grid-cols-1 gap-8">
          <div className="flex flex-col items-start gap-6 xl:w-[30rem] w-fit">
            <h3 className="text-2xl font-semibold capitalize text-colorGray">
              our process
            </h3>

            <div className="flex flex-col items-start gap-3 text-[15px]">
              {ourProcess.map((item, id) => {
                return (
                  <div
                    key={id}
                    className="flex justify-center items-start text-textGray"
                  >
                    <p>
                      {" "}
                      <strong>{item.name}</strong> {item.desc}
                    </p>
                  </div>
                );
              })}
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
