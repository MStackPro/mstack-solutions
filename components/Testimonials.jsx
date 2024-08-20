"use client"

import { testimonies } from '@/assets/Data'
import { Avatar } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import "swiper/css";
import Marquee from 'react-fast-marquee'

export default function Testimonials() {
  return (
    <main className='mt-16'>
        <section className='flex flex-col gap-12 items-center justify-center'>
            <h3 className='text-2xl w-[20rem] text-colorGray text-center font-semibold capitalize'>more than 10+ satisfied clients testimonies</h3>
            <Marquee pauseOnClick={true} direction='right' className="flex gap-20"> 
                {testimonies.map((item, id) => {
                    return (
                        <div key={id} className=' mr-20 flex flex-col xl:gap-4 items-start xl:px-6 px-4 py-2 xl:w-[400px] w-[330px] rounded-md border border-primary transition duration-500 ease-in-out bg-colorGray cursor-pointer'>
                            <Avatar className='absolute top-0 transform -translate-y-1/2'>
                                <Image src={item.avatar} alt='avatar'/>
                            </Avatar>
                            <p className='leading-5 italic text-sm text-colorDark pt-8'>{item.quote}</p>
                            <div className='flex flex-col items-start text-colorDark p-2'>
                                <span className='font-semibold capitalize caption-top'>{item.name}</span>
                                <small className='uppercase'>{item.job}</small>
                            </div>
                        </div>
                    )
                })}
            </Marquee>
        </section>
    </main>
  )
}
