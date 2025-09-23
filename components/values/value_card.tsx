import React from 'react'
import './style.css'
import { ValueCardProps } from '@/lib/types'
import Image from 'next/image'

const ValueCard = ({ProgramDetail, variant}: {ProgramDetail: ValueCardProps, variant: string}) => {
  const { name, url, svgicon, description } = ProgramDetail;
  return (
    <div className={`rectangle ${variant ? variant : ''}`}>
        {/* <div className={` w-full h-full`}> */}
            <div className={`text-white h-[10vh] bg-transparent outline-2 outline-white w-full flex items-center justify-start px-5`}>
                <h1>
                    {name}
                </h1>
            </div>
      <div className='flex items-center justify-center w-full md:h-[40vh]'>
        <p className='text-white text-lg lg:text-[2svw] w-full h-full flex items-center justify-center text-left p-10'>{description}</p>
            </div>
    </div>
  )
}

export default ValueCard

