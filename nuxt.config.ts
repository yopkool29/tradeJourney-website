export default defineNuxtConfig({
  extends: ['docus'],
  modules: ['@nuxtjs/i18n', 'nuxt-studio'],
  i18n: {
    defaultLocale: 'en',
    locales: [{
      code: 'en',
      name: 'English',
    }, {
      code: 'fr',
      name: 'Français',
    }],
  },
  studio: {
    // Studio admin route (default: '/_studio')
    route: '/_studio',
  }

})