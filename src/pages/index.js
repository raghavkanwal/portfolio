import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProfileImageSrc from './../images/profile.jpeg';
import About from "../components/about"

import { Text, BusinessCard, BusinessCardHeader, Image } from "../components/styled-snippets/index";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
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
  </Layout>
)

export default IndexPage
