import React, { FC } from "react"
import { PageProps } from "gatsby"
import { useTranslation } from "react-i18next"
import { Box, Text, Heading, Center } from "@chakra-ui/react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"

import aboutGif from "../assets/image/tatsuya.gif"

const IndexPage: FC<PageProps> = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <Seo title="" />
      <Hero activeTab="home" expanding={true} />
      <Box height="200px" />
      <Box background={`#ffffff`}>
        <Box textAlign="center" paddingY={8}>
          <Heading as="h3" size="xl">
            {t(`index_about_heading`)}
          </Heading>
          <Box marginTop={2}>
            <Heading as="h4" size="md">
              {t(`index_about_page_title`)}
            </Heading>
            <Text>{t(`index_about_page_description`)}</Text>
          </Box>
          <Box marginTop={2}>
            <Heading as="h4" size="md">
              {t(`index_about_member_title`)}
            </Heading>
            <Center>
              <img src={aboutGif} alt="sokontokoro factory profile image" />
            </Center>
            <Text>{t(`index_about_member_description`)}</Text>
          </Box>
        </Box>
      </Box>
      <Box height="200px" />
    </Layout>
  )
}

export default IndexPage
