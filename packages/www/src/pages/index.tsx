import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopMenuList from "../components/TopMenuList"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <TopMenuList />
  </Layout>
)

export default IndexPage
