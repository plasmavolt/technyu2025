'use client'
import React from 'react'
import RoleCard from '@/components/ui/role-card'
import { devTeamRoles } from '@/lib/consts'
import { getRoleApplicationLink } from '@/lib/application-links'

const DevTeamRoles = () => {
  return (
    <section id='dev-team-roles' className='mt-16 px-[5vw] pb-20'>
      <h2 className='text-white text-3xl md:text-4xl lg:text-5xl font-bold text-left mb-8'>Join Our Dev Team</h2>
      <h3 className='text-white text-lg md:text-xl lg:text-2xl font-bold'>
        Ready to build something amazing? Apply for one of these roles:
      </h3>
      <p className='text-white text-lg mb-6'>
        Have questions? Reach out to us at <a href="mailto:devteam@techatnyu.org" className='text-blue-500 hover:text-blue-400 transition-colors'>devteam@techatnyu.org</a>
      </p>
      <p className='text-white text-lg md:text-xl mb-8'>
        Whether you&apos;re passionate about creating beautiful user experiences, building robust backend systems, 
        or integrating cutting-edge AI features, there&apos;s a perfect role for you on our team.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
        {devTeamRoles.map((role, index) => {
          const roleLink = getRoleApplicationLink('Dev Team', role.title)
          return (
            <RoleCard
              key={index}
              {...role}
              applicationsOpen={roleLink.status}
              applicationLink={roleLink.link}
              onApply={() => console.log(`${role.title} application clicked`)}
            />
          )
        })}
      </div>
    </section>
  )
}

export default DevTeamRoles
