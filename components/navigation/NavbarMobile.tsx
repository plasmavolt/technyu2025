import { motion } from 'motion/react';
import React, { useState } from 'react'
import styles from './navigation.module.css'
import Body from './mobile_body/nav_body';
import { height } from './mobileanim';
const NavbarMobile = () => {
    const links = [

  {

    title: "Home",

    href: "/",

    src: "home.png"

  },

  {

    title: "Shop",

    href: "/shop",

    src: "shop.png"

  },

  {

    title: "About Us",

    href: "/about",

    src: "home.png"

  },

  {

    title: "Lookbook",

    href: "/lookbook",

    src: "lookbook.png"

  },

  {

    title: "Contact",
    href: "/contact",
  }
]


    const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});
    return (
        <motion.div variants={height} initial="initial" animate="enter" exit="exit"  className='overflow-hidden w-full'>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
                    {/* <Footer /> */}
                </div>
            </div>
        </motion.div>
    )
}

export default NavbarMobile
