import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { HiOutlineMenu } from "react-icons/hi"

export const AppHeader = styled.header`
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

export const TopBarContainer = styled.div`
  max-width: ${props => props.theme.pageContainerW};
  margin: 0 auto;
  padding: 0.5rem 1rem;
  backdrop-filter: blur(${props => props.theme.blurIntensity});
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  transition: background-color 0.2s ease-in-out;
`;

export const NameBrand = styled.h1`
  color: ${props => props.theme.textColor};
  font-size: 1.4rem;
  margin: 0 1rem 0 0;
  display: inline-block;
  font-family: 'M Plus Rounded 1c';
  transition: background-color 0.2s ease-in-out;
`;

export const NavLinks = styled.div`
  list-style:none;
  display: inline-block;
  flex-grow: 1;
`;

export const Toggle = styled.button`
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
`;

export const StyledLink = ({className, routePath, text}) => (
  <Link className={className} to={routePath}>{text}</Link>
);

export const NavLinkItem = styled(StyledLink)`
  text-decoration: none;
  color: ${props => props.theme.textColor};
  font-family: inherit;
  font-family: 'Roboto';
  font-size: 1rem;
  margin: 0 0 0 1rem;
  padding-bottom: 0.2rem;
 
  &:hover {
    border-bottom: 1px solid ${props => props.theme.teaseThemeColor}
  }
`;


export const MenuButton = styled(HiOutlineMenu)`
  font-size:1.8rem;
  color: ${props => props.theme.textColor};
  margin: 0 1rem;

  &:hover {
    cursor:pointer;
  }
`;