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
      {/* @ts-ignore TODO */}
      <Hero title={data.site.siteMetadata.title} activeTab="communication" />
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
