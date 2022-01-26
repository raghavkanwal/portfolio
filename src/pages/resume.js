import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Resume from "../components/resume/resume";

const ResumePage = () => (
  <Layout>
    <Seo title="Resume" />
    <Resume></Resume>
  </Layout>
)

export default ResumePage
