
import { ArrowOutward } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

export default function WebProjectsTemplates({image, name, link}) {
  return (
    <main>
      <section className="border border-primary w-fit p-4 rounded-md">
                <article className="flex flex-col space-y-2">
                  <div className="h-[15rem] overflow-hidde relative overflow-hidden">
                    <Image
                      src={image}
                      alt="project"
                      className='transition-transform duration-1000 hover:translate-y-[-100%] rounded-md'
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-textGray uppercase">
                      {name}
                    </p>
                    <Button
                      variant="link"
                      href={link}
                    >
                      visit project<ArrowOutward className='ml-2 text-primary transform transition duration-500 hover:-translate-y-2'/>
                    </Button>
                  </div>
                </article>
              </section>
    </main>
  )
}
