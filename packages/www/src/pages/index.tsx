import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from "../styles/pages_index.module.scss"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
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

export default IndexPage
