import { StickyScroll } from '@/components/ui/sticky-scroll-reveal'
import React from 'react'
import Image from 'next/image'
import { Apply } from '@/components/ui/Apply'
import DevTeamRoles from '@/components/sections/dev-team-roles'
import { getApplicationLink } from '@/lib/application-links'
const Page = () => {
  const { status, link } = getApplicationLink('Dev Team')

  return (
      <div className='pt-[5svh] md:pt-[20svh]'>
        <section id='about-dt' className='flex flex-col-reverse md:flex-row md:justify-between px-[5vw] md:px-[10svw] lg:px-[5svw]'>
                <div className='lg:max-w-[60vw] min-w-[40vw]'>
                  <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold text-left pb-10'>Dev Team</h1>
                    <p className='text-white text-lg md:text-xl lg:text-2xl mb-6'>
                      Join a semesterly long sprint in taking a product from 0 to 1. Learn, adapt, grow, and ship like a startup catering to real users.
                    </p>
                    <p className='text-white text-lg md:text-xl lg:text-2xl mb-6'>
                      Whether you&apos;re a backend demon or a frontend wizard, there&apos;s a place for you on our team. If you can ship good quality code, we want you on this team!
                    </p>
                    <p className='text-white text-lg md:text-xl lg:text-2xl mb-6'>
                      Since the program's launch in Spring 2024, previous members have joined FAANG, Jane Street, and startups. Some have even started their own design agencies!
                    </p>
                    <Apply
                      isOpen={status}
                      applicationLink={link}
                      statusClassName='md:w-[16rem] md:mb-0'
                    />
                  </div>
                  <Image
                    src={`/program-logos/dev-team.svg`}
                    alt={`Dev Team`}
                    width={200}
                    height={200}
                    className='object-contain w-full md:w-[40vw] h-fit lg:max-w-[30vw]'
                  />
              </section>
        <section id='structure' className='mt-16'>
          <h2 className='text-white text-3xl md:text-4xl lg:text-5xl font-bold text-left mb-8 px-[5vw]'>The Curriculum</h2>
          <StickyScroll
          
          content={[{
            title: "Building",
            description: "Start an intense sprint working with fellow engineers to turn mocks into an MVP. Collaborate together to acquire users and ship fast.",
            content: <Image src="/event-pics/buildathon.jpg" alt="buildathon" fill className='object-contain w-full h-full' />,
            mobileContent: <div className="relative w-full h-[300px]"><Image src="/event-pics/buildathon.jpg" alt="buildathon" fill className='object-cover rounded-lg' /></div>
          }, {
            title: "Iteration",
            description: "As you acquire users, learn how to iterate quick, respond, and add features to support a growing userbase leveraging Tech@NYU's network.",
            content: <Image src="/event-pics/devteam2.jpg" alt="keynote" fill className='object-contain w-full h-full' />,
            mobileContent: <div className="relative w-full h-[300px]"><Image src="/event-pics/devteam2.jpg" alt="keynote" fill className='object-cover rounded-lg' /></div>
          },
          {
            title: "Showcase",
            description: "Finally show off to a panel of technical founders and experts, with the repository becoming open-source to add to your portfolio.",
            content: <Image src="/event-pics/devteam3.jpg" alt="panel" fill className='object-contain w-full h-full' />,
            mobileContent: <div className="relative w-full h-[300px]"><Image src="/event-pics/devteam3.jpg" alt="panel" fill className='object-cover rounded-lg' /></div>
          }, 
          {
            title: "Workshops",
            description: "Internal workshops hosted by the club to help upskill. Workshops have covered RAG, MCP, agentic frameworks, post training, database sharding and optimizations, and more!",
            content: <Image src="/event-pics/panel.jpg" alt="workshop" fill className='object-contain w-full h-full' />,
            mobileContent: <div className="relative w-full h-[300px]"><Image src="/event-pics/panel.jpg" alt="workshop" fill className='object-cover rounded-lg' /></div>
          }
        
        ]}
          />
        </section>
        
        <DevTeamRoles />
        
    </div>
  )
}

export default Page
