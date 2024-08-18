import Image from "next/image";
import React from "react";

export default function WebProjectsTemplates({ image, name }) {
  return (
    <main>
      <section className="border border-colorDark w-fit p-2 rounded-md">
        <article className="flex flex-col space-y-2">
          <div className="xl:h-[10rem] md:h-[8rem] h-[9rem] overflow-hidden">
            <Image
              src={image}
              alt="project"
              className="xl:w-[15rem] w-[13rem] md:w-[13rem] rounded-md"
            />
          </div>
          <div>
            <p className="text-textGray xl:text-1xl text-sm uppercase">{name}</p>
          </div>
        </article>
      </section>
    </main>
  );
}
