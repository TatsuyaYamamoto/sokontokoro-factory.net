import React, { FC } from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CommunicationNote from "../components/CommunicationNote"
import Hero from "../components/Hero"

const CommunicationPage: FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <Seo title="交流ノート" />
      <Hero activeTab="communication" />
      <CommunicationNote />
    </Layout>
  )
}

export default CommunicationPage

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
