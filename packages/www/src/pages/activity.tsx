import React, { FC } from "react"
import { PageProps } from "gatsby"
import { Box } from "@chakra-ui/react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ActivityList from "../components/ActivityList"

const ActivityPage: FC<PageProps> = props => {
  return (
    <Layout>
      <Seo title="Activity" />
      <Box m={6}>
        <ActivityList />
      </Box>
    </Layout>
  )
}

export default ActivityPage
