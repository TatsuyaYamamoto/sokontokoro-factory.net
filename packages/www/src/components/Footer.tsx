import React, { FC } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"

import * as styles from "./Footer.module.scss"
import packageJson from "../../package.json"

const INQUIRE = ""
const TWITTER = "https://twitter.com/skntkr_factory"
const GITHUB = "https://github.com/TatsuyaYamamoto/"

const Footer: FC = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.footer__content}>
          <div className={styles.footer__brand__title}>
            <a className={styles.footer__brand} href="/">
              そこんところ工房 Website
            </a>
          </div>
          <div className={styles.footer__brand__subtitle}>
            Something around me.
          </div>
          <div className={styles.footer__connect_icons}>
            <ul>
              {[
                { href: INQUIRE, icon: faEnvelope },
                { href: TWITTER, icon: faTwitter },
                { href: GITHUB, icon: faGithub },
              ].map(({ href, icon }) => (
                <li key={href}>
                  <a className={styles.footer__connect_icons__icon} href={href}>
                    <FontAwesomeIcon icon={icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.copyright__content}>
          {`© 2014-${new Date().getFullYear()} Sokontokoro Factory, All rights reserved.`}
          <a href="https://github.com/TatsuyaYamamoto/sokontokoro-factory.net">
            {`Currently v${packageJson.version}`}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer