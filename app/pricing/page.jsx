import { plans } from "@/assets/Data";
import { Button } from "@/components/ui/button";
import { ArrowOutward } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

export default function Pricing() {
  return (
    <main className="flex items-center justify-center">
      <section className="container text-colorGray mt-36 mb-10 flex flex-col space-y-10 items-center">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-4xl font-semibold">Prices</h2>
          <p className="text-textGray xl:w-3/4 leading-6">
            Choose a package that suits your need and budget. Transparent
            pricing with no hidden fees.
          </p>
        </div>
        <article className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 place-items-center gap-6">
          {plans.map((item, id) => {
            return (
              <article
                key={id}
                className="flex flex-1 p-4 flex-col items-center gap-2 w-[20rem] rounded-md border border-colorGray"
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
      </section>
    </main>
  );
}
