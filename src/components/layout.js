/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

import styled from "styled-components"

const Footer = styled.footer`
  color: rgb(100,100,100);
  font-family: 'Roboto';
  text-align: center;
  margin: 1rem;
  font-size:0.8rem;
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

  return (
    <>
      <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0.5rem 1rem`,
          marginTop: `2.5rem`,
          borderRadius: `0.5rem`,
        }}
      >
        <main>{children}</main>
        <Footer>
          {`© ${new Date().getFullYear()}, Raghav Kanwal. All Rights Reserved.`}
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
