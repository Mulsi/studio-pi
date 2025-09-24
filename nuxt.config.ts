import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['@nuxtjs/google-fonts', '@nuxtjs/sitemap'],
  
  googleFonts: {
    families: {
      Poppins: true
    }
  },
  // SEO Configuration
  app: {
    head: {
      title: 'Studio PI',
      titleTemplate: '%s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Studio PI is a multidisciplinary architecture and design practice based in Zagreb, founded by Iva Pauzar. We create human-centric spaces that enhance wellbeing through contemporary design and contextual awareness.' 
        },
        { name: 'keywords', content: 'architecture, design, Zagreb, Croatia, Studio PI, Iva Pauzar, spatial design, wellbeing, contemporary architecture' },
        { name: 'author', content: 'Studio PI' },
        { name: 'robots', content: 'index, follow' },
        { name: 'language', content: 'en' },
        { name: 'revisit-after', content: '7 days' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Studio PI' },
        { property: 'og:title', content: 'Studio PI - Architecture & Design Practice' },
        { property: 'og:description', content: 'Multidisciplinary architecture and design practice based in Zagreb, creating human-centric spaces that enhance wellbeing.' },
        { property: 'og:url', content: 'https://studiopi.eu' },
        { property: 'og:image', content: 'https://studiopi.eu/img/hero.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'en_US' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@studiopi.eu' },
        { name: 'twitter:title', content: 'Studio PI - Architecture & Design Practice' },
        { name: 'twitter:description', content: 'Multidisciplinary architecture and design practice based in Zagreb, creating human-centric spaces that enhance wellbeing.' },
        { name: 'twitter:image', content: 'https://studiopi.eu/img/hero.png' },
        
        // Additional SEO
        { name: 'theme-color', content: '#ffffff' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'msapplication-config', content: '/browserconfig.xml' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://studiopi.eu' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }
      ]
    }
  }
})