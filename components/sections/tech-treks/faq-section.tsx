import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const FAQSection = () => {
  return (
    <section id='faq'>
      <h2 className='text-white text-3xl md:text-4xl lg:text-5xl font-bold text-left mb-12 mt-16'>
        FAQ
      </h2>
      <Accordion type="single" collapsible className='w-full'>
        <AccordionItem value="item-1" className='bg-black border border-white/10 rounded-xl mb-4'>
          <AccordionTrigger className='w-full px-6 py-4 text-left text-white text-lg font-medium hover:bg-white/5 rounded-t-xl flex justify-between items-center'>
            What if I have no prior experience in tech?
          </AccordionTrigger>
          <AccordionContent className='px-6 pb-4 text-white/80'>
            No worries! Tech Treks is designed for beginners. Our members come from diverse backgrounds, and we provide workshops and mentorship to help you get started.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2" className='bg-black border border-white/10 rounded-xl mb-4'>
          <AccordionTrigger className='w-full px-6 py-4 text-left text-white text-lg font-medium hover:bg-white/5 rounded-t-xl flex justify-between items-center'>
            How much time commitment is required?
          </AccordionTrigger>
          <AccordionContent className='px-6 pb-4 text-white/80'>
            Members are expected to attend weekly meetings. Tutors have additional responsibilities to host office hours to help members. Every semester once the team is formed, we find a common time that works for everyone.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3" className='bg-black border border-white/10 rounded-xl mb-4'>
          <AccordionTrigger className='w-full px-6 py-4 text-left text-white text-lg font-medium hover:bg-white/5 rounded-t-xl flex justify-between items-center'>
            What kind of projects will I work on?
          </AccordionTrigger>
          <AccordionContent className='px-6 pb-4 text-white/80'>
            Projects vary each semester based on member interests. Past projects include web apps, mobile apps, and data analysis tools. The focus is on learning and building a portfolio. We always say what you put in is what you get out. We&apos;ve had startups or full on research projects spin up from this program.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4" className='bg-black border border-white/10 rounded-xl mb-4'>
          <AccordionTrigger className='w-full px-6 py-4 text-left text-white text-lg font-medium hover:bg-white/5 rounded-t-xl flex justify-between items-center'>
            How are tutors selected?
          </AccordionTrigger>
          <AccordionContent className='px-6 pb-4 text-white/80'>
            Tutors are selected based on their experience and willingness to mentor others. If you have relevant skills and a passion for helping others, we encourage you to apply!
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-5" className='bg-black border border-white/10 rounded-xl mb-4'>
          <AccordionTrigger className='w-full px-6 py-4 text-left text-white text-lg font-medium hover:bg-white/5 rounded-t-xl flex justify-between items-center'>
            What skills will I learn as a member?
          </AccordionTrigger>
          <AccordionContent className='px-6 pb-4 text-white/80'>
            This depends from semester to semester, but we will help you get used to React and various other AI and tooling needed to work as a full stack engineer. This comes from our intel in the current job market and providing you the flexiblity to decide which part of tech you really want to work in.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default FAQSection
