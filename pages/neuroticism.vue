<template>
  <v-card>
    <v-img
      :src="require('@/assets/neuroticism.jpg')"
      height="200px"
      lazy
    >
      <v-card-title
        class="image-title"
        v-html="$t('neuroticism.title')"
      />
    </v-img>
    <v-card-text>
      <p>
        Duygusal dengesizlik bir kişinin yaşadığı endişe, kızgınlık, sıkıntı, düşünmeden hareket etme, güvensizlik ve depresyonu 
        ifade eder. Nevrotik eğilim belirtileri olan kişiler, kronik yorgunluk, baş ağrısı, uyuyamama, görme güçlükleri, iştahsızlık vb. 
        gibi çeşitli psiko-somatik belirtilerin birinden ya da birkaçından şikayetçidirler. Bu kişiler duygusal çatışmalarını genellikle 
        fiziksel yollarla ifade etmektedirler. Ayrıca, nevrotik eğilimler, benliğini olduğu gibi kabul edememe, mükemmeliyetçi olma, 
        eleştiriye açık olmama gibi davranışları da içerir. Nevrotik eğilim puanının yüksek olması, bu tür belirtilerin azlığını, düşük 
        olması ise çokluğunu gösterir. Duygusal dengesizlik kişilik boyutu, genellikle endişeli, güvensiz, korumacı, gergin ve kaygılı 
        bir durumu ifade eder. Bu tür karakter özellikleri bireylerin iş ve aile yaşamında daha fazla çatışma yaşamalarına ve dolayısıyla 
        daha fazla stres yaşamalarına neden olabilir .Güleç’e göre, Nevrotik kişilik bozukluğu, gerçeği değerlendirme yeteneğinin bozulmadığı, ciddi bir 
        antisosyal davranış bozukluğunun olmadığı, daha ziyade psiko-sosyal stres faktörleriyle ilişkili olarak ortaya çıkan ruhsal bozukluklardır. Bu boyut, sinirliliği duygusal 
        tutarlılığa yansıtmaktadır. Kişinin sinirli olup olmaması, kendine güven derecesi, kuruntulu olması, mahcup olması ve endişeli olması gibi özellikler bu boyutun kapsamındadır. Ayrıca korku, 
        üzüntü, öfke ve suçluluk gibi negatif duygulara genel bir eğilimi ve psikolojik sıkıntılara karşı duyarlılığı olan kişiler 
        bu boyut içinde yer almaktadır. Düşük sinirliliğe veya yüksek duygusal tutarlılığa sahip kişiler sakin, kendinden emin ve 
        genellikle kontrollüdür. Buradan hareketle, nevrotiklik düzeyi yüksek insanlar, düşük olan insanlara göre günlük olaylar 
        karşısında daha sık stres yaşadıklarını söyleyebiliriz. Adler’e (1983) göre, nörotik süreç, toplumsal uyumdan yoksun, 
        sağduyuya ters bilişsel sürecin en fazla ağırlık taşıdığı bir olguyu temsil eder. Nevrozun ise sürekli etkinlik gösteren 
        bir aşağılık duygusu olduğunu kabul eder. Birçok araştırmacı, depresyon, anksiyete ve stresin genel duygusal problemler 
        olduğunu bununla birlikte bu problemlerin çeşitli yollarla açığa çıktığını, bazı durumlarda geri çekilme ve izole olma, 
        bazı durumlarda ise aşırı hareketlilik ve gerginlik semptomlarının görüldüğünü, bu üç kavramın birbirinden farklı olmalarına 
        rağmen, aralarında orta düzeyde bir ilişki olduğunu ortaya koymuşlardır. Nevrotik belirtileri olan kişiler, kronik yorgunluk, 
        baş ağrısı, uyuyamama, görme güçlükleri, istahsızlık vb. gibi çesitli psikosomatik belirtilerin birinden ya da birkaçından 
        sikâyetçi olabilirler. Nevrotik kişiler, duygusal çatışmalarını genellikle fiziksel yollardan ifade etmektedirler.
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiFormatQuoteOpen, mdiFormatQuoteClose } from '@mdi/js'

export default {
  name: 'Neuroticism',
  data: () => ({
    mdiFormatQuoteClose,
    mdiFormatQuoteOpen
  }),
  head () {
    return {
      title: this.$t('neuroticism.seo.title'),
      meta: [
        { hid: 'title', name: 'title', content: this.$t('neuroticism.seo.title') },
        { hid: 'description', name: 'description', content: this.$t('neuroticism.seo.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('seo.keywords') },
        // Open Graph
        { hid: 'og:title', name: 'og:title', content: this.$t('neuroticism.seo.title') },
        { hid: 'og:description', name: 'og:description', content: this.$t('neuroticism.seo.description') },
        { hid: 'twitter:title', name: 'twitter:title', content: this.$t('neuroticism.seo.title') },
        { hid: 'twitter:description', name: 'twitter:description', content: this.$t('neuroticism.seo.description') }
      ]
    }
  }
}
</script>

<style>
.image-title {
  font-family: 'Passion One', cursive;
  font-size: 3rem;
  text-transform: uppercase;
}
</style>
