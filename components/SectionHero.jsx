import Image from "next/image";
import React from "react";

export default function SectionHero({ title, image, children }) {
  return (
    <header className="mt-[6.5rem] xl:h-[20rem] md:h-[15rem] h-fit overflow-hidden border-b-2 border-textGray">
      <div className="w-full h-full relative grid place-items-center">
        <div className="absolute w-full bg-colorDark opacity-30">
          <Image src={image} alt="hero background image" />
        </div>
        <div className="relative xl:w-[44%] py-12 xl:p-0 mx-auto text-center text-colorGray">
          <h2 className="xl:text-4xl text-2xl font-semibold capitalize mb-2">{title}</h2>
          <p className="text-sm xl:text-[16px]">{children}</p>
        </div>
      </div>
    </header>
  );
}
