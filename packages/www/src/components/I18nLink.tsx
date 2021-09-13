import React, { FC } from "react"
import { useTranslation } from "react-i18next"
import { Link, useStaticQuery, graphql } from "gatsby"

const I18nLink: FC<{ to: string; className?: string; strict?: boolean }> =
  props => {
    const { to, strict, children, ...otherProps } = props
    const { i18n } = useTranslation()
    const data = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              i18n {
                defaultLanguage
              }
            }
          }
        }
      `
    )
    const currentLanguage = i18n.language
    const { defaultLanguage } = data.site.siteMetadata.i18n
    const i18nTo =
      strict || currentLanguage === defaultLanguage
        ? to
        : `/${currentLanguage}${to}`

    return (
      <Link to={i18nTo} {...otherProps}>
        {children}
      </Link>
    )
  }

export default I18nLink
