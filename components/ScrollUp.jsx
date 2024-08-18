"use client"

import React from 'react'
import ScrollToTop from 'react-scroll-to-top'
import { IoIosArrowUp } from "react-icons/io";


export default function ScrollUp() {
  return (
    <main className='bg-red-500'>
          <ScrollToTop className='flex justify-center items-center' style={{backgroundColor: "black", width: "2rem", height: "2rem", }} smooth component={<IoIosArrowUp className='text-primary text-3xl' />}/>

    </main>
  )
}
