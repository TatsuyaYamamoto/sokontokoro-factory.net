import React, { FC } from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from "../styles/pages_index.module.scss"
import Hero from "../components/Hero"

const IndexPage: FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <Seo title="" />
      {/* @ts-ignore TODO */}
      <Hero title={data.site.siteMetadata.title} activeTab="home" />
      <section className={styles.blank} />
      <div className={styles.about}>
        <div className={styles.about__content}>
          <div className={styles.typographyTitle}>About</div>
          <div>
            <div className={styles.typographySubTitle}>このページは何？</div>
            <div className={styles.typographyBody}>
              いろいろやっているサークル「そこんところ工房」のページです。ゲーム、音楽、などメニューからどうぞ。
            </div>
          </div>
          <div>
            <div className={styles.typographySubTitle}>あなたはだれ？</div>
            <img src="/tatsuya.gif" alt="sokontokoro factory profile image" />
            <div className={styles.typographyBody}>
              こんな感じの人が内側に何人かいます。
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
