import { ArrowOutward } from "@mui/icons-material";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function BrandTemplate({
  heading,
  desc,
  cta1,
  cta2,
  experience,
  projects,
  team,
  web,
}) {
  return (
    <main className="flex flex-col xl:flex-row md:flex-row justify-between py-10 gap-8">
      <article className="flex xl:flex-1 md:flex-1 flex-col items-start gap-6">
        <h2 className="xl:text-4xl text-3xl font-semibold capitalize text-colorGray xl:w-2/3">
          {heading}
        </h2>
        <p className="xl:w-3/4 text-textGray">{desc}</p>

        <div className="xl:flex md:flex md:gap-4 items-center gap-16 hidden">
          <Link href="https://www.behance.net/walshakmanasseh">
            <Button>
              {cta1}{" "}
              <ArrowOutward className="ml-2 text-colorGray transform transition duration-500 group-hover:-translate-y-2" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary">
              {cta2}{" "}
              <ArrowOutward className="ml-2 text-primary transform transition duration-500 group-hover:-translate-y-2" />
            </Button>
          </Link>
        </div>
      </article>

      <article className="flex xl:justify-end md:justify-end gap-20 xl:flex-1 md:flex-1">
        <div className="flex flex-col xl:items-end md:items-end md:text-end xl:text-end gap-12">
          <div>
            <h4 className="uppercase text-textGray">experience</h4>
            <p className="font-semibold text-colorGray capitalize">
              {experience}
            </p>
          </div>
          <div>
            <h4 className="uppercase text-textGray">team</h4>
            <p className="font-semibold text-colorGray capitalize">{team}</p>
          </div>
        </div>

        <div className="flex flex-col xl:items-end md:items-end md:text-end xl:text-end gap-12">
          <div>
            <h4 className="uppercase text-textGray">web projects</h4>
            <p className="font-semibold text-colorGray capitalize">{web}</p>
          </div>
          <div>
            <h4 className="uppercase text-textGray">projects</h4>
            <p className="font-semibold text-colorGray capitalize">
              {projects}
            </p>
          </div>
        </div>
      </article>
      <Link
        href="https://www.behance.net/walshakmanasseh"
         className="xl:hidden w-full md:hidden"
      >
        <Button>
          {cta1}{" "}
          <ArrowOutward className="ml-2 text-colorGray transform transition duration-500 group-hover:-translate-y-2" />
        </Button>
      </Link>
    </main>
  );
}
