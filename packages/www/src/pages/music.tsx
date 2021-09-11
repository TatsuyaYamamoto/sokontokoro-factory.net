import React, { FC } from "react"
import { PageProps } from "gatsby"
import { Box } from "@chakra-ui/react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import MusicList from "../components/MusicList"

const MusicPage: FC<PageProps> = props => {
  return (
    <Layout>
      <Seo title="MusicList" />
      <Box m={6}>
        <MusicList />
      </Box>
    </Layout>
  )
}

export default MusicPage
