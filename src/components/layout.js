/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

import darkTheme from "../themes/darkTheme"
import lightTheme from "../themes/lightTheme"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"

import { Footer, Main, Container } from "./styled-snippets/layout"

import { MobileNavItemList , MobileNavLinkItem } from "./styled-snippets/layout";

const Menu = styled.aside`
  position:fixed;
  top:52px;
  right:0;
  transition: width 0.4s ease-in-out;
  width: 0;
  max-width: 40vw;
  height:100vh;
  z-index: 6;
  background-color:${props => props.theme.bodyBackground};

  &.open-menu {
    width: 100%;
  }

  @media screen and (max-width:768px) {
    max-width:100%;
  }
`;


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  const [theme, changeTheme] = useState(darkTheme);

  const switchTheme = (isThemeLight) => {
    changeTheme(isThemeLight ? lightTheme : darkTheme);
  }

  const [showMenu, toggleMenu] = useState(false);

  const MyGlobalStyle = createGlobalStyle`
    body {
      background-color: ${props => theme.bodyBackground};
      transition: background-color 0.2s ease-in-out;
    }
  `;

  const toggleSidebar = (showMenu) => {
    toggleMenu(showMenu);
    console.log("> Show menu ", showMenu);
  }

  return (
    <ThemeProvider theme={theme}>
      <MyGlobalStyle />
      <Main>
      <Header menuLinks={data.site.siteMetadata.menuLinks} switchTheme={switchTheme} toggleSidebar={toggleSidebar}/>
        <Container>
          <Menu className={`${showMenu ? 'open' : 'close'}-menu`} style={{
            position: `absolute`, top: 52, right: 0
          }}>
            <MobileNavItemList>
              <MobileNavLinkItem className="NavLinkItem" routePath="/resume" text="Resume"></MobileNavLinkItem>
            </MobileNavItemList>
          </Menu>
          <br />
          <br />
          {children}
        </Container>
        </Main>
      <Footer>{`© ${new Date().getFullYear()}, Raghav Kanwal. All Rights Reserved.`}</Footer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
