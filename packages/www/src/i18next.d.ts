import "react-i18next"
import ja from "../messages/ja.json"
import en from "../messages/en.json"

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation"
    resources: {
      ja: typeof ja
      en: typeof en
    }
  }
}
