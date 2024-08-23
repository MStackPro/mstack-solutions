import Image from "next/image";
import React from "react";

export default function SectionHero({ title, image, children }) {
  return (
    <header className="z-50 mt-[1.6rem] h-[15rem] xl:h-[23rem] md:h-[15rem] overflow-hidden border-b-2 border-textGray">
      <div className="w-full h-full relative grid place-items-center">
        <div className="absolute w-full bg-colorDark opacity-20">
          <Image src={image} alt="hero background image" />
        </div>
        <div className="relative xl:w-[44%] mt-8 xl:p-0 mx-auto text-center text-colorGray">
          <h2 className="xl:text-4xl text-2xl font-semibold capitalize mb-2">{title}</h2>
          <p className="text-sm xl:text-[16px] md:w-3/4 md:mx-auto">{children}</p>
        </div>
      </div>
    </header>
  );
}
