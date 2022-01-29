import React, {  } from "react"

import { Link } from "gatsby"
import { AppHeader, TopBarContainer, NameBrand, NavLinks, NavLinkItem, MenuButton } from "./styled-snippets/header";

import "normalize.css"
import ThemeToggler from "./themeToggler/ThemeToggler"

const Header = ({ switchTheme }) => {

  return (
    <AppHeader>
      <TopBarContainer>
        <Link to="/">
          <NameBrand>Raghav Kanwal</NameBrand>
        </Link>
        <NavLinks>
          { 
            <NavLinkItem className=  "NavLinkItem" routePath="/resume" text="Resume"></NavLinkItem>
          }
        </NavLinks>
        <MenuButton />
        <ThemeToggler switchTheme={switchTheme} />
      </TopBarContainer>
    </AppHeader>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
