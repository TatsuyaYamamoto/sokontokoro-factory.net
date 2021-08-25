import React, { FC, useEffect, useState } from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CommunicationNote from "../components/CommunicationNote"

const CommunicationPage: FC<PageProps> = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <CommunicationNote />
    </Layout>
  )
}

export default CommunicationPage
