import SectionHero from "@/components/SectionHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import HeroImage from '/assets/contact.jpg'
import React from "react";

export default function Contact() {
  return (
    <main>
      <SectionHero title={"contact us"} image={HeroImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        perspiciatis!
      </SectionHero>

      <section className="container flex justify-center mt-20 gap-6 items-center">
        <form
          action=" "
          className="flex flex-col items-center gap-4 border border-colorGray p-6 rounded-md"
        >
          <h3 className="text-2xl font-semibold text-colorGray capitalize">get in touch</h3>
          <div className="grid grid-cols-1 gap-4">
            <Input type="text" placeholder="Full Name" />
            <Input type="email" placeholder="Email Address" />
            <Input type="text" placeholder="Country" />
            {/* select */}
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="web dev">Web Development</SelectItem>
                  <SelectItem value="graphic design">Graphic Design</SelectItem>
                  <SelectItem value="branding">Branding</SelectItem>
                  <SelectItem value="web design">Web Design</SelectItem>
                  <SelectItem value="logo design">Logo Design</SelectItem>
                  <SelectItem value="modification">Modification</SelectItem>
                  <SelectItem value="other">None</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* textarea */}
            <Textarea
              className="h-[150px]"
              placeholder="Type your message here."
            />
          </div>
          <Button className="w-full">send message</Button>
        </form>
      </section>
    </main>
  );
}
