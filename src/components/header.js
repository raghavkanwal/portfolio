import React, { useState } from "react"

import { Link } from "gatsby"
import { AppHeader, TopBarContainer, NameBrand, NavLinks, NavLinkItem, MenuButton } from "./styled-snippets/header";

import "normalize.css"
import ThemeToggler from "./themeToggler/ThemeToggler"

const Header = ({ switchTheme, toggleSidebar }) => {

  const [menuOpen, toggleMenu] = useState(false)

  const handleMenu = () => {
    toggleMenu(!menuOpen);
    toggleSidebar(!menuOpen)
  }

  return (
    <AppHeader>
      <TopBarContainer>
          <NameBrand><Link to="/">Raghav Kanwal</Link></NameBrand>
        <NavLinks>
          { 
            <NavLinkItem className=  "NavLinkItem" routePath="/resume" text="Resume"></NavLinkItem>
          }
        </NavLinks>
        <ThemeToggler switchTheme={switchTheme} />
        <MenuButton onClick={handleMenu}/>
      </TopBarContainer>
    </AppHeader>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
