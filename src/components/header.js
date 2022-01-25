import React, { useState } from "react"

import { Link } from "gatsby"

import { AnimatePresence, motion } from "framer-motion" 
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri'; 
import { AppHeader, TopBarContainer, NameBrand, NavLinks, Toggle, NavLinkItem } from "./styled-snippets/header";

import "normalize.css"

const Header = ({ switchTheme }) => {

  const [darkTheme, changeValue] = useState(true)

  const handleClick = (e) => {
    changeValue(!darkTheme);
    switchTheme(darkTheme);  
  }

  return (
    <AppHeader>
      <TopBarContainer>
        <Link to="/">
          <NameBrand>Raghav Kanwal</NameBrand>
        </Link>
        <NavLinks>
          { 
              <NavLinkItem className=  "NavLinkItem" routePath="/resume" text="Resume"></NavLinkItem>
            //  <NavLinkItem className="NavLinkItem" routePath="/works" text="Works"></NavLinkItem>
            //  <NavLinkItem className="NavLinkItem" routePath="/blog" text="Blog"></NavLinkItem> 
          }
        </NavLinks>
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.div 
            style={{display: `inline-block`}} key={darkTheme ? 'Light ' : 'Dark'}
            initial={{y: 5, opacity: 0}} animate={{y: 0, opacity: 1}} exit={{y: -5, opacity: 0}} transition={{duration: 0.2}}
          >
            <Toggle onClick={handleClick} className={darkTheme ? 'show-light' : 'show-dark'} style={{userSelect: `none`}}>{ darkTheme ? <RiSunFill /> : <RiMoonClearFill /> }</Toggle>
          </motion.div>
        </AnimatePresence>
      </TopBarContainer>
    </AppHeader>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
