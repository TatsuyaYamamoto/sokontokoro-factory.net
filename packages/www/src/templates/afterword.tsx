import React, { FC } from "react"
import { graphql, PageProps } from "gatsby"
import styled from "@emotion/styled"
import { Box } from "@chakra-ui/react"

import Seo from "../components/seo"

const Root = styled("div")`
  h1,
  h2,
  p {
    font-size: revert;
    font-weight: revert;
    margin: revert;
  }
  a {
    color: revert;
    text-decoration: revert;
  }
`

const AfterwordTemplate: FC<PageProps> = ({ data, location }) => {
  // @ts-ignore TODO
  const html = data.post?.html

  return (
    <>
      <Seo
        title=""
        meta={[
          // あとがきページは検索結果に表示させない
          { name: "robots", content: "noindex" },
        ]}
      />
      <Root>
        <Box
          maxWidth={600}
          margin="0 auto"
          padding={5}
          background="rgba(255,255,255,0.8)"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Root>
    </>
  )
}

export default AfterwordTemplate

export const pageQuery = graphql`
  query AfterwordBySlug($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      html
    }
  }
`
