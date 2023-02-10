import i18n from "@/i18n";

const Trans = {
    get supportedLocales () {
        return import.meta.env.VITE_SUPPORTED_LOCALES.split(",")
    },

    set currentLocale(newLocale) {
        i18n.global.locale.value = newLocale
    },

    isLocaleSupported(locale){
        return Trans.supportedLocales.includes(locale)
    },

    getUserLocale(){
        const locale = window.navigator.language ||
                       window.navigator.userLanguage ||
                       Trans.defaultLocale
        return {
            locale: locale,
            localeNoRegion: locale.split('-')[0]
        }
    },

    async switchLanguage(newLocale){
        Trans.currentLocale = newLocale
        document.querySelectorAll("html").setAttribute("lang", newLocale)
        localStorage.setItem("user-locale", newLocale)
    }
}

export default Trans