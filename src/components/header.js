import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { AnimatePresence, motion } from "framer-motion" 
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri'; 

import "normalize.css"

const AppHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background: ${props => props.theme.headerBackground};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  transition: background-color 0.2s ease-in-out;
`;

const TopBarContainer = styled.div`
  max-width: ${props => props.theme.pageContainerW};
  margin: 0 auto;
  padding: 0.5rem 1rem;
  backdrop-filter: blur(${props => props.theme.blurIntensity});
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s ease-in-out;
`;

const NameBrand = styled.h1`
  color: ${props => props.theme.textColor};
  font-size: 1.4rem;
  margin: 0 1rem 0 0;
  display: inline-block;
  font-family: 'M Plus Rounded 1c';
  transition: background-color 0.2s ease-in-out;
`;

const NavLinks = styled.div`
  list-style:none;
  display: inline-block;
`;

// const StyledLink = ({className, routePath, text}) => (
//   <Link className={className} to={routePath}>{text}</Link>
// );

// const NavLinkItem = styled(StyledLink)`
//   text-decoration: none;
//   color: rgba(255, 255, 255, 0.92);
//   font-family: inherit;
//   font-family: 'Roboto';
//   font-size: 1rem;
//   margin: 0 0 0 1rem;
// `;

const Toggle = styled.button`
  font-size: ${ props => props.theme.textFontSize };
  font-family: 'Roboto';
  line-height: 1;
  padding: 0.5rem 0.4rem 0.3rem;
  border-radius: 0.4rem;
  border: 0;
  color: ${props => props.theme.textColor};

  &.show-light {
    background-color: ${props => props.theme.teaseThemeColor};
  }

  &.show-dark {
    color: #fff;
    background-color: ${props => props.theme.teaseThemeColor};
  }
  
  &:hover {
    cursor: pointer;
  }
`


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
          {/* <NavLinkItem className="NavLinkItem" routePath="/resume" text="Resume"></NavLinkItem>
          <NavLinkItem className="NavLinkItem" routePath="/works" text="Works"></NavLinkItem>
          <NavLinkItem className="NavLinkItem" routePath="/blog" text="Blog"></NavLinkItem> */}
        </NavLinks>
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.div 
            style={{display: `inline-block`}} key={darkTheme ? 'Light ' : 'Dark'}
            initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} exit={{y: -20, opacity: 0}}
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
