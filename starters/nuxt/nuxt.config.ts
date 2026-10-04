//tz-meta {"id":"nuxt-config","title":"Nuxt 3 starter config (Bauhaus Primary)","category":"Starter","file":"starters/nuxt/nuxt.config.ts","tags":["nuxt","config"],"description":"Minimal Nuxt 3 config: global CSS tokens plus Google Fonts head links for the bauhaus-primary DNA.","dnas":["bauhaus-primary"]}
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  app: {
    head: {
      title: 'Gridhouse — Coworking for designers in Rotterdam',
      meta: [
        { name: 'description', content: 'Gridhouse is a coworking space for designers in Rotterdam. Oak desks, daylight, a print room that never runs dry. Desks from €149/month.' },
        { name: 'theme-color', content: '#f4f1ea' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap'
        }
      ]
    }
  }
})
