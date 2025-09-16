import { motion } from 'motion/react';
import React, { useState } from 'react'
import styles from './navigation.module.css'
const NavbarMobile = () => {
    const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});
    return (
        <motion.div className='overflow-hidden w-full'>
            <div className={styles.wrapper}>
                <div className={styles.container}>
          {/* <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
          <Footer /> */}
          <div className='bg-red-100 h-[20vh] z-[100]'>
 Some stuff here
          </div>
                </div>
            </div>
        </motion.div>
    )
}

export default NavbarMobile
