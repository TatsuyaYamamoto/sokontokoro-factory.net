import React, { FC } from "react"
import { PageProps, graphql } from "gatsby"
import { Box } from "@chakra-ui/react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ActivityList from "../components/ActivityList"
import Hero from "../components/Hero"

const ActivityPage: FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <Seo title="アクティビティ" />
      <Hero activeTab="activity" />
      <Box m={6}>
        <ActivityList />
      </Box>
    </Layout>
  )
}

export default ActivityPage

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
