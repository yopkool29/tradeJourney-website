// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  
  // Configuration pour GitHub Pages
  ssr: true,
  
  // Build statique pour GitHub Pages
  nitro: {
    preset: 'static'
  },
  
  app: {
    baseURL: '/', // Changez si vous déployez sur un sous-chemin
    head: {
      title: 'TradeJourney - Journal de Trading Professionnel',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Journal de trading professionnel pour analyser et améliorer vos performances' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  
  content: {
    highlight: {
      theme: 'github-dark'
    },
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3
      }
    }
  }
})
