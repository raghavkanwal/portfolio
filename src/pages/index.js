import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import "normalize.css"

const Text = styled.p`
  font-family: 'Roboto';
  font-size:0.9rem;
  color: rgb(255,255,255,0.92);
  margin-bottom:0;
`;

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div class="container" style={{
      textAlign: `center`,
      maxWidth: `60ch`,
      margin: `0 auto`
    }}>

      <div className="businessCard" style={{
        backgroundColor: `rgba(255, 255, 255, 0.08)`,
        padding: `1rem`,
        borderRadius: `0.5rem`
      }}>
        <div className="leftContent">
          <h1 style={{
            fontFamily: `M Plus Rounded 1c`,
            fontSize: `2.2rem`,
            color: `rgba(255,255,255,0.92)`,
          }}>Raghav Kanwal</h1>
          <img src="./../images/profile.jpeg" alt="Raghav Kanwal"></img>
        </div>
        <Text>Hello, I am a front-end engineer based in New Delhi, India!</Text>
      </div>
    </div>
  </Layout>
)

export default IndexPage
