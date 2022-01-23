import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import "normalize.css"

const AppHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background: ${props => props.theme.backgroundColor};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  transition: all 0.3s ease-in-out;
`;

const TopBarContainer = styled.div`
  max-width: ${props => props.theme.pageContainerW};
  margin: 0 auto;
  padding: 0.5rem 1rem;
  backdrop-filter: blur(${props => props.theme.blurIntensity});
`;

const NameBrand = styled.h1`
  color: ${props => props.theme.textColor};
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


const Header = ({ switchTheme }) => {

  const [value, changeValue] = useState(true)

  const handleClick = (e) => {
    changeValue(!value);
    switchTheme(value);  
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
        <button onClick={handleClick}>Switch Theme</button> 
      </TopBarContainer>
    </AppHeader>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
