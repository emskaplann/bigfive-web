<template>
  <v-app>
    <Toolbar />

    <v-content v-if="$nuxt.$route && $nuxt.$route.name && $nuxt.$route.name.includes('index')">
      <nuxt />
    </v-content>
    <v-content v-else>
      <v-container class="container">
        <nuxt />
      </v-container>
    </v-content>

    <!-- Snackbar -->
    <v-snackbar
      v-model="snackbar.active"
      :color="snackbar.type === 'error' ? 'error' : 'primary'"
      :bottom="true"
    >
      {{ snackbar.message }}
    </v-snackbar>

    <Footer />
  </v-app>
</template>

<script>
import Toolbar from '../components/Toolbar'
import Footer from '../components/Footer'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    Toolbar,
    Footer
  },
  head: () => ({
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      {
        innerHTML: `{
            "@context": "http://schema.org",
            "@type" : "Organization",
            "name" : "BigFive",
            "url" : "https://test-mypersonality.com",
            "logo": "https://test-mypersonality.com/icon.png"
          }`,
        type: 'application/ld+json'
      }
    ]
  }),
  computed: mapState(['snackbar']),
  created () {
    const { dir } = this.$i18n.locales.find(i => i.code === this.$i18n.locale)
    this.$vuetify.rtl = dir === 'rtl'
  }
}
</script>

<style>
a {
  text-decoration: none;
}

.container {
  max-width: 960px;
}

::selection {
  background:black;
  color:white;
}

.v-slider__thumb-label, .v-stepper__step__step {
  font-weight: 800;
}
</style>

<style scoped>
.container {
  min-height: 80vh;
}
</style>
