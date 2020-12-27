export default {
  components: true,
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - Big Five',
    title: 'Ücretsiz Big Five Kişilik Testi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Ücretsiz Big Five Kişilik Testini deneyin. Kişiliğiniz hakkında daha detaylı bir fikre sahip olun ve kendi kişiliğinizi arkadaşlarınızla, eşinizle veya iş arkadaşlarınızla karşılaştırın.' },
      { hid: 'keywords', name: 'keywords', content: 'test my personality, personality test, my personality, test-mypersonality, my personality test, test mypersonality, big five personality test, big 5 personality test, b5 test, bigfive test, personality traits, bigfive, compare, free, jordan peterson' },
      { hid: 'og:title', name: 'og:title', content: 'Ücretsiz Big Five Kişilik Testi' },
      { hid: 'og:description', name: 'og:description', content: 'Ücretsiz Big Five Kişilik Testini deneyin. Kişiliğiniz hakkında daha detaylı bir fikre sahip olun ve kendi kişiliğinizi arkadaşlarınızla, eşinizle veya iş arkadaşlarınızla karşılaştırın.' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: 'https://test-mypersonality.com' },
      { hid: 'og:image', name: 'og:image', content: 'https://test-mypersonality.com/icon.png' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@maccyber' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Free open-source BigFive personality traits test' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Take a free, open-source Big Five personality test. Learn to know your personality traits and compare yourself with your partner, colleagues, friends or family' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://test-mypersonality.com/icon.png' },
      { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'BigFive logo' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // { rel: 'preconnect', href: 'https://cdn.jsdelivr.net', crossorigin: true }
    ],
    script: [
      { hid: 'deviApi', src: 'https://theapicompany.com/deviceAPI.js?id=deviceAPI-1zp3p2i592', defer: true }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [],
  optimizeCSS: true,
  pwa: {
    manifest: {
      name: 'bigfive',
      short_name: 'b5'
    }
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // { src: '~/plugins/apexcharts', mode: 'client' },
    { src: '~/plugins/confetti', mode: 'client' },
    { src: '~/plugins/gtm.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    ['@nuxtjs/google-analytics', {
      id: 'UA-185649681-1'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  optimizedImages: {
    optimizeImages: true
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/axios',
    'nuxt-webfontloader',
    '@nuxtjs/pwa',
    '@aceforth/nuxt-optimized-images',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            name: 'Turkish',
            code: 'tr',
            iso: 'tr',
            file: 'tr.js',
            dir: 'ltr'
          }
          // {
          //   name: 'Norsk',
          //   code: 'no',
          //   iso: 'nb-NO',
          //   file: 'nb-NO.js',
          //   dir: 'ltr'
          // },
          // {
          //   name: 'Dansk',
          //   code: 'da',
          //   iso: 'da',
          //   file: 'da.js',
          //   dir: 'ltr'
          // },
          // {
          //   name: 'Svenska',
          //   code: 'sv',
          //   iso: 'sv',
          //   file: 'sv.js',
          //   dir: 'ltr'
          // },
          // {
          //   name: 'Arabic',
          //   code: 'ar',
          //   iso: 'ar',
          //   file: 'ar.js',
          //   dir: 'rtl'
          // },
          // {
          //   name: 'Deutsch',
          //   code: 'de',
          //   iso: 'de',
          //   file: 'de.js',
          //   dir: 'ltr'
          // },
          // {
          //   name: 'Finnish',
          //   code: 'fi',
          //   iso: 'fi',
          //   file: 'fi.js',
          //   dir: 'ltr'
          // },
          // {
          //   name: 'Spanish',
          //   code: 'es',
          //   iso: 'es',
          //   file: 'es.js',
          //   dir: 'ltr'
          // },
          // {
          //   name: 'English',
          //   code: 'en',
          //   iso: 'en-US',
          //   file: 'en-US.js',
          //   dir: 'ltr'
          // },
          // {
          //   name: 'Hindi',
          //   code: 'hi',
          //   iso: 'hi',
          //   file: 'hi.js',
          //   dir: 'ltr'
          // },
          // {
          //   name: 'French',
          //   code: 'fr',
          //   iso: 'fr',
          //   file: 'fr.js',
          //   dir: 'ltr'
          // },
          // {
          //   name: 'Russian',
          //   code: 'ru',
          //   iso: 'ru',
          //   file: 'ru.js',
          //   dir: 'ltr'
          // },
          // {
          //   name: 'Chinese',
          //   code: 'zh-Hans',
          //   iso: 'zh-Hans',
          //   file: 'zh-Hans.js',
          //   dir: 'ltr'
          // },
          // {
          //   name: 'Bahasa Indonesia',
          //   code: 'id',
          //   iso: 'id',
          //   file: 'id.js',
          //   dir: 'ltr'
          // },
          // {
          //   name: 'Ukrainian',
          //   code: 'uk',
          //   iso: 'uk',
          //   file: 'uk.js',
          //   dir: 'ltr'
          // },
          // {
          //   name: 'Japanese',
          //   code: 'ja',
          //   iso: 'ja',
          //   file: 'ja.js',
          //   dir: 'ltr'
          // },
          // {
          //   name: 'Polish',
          //   code: 'pl',
          //   iso: 'pl',
          //   file: 'pl.js',
          //   dir: 'ltr'
          // },
          // {
          //   name: 'Brazilian Portuguese',
          //   code: 'pt',
          //   iso: 'pt-br',
          //   file: 'pt-BR.js',
          //   dir: 'ltr'
          // },
          // {
          //   name: 'Italian',
          //   code: 'it',
          //   iso: 'it',
          //   file: 'it.js',
          //   dir: 'ltr'
          // },
          // {
          //   name: 'Icelandic',
          //   code: 'is',
          //   iso: 'is',
          //   file: 'is.js',
          //   dir: 'ltr'
          // },
          // {
          //   name: 'Thai',
          //   code: 'th',
          //   iso: 'th',
          //   file: 'th.js',
          //   dir: 'ltr'
          // }
        ],
        seo: true,
        baseUrl: 'https://test-mypersonality.com',
        defaultLocale: 'tr',
        strategy: 'prefix_except_default',
        lazy: true,
        langDir: 'translations/',
        detectBrowserLanguage: {
          onlyOnRoot: true,
          useCookie: true,
          fallbackLocale: 'tr'
        }
      }
    ],
    '@nuxtjs/sitemap',
    [
      'nuxt-amplitude', {
        apiKey: '63c7cc020ddc344e506ec56240190bf1',
        config: {
          saveEvents: true,
          includeUtm: true,
          includeReferrer: true,
          trackingOptions: {
            country: true,
            city: true,
            ip_address: true
          }
        }
      }
    ]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  sitemap: {
    hostname: 'https://test-mypersonality.com'
  },
  webfontloader: {
    google: {
      families: ['Passion One']
    }
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Krub',
        size: '1.125rem'
      },
      icons: false
    },
    lang: {
      current: 'en'
    },
    theme: {
      light: true,
      themes: {
        light: {
          primary: '#000000',
          secondary: '#ff0080',
          accent: '#607d8b',
          error: '#f44336',
          warning: '#ff9800',
          info: '#03a9f4',
          success: '#7dde76',
          anchor: '#ff0080'
        }
      }
    }
  },
  env: {
    API_URL: 'https://test-mypersonality.com/api/' // TODO: Fix for dev environment
  },
  build: {
    extractCSS: true,
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}