// https://nuxt.com/docs/api/configuration/nuxt-config
import {fa} from "cronstrue/dist/i18n/locales/fa";

export default defineNuxtConfig({
    ssr: false,
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt'
    ],
})