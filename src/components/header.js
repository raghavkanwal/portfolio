import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

import "normalize.css"

const AppHeader = styled.header`
  font-size: 1.3rem;
  width: 100%;
  margin: 0 auto;
  background-color: rgba(32,32,32,0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
`;

const TopBarContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  backdrop-filter: blur(5px);
`;

const NameBrand = styled.h1`
  color: rgba(255, 255, 255, 0.92);
  font-size: 1.4rem;
  margin: 0 1rem 0 0;
  display: inline-block;
  font-family: 'M Plus Rounded 1c';
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

const Header = ({ siteTitle, menuLinks }) => (
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
    </TopBarContainer>
  </AppHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
