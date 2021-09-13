import React from "react"
import i18n from "i18next"
import { I18nextProvider, initReactI18next } from "react-i18next"

import ja from "./messages/ja.json"
import en from "./messages/en.json"

i18n.use(initReactI18next).init({
  resources: {
    ja: { translation: ja },
    en: { translation: en }
  }
})

/**
 * https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapRootElement
 */
export const wrapRootElement = ({ element }, pluginOptions) => {
  return <I18nextProvider i18n={i18n}>{element}</I18nextProvider>
}

/**
 * https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapPageElement
 */
export const wrapPageElement = ({ element, props }) => {
  const language = props.pageContext.i18n?.language
  i18n.changeLanguage(language)
  return element
}
