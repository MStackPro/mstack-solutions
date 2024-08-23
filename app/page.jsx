import Hero from "@/components/Hero";
import React from "react";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";
import Faqs from "@/components/Faqs";
import AboutWeb from "@/components/AboutWeb";
import AboutDesign from "@/components/AboutDesign";

export default function page() {
  return (
    <main className="">
      <Hero />

      {/* about web devlopment */}
      <AboutWeb />

      {/* about designs */}
      <AboutDesign />

      {/* TEchnologies used */}
      <section>
        <Technologies />
      </section>

      {/* Testimonials */}
      <section>
        <Testimonials />
      </section>

      {/* FAQs */}
      <section>
        <Faqs />
      </section>
    </main>
  );
}
