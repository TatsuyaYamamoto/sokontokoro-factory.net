import React, { VFC } from "react"
import { Link } from "gatsby"
import clsx from "clsx"
import { useTranslation } from "react-i18next"
import { Box } from "@chakra-ui/react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  IconDefinition,
  faHome,
  faGamepad,
  faMusic,
  faUserFriends,
  faEnvelope,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons"

import * as styles from "./TabMenu.module.scss"
import I18nLink from "./I18nLink"

const Indicator = (props: { active: boolean }) => (
  <span
    className={clsx(styles.indicator, props.active && styles.indicator__active)}
  >
    <span className={styles.indicator__content} />
  </span>
)

const TabMenuItem: VFC<{
  to: string
  active: boolean
  icon: IconDefinition
  label: string
}> = props => {
  const isExternal = props.to.startsWith("http")

  const innerElement = (
    <>
      <span className={styles.tab__content}>
        <FontAwesomeIcon className={styles.tab__icon} icon={props.icon} />
        <span className={styles.tab__label}>{props.label}</span>
      </span>

      <Indicator active={props.active} />
      <span className="mdc-tab__ripple mdc-ripple-upgraded" />
    </>
  )

  if (isExternal) {
    return (
      <a
        href={props.to}
        target="_blank"
        className={clsx(styles.tab, props.active && styles.tab__active)}
      >
        {innerElement}
      </a>
    )
  }
  return (
    <I18nLink
      to={props.to}
      className={clsx(styles.tab, props.active && styles.tab__active)}
    >
      {innerElement}
    </I18nLink>
  )
}

interface TabMenuProps {
  active: "home" | "activity" | "game" | "music" | "communication" | "inquire"
}
const TabMenu: VFC<TabMenuProps> = ({ active }) => {
  const { t } = useTranslation()

  return (
    <div className={styles.tabs}>
      <div className={styles.tabScroller}>
        <div className={styles.tabScroller__scrollArea}>
          <div className={styles.tabScroller__scrollContent}>
            {[
              {
                to: "/",
                active: active === "home",
                icon: faHome,
                label: t(`tab_home`),
              },
              {
                to: "/activity",
                active: active === "activity",
                icon: faNewspaper,
                label: t(`tab_activity`),
              },
              {
                to: "https://games.sokontokoro-factory.net/",
                active: active === "game",
                icon: faGamepad,
                label: t(`tab_game`),
              },
              {
                to: "/music",
                active: active === "music",
                icon: faMusic,
                label: t(`tab_music`),
              },
              {
                to: "/communication",
                active: active === "communication",
                icon: faUserFriends,
                label: t(`tab_communication`),
              },
              {
                to: "https://docs.google.com/forms/d/e/1FAIpQLSe5bSPvJ5XQM0IACqZ9NKoHuRUAcC_V1an16JGwHh6HeGd-oQ/viewform",
                active: active === "inquire",
                icon: faEnvelope,
                label: t(`tab_contact`),
              },
            ].map(({ to, active, icon, label }, i) => (
              <TabMenuItem
                key={i}
                to={to}
                active={active}
                icon={icon}
                label={label}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabMenu
