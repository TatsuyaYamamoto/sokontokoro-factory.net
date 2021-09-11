import React, { FC } from "react"
import clsx from "clsx"
import { StaticImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLanguage } from "@fortawesome/free-solid-svg-icons"

import * as styles from "./Hero.module.scss"
import TabMenu from "./TabMenu"

interface HeroProps {
  title: string
  activeTab:
    | "home"
    | "activity"
    | "game"
    | "music"
    | "communication"
    | "inquire"
}

const Hero: FC<HeroProps> = ({ title, activeTab }) => {
  return (
    // <div className="mdc-top-app-bar mdc-elevation--z2 toolbar">
    <div className={styles.toolbar}>
      <div className={styles.toolbar__row}>
        <section
          className={clsx(
            styles.toolbar__section,
            styles.toolbar__section__alignEnd
          )}
        >
          <a className={styles.toolbar__actionItem} href="/">
            <FontAwesomeIcon
              icon={faLanguage}
              className="material-icons mdc-toolbar__menu-icon"
            />
          </a>
        </section>
      </div>
      <div className={styles.toolbar__row}>
        <section className={styles.toolbar__section}>
          <a className={styles.toolbar__title} href="/">
            <span className="logo-text">{title}</span>
            <StaticImage
              src="../assets/image/hammer.png"
              width={20}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              style={{ marginBottom: `1.45rem` }}
            />
          </a>
        </section>
      </div>
      <div className={styles.toolbar__row}>
        <TabMenu active={activeTab} />
      </div>
    </div>
  )
}

export default Hero
