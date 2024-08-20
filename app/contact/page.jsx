import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

export default function Contact() {
  return (
    <main className='container flex justify-center items-center pt-40'>
      <section>
      <form action=" " className='flex flex-col items-center gap-4 border border-colorGray p-6 rounded-md'>
          <h3 className='text-2xl font-semibold text-colorGray'>Contact Us</h3>
          <div className='grid grid-cols-1 gap-4'>
          <Input type="text" placeholder="Full Name"/>
          <Input type="email" placeholder="Email Address"/>
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
  )
}
