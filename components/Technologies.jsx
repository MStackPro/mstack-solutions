import Image from "next/image";
import React from "react";
import Css from "../public/css3.svg";
import Figma from "../public/figma_icon.svg";
import Html from "../public/html5_icon.svg";
import Javascript from "../public/javascript_icon.svg";
import Nodejs from "../public/nodejs_icon.svg";
import Python from "../public/python_icon.svg";
import Wordpress from "../public/wordpress_icon.svg";
import ReactLogo from "../public/react.svg";
import MongoDB from "../public/mongodb-icon.svg";
import NextJS from "../public/nextjs-svgrepo-com.svg";
import Mysql from "../public/mysql.svg";
import Vuejs from "../public/vue-js-icon.svg";
import Marquee from "react-fast-marquee";
import Photoshop from "../public/adobe-photoshop-icon.svg";
import Illustrator from "../public/adobe-illustrator-icon.svg";

export default function Technologies() {
  return (
    <main className="flex items-center flex-col gap-10 justify-center mt-10">
      <h2 className="text-2xl font-semibold capitalize text-colorGray">Technologies used</h2>
      <section className="overflow-x-hidden relative w-full">
        <Marquee>
          <Image src={Css} alt="css" width={40} height={40} priority className="mr-20"/>
          <Image src={Figma} alt="css" width={40} height={40} priority className="mr-20"/>
          <Image src={Html} alt="css" width={40} height={40} priority className="mr-20"/>
          <Image src={Javascript} alt="css" width={50} height={40} priority className="mr-20"/>
          <Image src={Nodejs} alt="css" width={60} height={40} priority className="mr-20"/>
          <Image src={Python} alt="css" width={40} height={40} priority className="mr-20"/>
          <Image src={Wordpress} alt="css" width={70} height={40} priority className="mr-20"/>
          <Image src={ReactLogo} alt="css" width={40} height={40} priority className="mr-20"/>
          <Image src={MongoDB} alt="css" width={40} height={40} priority className="mr-20"/>
          <Image src={Mysql} alt="css" width={70} height={40} priority className="mr-20"/>
          <Image src={NextJS} alt="css" width={60} height={40} priority className="mr-20"/>
          <Image src={Vuejs} alt="css" width={40} height={40} priority className="mr-20"/>
          <Image src={Photoshop} alt="css" width={40} height={40} priority className="mr-20"/>
          <Image src={Illustrator} alt="css" width={40} height={40} priority className="mr-20"/>
        </Marquee>
      </section>
    </main>
  );
}
