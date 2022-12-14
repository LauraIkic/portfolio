import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['~/assets/scss/tailwind.css'],
    assets:  ['~/assets/'],
    build: {
        transpile: ['@headlessui/vue'],
        postcss: {
            postcssOptions: require('./postcss.config.js'),
        },
    }
})