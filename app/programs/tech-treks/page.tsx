'use client'
import React from 'react'
import RoleCard from '@/components/ui/role-card'
import Image from 'next/image'
import ParallaxScrollGallery from '@/components/ui/parallax-scroll-gallery'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion'
import { techTreksMemberData, techTreksTutorData, techTreksGalleryImages } from '@/lib/consts'

const Page = () => {
  // Toggle this to control application status
  const applicationsOpen = false;

  return (
    <div className='min-h-screen pt-[12rem] px-[5vw]'>
        
        <section id='about-tt' className='flex flex-col-reverse md:flex-row md:justify-between'>
          <div className='lg:max-w-[60vw]'>
          <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold text-left pb-10'>Tech Treks</h1>
            <p className='text-white text-lg md:text-xl max-w-2xl'>Initially created to expose freshmen to the tech industry, we realized there were sophomores and juniors just as new to the industry. Tech Treks now has two participant types: members and tutors!

Members: You will be a part of a 12-15 person semesterly cohort that meets every week on Tuesdays and Fridays. You will meet other students who are beginning their journeys in tech, connect with industry professionals, learn from workshops, and add fun software projects to your portfolio!

Tutors: You will aid the members in building their projects by offering your expertise on Tuesdays, with optional additional office hours. In return, you will get all the perks that regular members get!</p>
            </div>
            <Image
              src={`/program-logos/tech-treks.svg`}
              alt={`Tech Treks`}
              width={200}
              height={200}
              className='object-contain w-full h-full lg:max-w-[30vw]'
            />
        </section>
        
        <section id='roles'>
            <div className='mt-16 mb-8'>
                <h2 className='text-white text-3xl md:text-4xl lg:text-5xl font-bold text-left mb-12'>Choose Your Path</h2>
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
                    <RoleCard
                        {...techTreksMemberData}
                        applicationsOpen={applicationsOpen}
                        onApply={() => console.log('Member application clicked')}
                    />
                    
                    <RoleCard
                        {...techTreksTutorData}
                        applicationsOpen={applicationsOpen}
                        onApply={() => console.log('Tutor application clicked')}
                    />
                </div>
            </div>
        </section>
        <section id='some photos'>
          <h2 className='text-white text-3xl md:text-4xl lg:text-5xl font-bold text-left mb-12'>Some Photos</h2>
          <div className='relative w-full overflow-hidden'>
            <ParallaxScrollGallery images={techTreksGalleryImages} />
          </div>
        </section>
        <section id='faq'>
          <h2 className='text-white text-3xl md:text-4xl lg:text-5xl font-bold text-left mb-12 mt-16'>FAQ</h2>
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
    </div>
  )
}

export default Page
