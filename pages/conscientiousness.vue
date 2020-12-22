<template>
  <v-card>
    <v-img
      :src="require('@/assets/conscientiousness.jpg')"
      height="200px"
      lazy
    >
      <v-card-title
        class="image-title"
        v-html="$t('conscientiousness.title')"
      />
    </v-img>
    <v-card-text>
      <p>
        Kişiliğin bu boyutu, bir hedefe dönük davranışlardaki planlılık, sabır, motivasyon, organizasyon ve başarı bu faktörle 
        ilişkili kavramlardır. Bu özelliğe sahip kişiler amaçlı, iradeli ve kararlılık gösterirler. Bilinçlilik, başarılı yönelim, 
        düzenli çizgi, etkili, organizasyonel, planlı, sorumlu, mükemmeliyetçilik ve çok çalışkanlığı kapsar. Bu faktörü bazı 
        araştırmacılar, başarı isteği olarak kabul ederken, bazıları ise kendini organize edebilen, dikkatli olma alışkanlığı olan 
        ve öz-disiplin becerisine sahip kişiler olarak görmektedir. Bu boyut ne kadar kontrol ve disiplin sahibi olduğumuzu gösterir. 
        Bu tipler yaşamlarında sorumlu, bağımlı, dikkatli, disiplinli, başarı kazanma güdüsü kuvvetli, azimli kişiliği ifade etmektedirler. 
        Bu özelliklere sahip bireylerin hem otonom hem de hiyerarşik yapı içerisinde her türlü görevde başarı kazanma olasılıkları 
        kuvvetlidir. Düşük sorumluluğa sahip kişiler ise dikkatsiz, dikkati kolay dağılan, güvenilmez ve hedeflerine ulaşmada rahat 
        olan kişilerdir. Kısacası, değişik pek çok kaynaktan elde edilen kanıtlar, kişiliğimizi oluşturan özelliklerin çoğunun beş 
        temel kişilik boyutu üzerinde toplanabileceğine işaret etmektedir. Yapılan araştırma sonuşlarına göre kişilik etmenlerinden 
        özgüven, dışadönüklük, iyimserlik, açıklık, uyumluluk gibi faktörlerin yaşam doyumu üzerinde etkili olduğu bulunmuştur. 
        Kuzgun (1972), içten denetimlilerin, dış çevreye mümkün olduğu kadar az bağımlı, kendine yetebilen, benliğine saygı duyan, 
        kendini gerçekleştirmeye yönelik duygulardan haberi olan, uzlaştırıcı bir görüşe sahip olan kimseler olduklarını ifade etmiştir. Sevi’ye (2009) göre, sorumluluk faktörünün alt boyutları yeterlilik, düzen, görevşinaslık, başarı çabası, öz-disiplin ve tedbirliliktir. Somer  e(2002) göre, bu faktörün hem ilerletici hem de ketleyici yönleri vardır. Bu faktörün ilerletici yönü, başarı ihtiyacı ve çalışma kararlılığında görülürken, ketleyici yönü ahlaki titizlik ve tedbirlilik Kasım Tatlılıoğlu [950] özelliklerinde ortaya çıkmaktadır. Bu faktörü temsil etmek üzere yeterlilik, düzen, titizlik, görevşinaslık, başarı çabası, öz-disiplin ve tedbirlilik alt boyutları önerilmiştir
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiFormatQuoteOpen, mdiFormatQuoteClose } from '@mdi/js'

export default {
  name: 'Conscientiousness',
  data: () => ({
    mdiFormatQuoteClose,
    mdiFormatQuoteOpen
  }),
  head () {
    return {
      title: this.$t('conscientiousness.seo.title'),
      meta: [
        { hid: 'title', name: 'title', content: this.$t('conscientiousness.seo.title') },
        { hid: 'description', name: 'description', content: this.$t('conscientiousness.seo.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('seo.keywords') },
        // Open Graph
        { hid: 'og:title', name: 'og:title', content: this.$t('conscientiousness.seo.title') },
        { hid: 'og:description', name: 'og:description', content: this.$t('conscientiousness.seo.description') },
        { hid: 'twitter:title', name: 'twitter:title', content: this.$t('conscientiousness.seo.title') },
        { hid: 'twitter:description', name: 'twitter:description', content: this.$t('conscientiousness.seo.description') }
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
