<template>
  <v-container>
    <div v-if="results">
      <div v-if="notFound">
        <v-alert
          outlined
          color="secondary"
        >
          <span
            class="secondary--text headline"
            :class="{'title': $vuetify.breakpoint.xs}"
            @click="$router.go(-1)"
          >Sonucunuz bulunamadı. Lütfen farklı bir ID veya Link deneyin. Geri dönmek için yazıya tıklayın.</span>
        </v-alert>
      </div>
      <div v-else>
        <v-row>
          <v-col>
            <span class="d-print-none">
              <!-- <v-select
                v-model="metadata.language"
                :items="metadata.availableLanguages"
                label="Change language"
                @input="changeLanguage"
              /> -->
            </span>
          </v-col>
          <v-col>
            <p
              v-if="metadata.timestamp"
              class="text-right grey--text"
            >
              {{ new Date(metadata.timestamp).toLocaleString('tr-TR') }}
            </p>
          </v-col>
        </v-row>

        <div class="text-center mt-10">
          <b>{{ $t('results.important') }}</b> {{ $t('results.saveResults') }} {{ $t('results.toOthers') }} <nuxt-link :to="localePath('compare')">
            {{ $t('results.compare') }}.
          </nuxt-link>
          Ek olarak bize verdiğiniz twitter adresine bu sonuç sayfasının linkini 20-30 dakika içinde göndereceğiz. <u>Mesajı görmek için Twitter Hesabınızdan mesaj isteklerine bakmanız gerekiyor.</u>
          <br><br>
          Çekilişe katılmış sayılmak için lütfen linki bulduğunuz <a
            href="https://twitter.com/kendinitani2020/status/1341775816791879686"
            rel="noopener"
            target="_blank"
          >tweeti</a> retweetlemeyi unutmayın.
          <br><br>
          <v-alert
            outlined
            color="secondary"
          >
            <span
              class="secondary--text headline"
              :class="{'title': $vuetify.breakpoint.xs}"
            >{{ $route.params.id }}</span>
          </v-alert>
          <ShareLinks :id="'result/' + $route.params.id" />
        </div>

        <div class="display-1 mt-6">
          {{ $t('results.theBigFive') }}
        </div>
        <BarChart
          :data="results"
          :max="Number(120)"
        />
        <div
          v-for="domain in results"
          :key="domain.id"
        >
          <Domain :domain="domain" />
        </div>
        <br>
        <span class="headline">{{ $t('shareLinks.shareResults') }}</span>
        <ShareLinks :id="'result/' + $route.params.id" />
      </div>
    </div>
    <Error v-else />
  </v-container>
</template>

<script>
export default {
  name: 'Result',
  async asyncData ({ params, store, $axios, query }) {
    try {
      const lang = query.lang ? `/${query.lang}` : ''
      const url = process.env.API_URL + 'result/' + params.id + lang

      const data = await $axios.$get(url)

      return {
        results: data.results,
        notFound: data.type === 'notFound',
        metadata: {
          timestamp: data.timestamp,
          language: query.lang || data.language || 'en',
          availableLanguages: data.availableLanguages
        }
      }
    } catch (error) {
      console.log(error)
      store.commit('SET_SNACKBAR', { msg: error.message, type: 'error' })
    }
  },
  data: () => ({
    results: false,
    notFound: false
  }),
  head () {
    return {
      title: this.$t('results.seo.title'),
      meta: [
        { hid: 'title', name: 'title', content: this.$t('results.seo.title') },
        { hid: 'description', name: 'description', content: this.$t('results.seo.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('seo.keywords') },
        // Open Graph
        { hid: 'og:title', name: 'og:title', content: this.$t('results.seo.title') },
        { hid: 'og:description', name: 'og:description', content: this.$t('results.seo.description') },
        { hid: 'twitter:title', name: 'twitter:title', content: this.$t('results.seo.title') },
        { hid: 'twitter:description', name: 'twitter:description', content: this.$t('results.seo.description') }
      ]
    }
  },
  mounted () {
    this.$amplitude.getInstance().logEvent('b5.test', { part: 'result' })
  },
  methods: {
    changeLanguage (lang) {
      this.$router.replace(
        { pathname: '/result', params: { id: this.$route.params.id }, query: { lang } },
        () => {
          this.$router.go(0)
        }
      )
    }
  }
}
</script>
