"use client"

import React, { useEffect } from 'react'

export default function Loading() {
  useEffect(() => {
    async function getLoader() {
      const {tailspin} = await import('ldrs')
      tailspin.register()
    }
    getLoader()
  }, [])
  return (
    <main className='text-center h-screen flex gap-2 justify-center items-center'>
        <h2 className='text-colorGray'>Loading</h2>
        <l-tailspin color='#d80000'></l-tailspin>
    </main>
  )
}
