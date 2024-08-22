import { services } from '@/assets/Data';
import SectionHero from '@/components/SectionHero'
import { Card } from '@mui/material';
import HeroImage from '/assets/servicesHero.JPG'
import React from 'react'

export default function Services() {
  return (
    <main>
      <SectionHero title='our services' image={HeroImage}>
        Tailored solutions to drive your success
      </SectionHero>

      <section>
        <div className="container py-8 mt-6">
          <article className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 justify-between gap-8">
            {services.map((item, id) => {
              return (
                <Card key={id} className="flex flex-col flex-1 group gap-4 bg-transparent border border-textGray p-4 rounded-md transition-all duration-500 ease-in-out">
                  <div className='bg-textGray w-fit p-2 text-primary rounded-md group-hover:text-colorGray group-hover:bg-primary transition-all duration-500 ease-in-out'>
                    <span className='text-3xl'>{item.icon}</span>
                  </div>
                  <div>
                    <h2 className="text-[18px] font-semibold capitalize text-primary group-hover:text-colorGray transition-all duration-500 ease-in-out">{item.name}</h2>
                    <p className='text-textGray group-hover:text-colorGray text-[15px]'>{item.desc}</p>
                  </div>
                </Card>
              );
            })}
          </article>
        </div>
      </section>
    </main>
  )
}
