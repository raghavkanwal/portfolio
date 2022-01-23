import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import "normalize.css"
import ProfileImageSrc from './../images/profile.jpeg';
import About from "../components/about"

const Text = styled.p`
  font-family: 'Roboto';
  font-size:0.9rem;
  color: ${props => props.theme.textColor};
  margin-bottom:0;
`;

const BusinessCard = styled.div`
margin-top: 2rem;
background-color: ${props => props.theme.businessCardBackground};
padding: 1rem;
border-radius: 0.5rem;
display: flex;
flex-direction: row;
margin-bottom: 3rem;
`

const BusinessCardHeader = styled.h1`
  font-size: 2.2rem;
  color: ${props => props.theme.textColor};
  font-family: 'M Plus Rounded 1c';
  margin:0;
  line-height:1.3;
`

const Image = styled.img`
  height: 85px;
  width: 85px;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.textColor};
  margin: 0;
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="container" style={{
      maxWidth: `60ch`,
      margin: `0 auto`
    }}>
      <br/>
      <br/>
      <BusinessCard>
        <div className="leftContent" style={{
          flexGrow: 1
        }}>
          <BusinessCardHeader>Raghav Kanwal</BusinessCardHeader>
          <Text>Frontend Engineer</Text>
          <Text>Delhi, India</Text>
        </div>
        <div className="rightContent">
          <Image src={ProfileImageSrc} alt="Raghav Kanwal" loading="lazy"/>
        </div>
      </BusinessCard>

      <About />
      </div>
  </Layout>
)

export default IndexPage
