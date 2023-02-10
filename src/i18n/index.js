import {createI18n} from "vue-i18n"
import pluralRules from "./rules/pluralization"
import numberFormats from "./rules/numbers"
import dateTimes from "./rules/dateTime"
import tr from "../i18n/locales/tr.json"
import en from "../i18n/locales/en.json"

export default createI18n({
    locale: localStorage.getItem("lang"),
    fallbackLocale: import.meta.env.VITE_DEFAULT_FALLBACK_LOCALE,
    legacy: false,
    globalInjection: true,
    messages: {
        en: en,
        tr: tr
    },
    pluralRules,
    numberFormats,
    dateTimes
})