'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavigationDropdown from './navigation_dropdown'
import { programs } from '@/lib/consts'
import { MenuIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion';
import styles from './style.module.css';
import NavbarMobile from './NavbarMobile'

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);
  return (
    <div className='w-full fixed top-0 left-0 z-50 flex justify-center bg-black'>
      <div className='outline outline-white rounded-3xl w-[90%] md:w-[85svw] min-h-24 p-5 text-lg bg-black mt-10 mb-5'>
        <div className='w-full h-full flex justify-between items-center'>
        <Link href="/">
          <Image src="/logo.svg" alt="tech@nyu logo" width={200} height={50} className='object-contain'/>
        </Link>
        <div className='gap-5 md:gap-10 text-xl lg:text-2xl hidden md:flex text-center'>
          <Link href="/team" className='text-white hover:underline '>Team</Link>
          <Link href="#" className='text-white hover:underline'>About</Link>
          <NavigationDropdown name="Programs" items={programs.map(prog => ({ name: prog, href: `#${prog.toLowerCase().replace(/\s+/g, '-')}` }))} />
          <Link href="#" className='text-white hover:underline'>Contact</Link>
        </div>
        <div className='md:hidden flex items-center justify-center gap-2 text-white' onClick={() => setIsActive(!isActive)}>
            <div className={`${styles.label} cursor-pointer`}>
                <motion.p variants={opacity} animate={!isActive ? "open" : "closed"}>Menu</motion.p>
                <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>Close</motion.p>
            </div>
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}/>
        </div>
        </div>
        <AnimatePresence mode='wait'>
            {isActive && (
                <NavbarMobile/>
            )}
        </AnimatePresence>
      </div>
    </div>
  )
}

const opacity = {
    initial: {
        opacity: 0
    },

    open: {
        opacity: 1,
        transition: {duration: 0.5}
    },

    closed: {
        opacity: 0,
        transition: {duration: 0.5}
    }
}

export default Navbar
