
import React from "react";
import { ArrowOutward } from "@mui/icons-material";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <main className="h-screen flex justify-center items-center xl:pt-12">
      <div className="flex flex-col items-center text-center xl:space-y-8 space-y-6">
        <h1 className="xl:text-6xl text-4xl font-semibold xl:w-1/2 w-full capitalize">
          We create <span className="text-primary">amazing</span> experiences
          for your brand.
        </h1>
        <p className="capitalize xl:w-1/2 w-3/4">
          We are skilled at making complex ideas plain and simple
        </p>

        <div className="flex flex-col items-center gap-8 xl:flex-row">
          <Button>get in touch</Button>
          <Button variant="secondary">See all projects <ArrowOutward className="ml-2 text-primary transform transition duration-500 hover:-translate-y-2"/></Button>
        </div>
      </div>
    </main>
  );
}
