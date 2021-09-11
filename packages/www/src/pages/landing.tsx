import React, { FC } from "react"
import { PageProps, graphql, Link } from "gatsby"

import { Box, Button, Text } from "@chakra-ui/react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { StaticImage } from "gatsby-plugin-image"

const LandingPage: FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <Seo
        title=""
        meta={[
          // ランディングページは検索結果に表示させない
          { name: "robots", content: "noindex" },
        ]}
      />
      <main>
        <Box fontSize="30px" margin={10} color="#ffffff">
          <Text>Welcome</Text>
          <Box fontFamily="PixelMplus">
            そこんところ工房{" "}
            <StaticImage
              src="../assets/image/hammer.png"
              width={20}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              style={{ marginBottom: `1.45rem` }}
            />
          </Box>
        </Box>
        <Box margin={10}>
          <Box marginY={2}>
            <Link to="/">
              <Button>ホームページTOP</Button>
            </Link>
          </Box>
          {[
            {
              to: "/afterword/20190908_bokulove23",
              label: "僕ラブ23(2019/9/8)のあとがき",
            },
            {
              to: "/afterword/20180623_numalove6",
              label: "沼ラブ6(2019/6/23)のあとがき",
            },
            {
              to: "/afterword/20180324_bokulove22",
              label: "僕ラブ22(2019/3/24)のあとがき",
            },
          ].map(({ to, label }) => (
            <Box key={to} marginY={2}>
              <Link to={to}>
                <Button>{label}</Button>
              </Link>
            </Box>
          ))}
        </Box>
      </main>
    </Layout>
  )
}

export default LandingPage

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
