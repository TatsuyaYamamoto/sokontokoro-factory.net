import React, { FC } from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

interface SeoProps {
  title?: string
  description?: string
  meta?: (
    | { name: string; content: string }
    | { property: string; content: string }
  )[]
}

const Seo: FC<SeoProps> = props => {
  const { t, i18n } = useTranslation()
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            twitterId
            siteBaseUrl
            defaultOgpImageUrl
          }
        }
      }
    `
  )

  const lang = i18n.language
  const siteName = t("meta_site_name")
  const title = props.title ? `${props.title} | ${siteName}` : siteName
  const metaDescription = props.description ?? t("meta_site_description")
  const siteUrl = site.siteMetadata.siteBaseUrl
  const ogpImageUrl = site.siteMetadata.defaultOgpImageUrl
  const twitterId = site.siteMetadata.twitterId

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:site_name`,
          content: siteName,
        },
        {
          property: `og:url`,
          content: siteUrl,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: ogpImageUrl,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        ...(twitterId
          ? [
              {
                name: `twitter:site`,
                content: twitterId,
              },
              {
                name: `twitter:creator`,
                content: twitterId,
              },
            ]
          : []),
      ].concat(props.meta ?? [])}
    />
  )
}

export default Seo
