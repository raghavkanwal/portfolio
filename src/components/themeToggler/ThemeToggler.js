import { AnimatePresence, motion } from "framer-motion" 
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri'; 
import React, { useState } from "react"

import { Toggle } from "./../styled-snippets/header"

const ThemeToggler = ( { switchTheme } ) => {

    const [darkTheme, changeValue] = useState(true)

    const handleClick = (e) => {
      changeValue(!darkTheme);
      switchTheme(darkTheme);  
    }

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div 
            style={{display: `inline-block`}} key={darkTheme ? 'Light ' : 'Dark'}
            initial={{y: 5, opacity: 0}} animate={{y: 0, opacity: 1}} exit={{y: -5, opacity: 0}} transition={{duration: 0.2}}
            >
            <Toggle onClick={handleClick} className={darkTheme ? 'show-light' : 'show-dark'} style={{userSelect: `none`}}>{ darkTheme ? <RiSunFill /> : <RiMoonClearFill /> }</Toggle>
            </motion.div>
        </AnimatePresence>
    )
}

export default ThemeToggler