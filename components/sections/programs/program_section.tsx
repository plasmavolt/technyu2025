import React from 'react'
import { programsLinks } from '@/lib/consts'
import ProgramCard from './pcard/program-card'
const ProgramSection = () => {
  return (
    <section id='programs'>
      <div className='w-full h-fit flex flex-col items-center gap-10 md:gap-20 pt-5 pb-20'>
        <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center'>Our Programs</h1>
        {programsLinks.map((program, index) => (
            <ProgramCard key={program.name} ProgramDetail={program} variant={index % 2 === 0 ? 'green' : 'purple'} />
        ))}
      </div>
    </section>
  )
}

export default ProgramSection
