import styled from "styled-components";
import React from "react"
import { Link } from "gatsby"

export const Footer = styled.footer`
  color: rgb(200,200,200);
  font-family: 'Roboto';
  text-align: center;
  margin: 1rem;
  font-size:0.8rem;
`;

export const Main = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;

export const Container = styled.div`
    max-width: 100%;
    margin: 2rem auto 0;
`;

export const MobileNavItemList = styled.ul`
  margin: 0;
  list-style: none;
`

export const StyledMobileLink = ({className, routePath, text}) => (
  <Link className={className} to={routePath}>{text}</Link>
);

export const MobileNavLinkItem = styled(StyledMobileLink)`
  text-decoration: none;
  color: ${props => props.theme.textColor};
  font-family: 'Roboto';
  font-size: 1rem;
  margin: 1rem;
  padding-bottom: 0.2rem;
  display: block;
 
  &:hover {
    border-bottom: 1px solid ${props => props.theme.teaseThemeColor}
  }
`;
