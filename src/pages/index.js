import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import "normalize.css"
import ProfileImageSrc from './../images/profile.jpeg';
import About from "../components/about"
import { DogModel } from "../components/dog"

const Text = styled.p`
  font-family: 'Roboto';
  font-size:0.9rem;
  color: rgb(255,255,255,0.92);
  margin-bottom:0;
`;

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="container" style={{
      maxWidth: `60ch`,
      margin: `0 auto`
    }}>

      <DogModel/>
      <div className="businessCard" style={{
        marginTop: `2rem`,
        backgroundColor: `rgba(255, 255, 255, 0.08)`,
        padding: `1rem`,
        borderRadius: `0.5rem`,
        display: `flex`,
        flexDirection: `row`,
        marginBottom: `3rem`,
      }}>
        <div className="leftContent" style={{
          flexGrow: 1
        }}>
          <h1 style={{
            fontSize: `2.2rem`,
            color: `rgba(255,255,255,0.92)`,
            fontFamily: `'M Plus Rounded 1c'`,
            margin:0
          }}>Raghav Kanwal</h1>
          <Text>Frontend Engineer</Text>
          <Text>Delhi, India</Text>
        </div>
        <div className="rightContent">
          <img src={ProfileImageSrc} alt="Raghav Kanwal" style={{
            height: `85px`,
            width: `85px`,
            borderRadius: `50%`,
            border: `2px solid rgba(255,255,255,0.8)`,
            margin: 0
          }}></img>
        </div>
      </div>

      <About />
    </div>
  </Layout>
)

export default IndexPage
