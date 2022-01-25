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
import { ThemeProvider, createGlobalStyle } from "styled-components"

import { Footer, Main, Container } from "./styled-snippets/layout"

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

  const MyGlobalStyle = createGlobalStyle`
    body {
      background-color: ${props => theme.bodyBackground};
      transition: background-color 0.2s ease-in-out;
    }
  `;

  return (
    <ThemeProvider theme={theme}>
      <Header menuLinks={data.site.siteMetadata.menuLinks} switchTheme={switchTheme} />
      <MyGlobalStyle />
      <Main>
        <Container>
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
