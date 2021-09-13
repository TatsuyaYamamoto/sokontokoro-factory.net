import React, { FC } from "react"
import { PageProps, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from "../styles/pages_index.module.scss"
import Hero from "../components/Hero"

const IndexPage: FC<PageProps> = ({ data }) => {
  const { t } = useTranslation()
  return (
    <Layout>
      <Seo title="" />
      {/* @ts-ignore TODO */}
      <Hero title={data.site.siteMetadata.title} activeTab="home" />
      <section className={styles.blank} />
      <div className={styles.about}>
        <div className={styles.about__content}>
          <div className={styles.typographyTitle}>
            {t(`index_about_heading`)}
          </div>
          <div>
            <div className={styles.typographySubTitle}>
              {t(`index_about_page_title`)}
            </div>
            <div className={styles.typographyBody}>
              {t(`index_about_page_description`)}
            </div>
          </div>
          <div>
            <div className={styles.typographySubTitle}>
              {t(`index_about_member_title`)}
            </div>
            <img src="/tatsuya.gif" alt="sokontokoro factory profile image" />
            <div className={styles.typographyBody}>
              {t(`index_about_member_description`)}
            </div>
          </div>
        </div>
      </div>
      <section className={styles.blank} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
