import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Resume from "../components/resume/resume";

const ResumePage = () => (
  <Layout>
    <Seo title="Resume" />
    <h1>Hi from the resume page.</h1>
    <p>Welcome to Resume</p>
    <Resume></Resume>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ResumePage
