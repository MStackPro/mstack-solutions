import { privacy } from '@/assets/Data'
import SectionHero from '@/components/SectionHero'
import HeroImage from '/assets/privacy.JPG'
import React from 'react'

export default function privacyPolicy() {
  return (
    <main>
        <SectionHero title='privacy policy' image={HeroImage}>
        Last updated: August 24, 2024
        </SectionHero>

        <section className='container text-colorGray mt-20'>
            <h3 className='xl:text-3xl text-2xl font-semibold xl:w-3/4'>This Privacy Policy will help you better understand how we collect, use and share your personal information.</h3>
            <div className='mt-10 grid xl:grid-cols-2 grid-cols-1 gap-y-12 gap-x-20 items-start'>
                {privacy.map((section, id) => (
                    <article key={id} className='flex flex-col flex-1 gap-4'>
                        <div>
                            <h3 className='font-semibold text-[20px] capitalize'>{section.title}</h3>
                            <p className=''>{section.desc}</p>
                        </div>
                        <ul className='container'>
                            {section.content.map((item, index) => (
                                <li key={index} dangerouslySetInnerHTML={{__html:item}} className='list-disc text-textGray'/>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    </main>
  )
}
