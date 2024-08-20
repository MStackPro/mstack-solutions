import {
  aboutDesigns,
  aboutWebDev,
  designs,
  services,
  webProjects,
} from "@/assets/Data";
import BrandTemplate from "@/components/templates/BrandTemplate";
import Hero from "@/components/Hero";
import React from "react";
import WebProjectsTemplates from "@/components/templates/WebProjectsTemplates";
import DesignTemplate from "@/components/templates/DesignTemplate";
import DesignProjectsTemplate from "@/components/templates/DesignProjectsTemplate";
import { Button } from "@/components/ui/button";
import { ArrowOutward } from "@mui/icons-material";
import Technologies from "@/components/Technologies";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import Faqs from "@/components/Faqs";

export default function page() {
  return (
    <main className="">
      <Hero />

      {/* about web devlopment */}
      <section className="py-10">
        <div className="container">
          {aboutWebDev.map(
            ({
              index,
              heading,
              desc,
              cta1,
              cta2,
              experience,
              projects,
              team,
              web,
            }) => {
              return (
                <BrandTemplate
                  key={index}
                  heading={heading}
                  desc={desc}
                  cta1={cta1}
                  cta2={cta2}
                  experience={experience}
                  projects={projects}
                  team={team}
                  web={web}
                />
              );
            }
          )}

          <article className="flex flex-wrap xl:grid xl:grid-cols-3 justify-between gap-8 md:grid md:grid-cols-2 w-full mt-4">
            {webProjects.map(({ image, name, link, index }) => {
              return (
                <WebProjectsTemplates
                  key={index}
                  image={image}
                  name={name}
                  link={link}
                />
              );
            })}
            <Button variant="secondary" className="xl:hidden w-full">
              i need a website
            <ArrowOutward className="ml-2 text-primary transform transition duration-500 hover:-translate-y-2" />
          </Button>
          </article>
        </div>
      </section>

      {/* about designs */}
      <section className="bg-colorGray py-10">
        <div className="container">
          {aboutDesigns.map(
            ({
              index,
              heading,
              desc,
              cta1,
              cta2,
              experience,
              projects,
              team,
              logo,
            }) => {
              return (
                <DesignTemplate
                  key={index}
                  heading={heading}
                  desc={desc}
                  cta1={cta1}
                  cta2={cta2}
                  experience={experience}
                  projects={projects}
                  team={team}
                  logo={logo}
                />
              );
            }
          )}

          <article className="grid grid-cols-2 xl:grid xl:grid-cols-4 gap-8 md:grid md:grid-cols-3 w-full mt-4">
            {designs.map(({ image, name, index }) => {
              return (
                <DesignProjectsTemplate key={index} image={image} name={name} />
              );
            })}
            
          </article>
          <Button variant="third" className="xl:hidden w-full mt-8">
              i need a design
            <ArrowOutward className="ml-2 text-primary transform transition duration-500 hover:-translate-y-2" />
          </Button>
        </div>
      </section>

      {/* services */}
      <section>
        <div className="container py-8 mt-6">
          <div className="flex xl:flex-row flex-col justify-between gap-8">
            {services.map((item, id) => {
              return (
                <article key={id} className="flex flex-col flex-1 gap-4 border border-primary p-4 rounded-md">
                  <h2 className="text-2xl font-semibold capitalize text-primary">{item.name}</h2>
                  <p>{item.desc}</p>
                  <Link href={item.link}>
                  <Button
                      variant="link"
                      href={item.link}
                    >
                      visit project<ArrowOutward className='ml-2 text-primary transform transition duration-500 group-hover:-translate-y-2'/>
                    </Button>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEchnologies used */}
      <section>
        <Technologies/>
      </section>

      {/* Testimonials */}
      <section>
        <Testimonials/>
      </section>

      {/* FAQs */}
      <section>
        <Faqs/>
      </section>
    </main>
  );
}
