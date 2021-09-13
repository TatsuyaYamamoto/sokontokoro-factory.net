import React, { FC } from "react"
import { Link } from "gatsby"
import clsx from "clsx"
import { useTranslation } from "react-i18next"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faGamepad,
  faMusic,
  faUserFriends,
  faEnvelope,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons"

import * as styles from "./TabMenu.module.scss"

const Indicator = (props: { active: boolean }) => (
  <span
    className={clsx(styles.indicator, props.active && styles.indicator__active)}
  >
    <span className={styles.indicator__content} />
  </span>
)

interface TabMenuProps {
  active: "home" | "activity" | "game" | "music" | "communication" | "inquire"
}
const TabMenu: FC<TabMenuProps> = ({ active }) => {
  const { t } = useTranslation()

  return (
    <div className={styles.tabs}>
      <div className={styles.tabScroller}>
        <div className={styles.tabScroller__scrollArea}>
          <div className={styles.tabScroller__scrollContent}>
            <Link
              to="/"
              className={clsx(
                styles.tab,
                active === "home" && styles.tab__active
              )}
            >
              <span className={styles.tab__content}>
                <FontAwesomeIcon className={styles.tab__icon} icon={faHome} />
                <span className={styles.tab__label}>{t(`tab_home`)}</span>
              </span>

              <Indicator active={active === "home"} />
              <span className="mdc-tab__ripple mdc-ripple-upgraded" />
            </Link>

            <Link
              to="/activity"
              className={clsx(
                styles.tab,
                active === "activity" && styles.tab__active
              )}
            >
              <span className={styles.tab__content}>
                <FontAwesomeIcon
                  className={styles.tab__icon}
                  icon={faNewspaper}
                />

                <span className={styles.tab__label}>{t(`tab_activity`)}</span>
              </span>

              <Indicator active={active === "activity"} />
              <span className="mdc-tab__ripple mdc-ripple-upgraded" />
            </Link>

            <a
              className={clsx(
                styles.tab,
                active === "game" && styles.tab__active
              )}
              href="https://games.sokontokoro-factory.net/"
            >
              <span className={styles.tab__content}>
                <FontAwesomeIcon
                  className={styles.tab__icon}
                  icon={faGamepad}
                />
                <span className={styles.tab__label}>{t(`tab_game`)}</span>
              </span>

              <Indicator active={active === "game"} />
              <span className="mdc-tab__ripple mdc-ripple-upgraded" />
            </a>

            <Link
              to="/music"
              className={clsx(
                styles.tab,
                active === "music" && styles.tab__active
              )}
            >
              <span className={styles.tab__content}>
                <FontAwesomeIcon className={styles.tab__icon} icon={faMusic} />

                <span className={styles.tab__label}>{t(`tab_music`)}</span>
              </span>

              <Indicator active={active === "music"} />
              <span className="mdc-tab__ripple mdc-ripple-upgraded" />
            </Link>

            <Link
              to="/communication"
              className={clsx(
                styles.tab,
                active === "communication" && styles.tab__active
              )}
            >
              <span className={styles.tab__content}>
                <FontAwesomeIcon
                  className={styles.tab__icon}
                  icon={faUserFriends}
                />

                <span className={styles.tab__label}>
                  {t(`tab_communication`)}
                </span>
              </span>

              <Indicator active={active === "communication"} />
              <span className="mdc-tab__ripple mdc-ripple-upgraded" />
            </Link>

            <a
              className={clsx(
                styles.tab,
                active === "inquire" && styles.tab__active
              )}
            >
              <span className={styles.tab__content}>
                <FontAwesomeIcon
                  className={styles.tab__icon}
                  icon={faEnvelope}
                />
                <span className={styles.tab__label}>{t(`tab_contact`)}</span>
              </span>

              <Indicator active={active === "inquire"} />
              <span className="mdc-tab__ripple mdc-ripple-upgraded" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabMenu
