import React, { FC } from "react"
import { PageProps, graphql } from "gatsby"

import { Box } from "@chakra-ui/react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import MusicList from "../components/MusicList"
import Hero from "../components/Hero"

const MusicPage: FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <Seo title="音楽" />
      <Hero activeTab="music" />
      <Box m={6}>
        <MusicList />
      </Box>
    </Layout>
  )
}

export default MusicPage

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
