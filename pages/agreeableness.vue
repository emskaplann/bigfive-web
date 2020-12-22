<template>
  <v-card>
    <v-img
      :src="require('@/assets/openness.jpg')"
      height="200px"
      lazy
    >
      <v-card-title
        class="image-title"
        v-html="$t('agreeableness.title')"
      />
    </v-img>
    <v-card-text>
      <p>
        Bu boyut, bireyin kişisel yönelme düzeyini etkilemektedir. Uyumlu insan arkadaşça davranır, birlikte çalışmayı sever, 
        kibardır, hoşgörü sınırı geniştir, güven vericidir ve yumuşak kalplidir. Bu tip yöneticiler astlarını iyi motive eder, 
        onların ihtiyaçlarını gidermeye yönelik çalışırlar ve iyi iletişim kurarlar. Düşük uyumluluğa sahip kişiler ise diğerlerinin 
        maksatlarında şüpheci ve işbirlikçilik yerine rakip olmayı tercih eden kişilerdir . Yumuşak başlılık boyutunda yüksek puan 
        alanlar yumuşak kalpli, iyi huylu, güvenli, yardımsever, bağışlayıcı, saf ve dürüst olarak tanımlandı. Bu boyutta düşük puan 
        alan kişiler kötümser, kaba, güvensiz, işbirliğine kapalı, intikamcı, merhametsiz, sinirli ve çıkarcı olarak tanımlandı. 
        Yumuşak başlılık daha az kişiler arası çatışmaya daha fazla iş ve aile çatışmasını azaltıcı desteğe neden olur. Şu halde, 
        yumuşak başlılıkla çatışmanın da negatif bağıntılı olması beklenebilir Kabul edici bireyler işlerinde daha başarılıdır ve 
        iş arkadaşları veya ailelerinden daha fazla duygusal destek görürler . Dede’ye  göre uyumluluk, diğer insanlarla makbul 
        ölçüde anlaşmak ve memnuniyet verici ve hoşnut edici ilişkiler kurabilme becerisidir. Ülkemizde gerçekleştirilen çalışmalarda 
        yumuşak başlılık boyutu adı altında tanımlanan kişilik özelliklerinin, Türk dilindeki kişilik özelliklerini tanımlayan 
        sıfatlarla karşılaştırdığı zaman bu boyutla oldukça bağlantılı faktörler bulunduğunu görmekteyiz (. Araştırma sonuçları da 
        göstermektedir ki, duygusal zeka, akıl sağlığı, psikolojik iyi olma ve yaşam doyumu ile pozitif ilişki göstermektedir. 
        Bireyin duygularındaki düzensizlik Üniversite Öğrencilerinin Beş Faktör Kişilik Kuramı’na Göre Kişilik Özellikleri Alt 
        Boyutlarının Bazı Değişkenlere Göre İncelenmesi kişilerarası ilişkilerin bozulmasına, kaygı artışına ve ruhsal bozukluklara 
        neden olur ve yaşam doyumunu olumsuz etkilemektedir. İnsanlar duygularını diğer bireylerle paylaştığı, hissettiği ve sosyal 
        ilişkilere girdiği sürece mutlu olur psikolojik doyum sağlar. Kişi benliğini, kişiliğini tanıdıkça ve düşünceleri ile 
        duygularının farkında oldukça, bu doyum artacak ve yaşamın diğer alanlarını da olumlu etkileyecektir.
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiFormatQuoteOpen, mdiFormatQuoteClose } from '@mdi/js'

export default {
  name: 'Agreeableness',
  data: () => ({
    mdiFormatQuoteClose,
    mdiFormatQuoteOpen
  }),
  head () {
    return {
      title: this.$t('agreeableness.seo.title'),
      meta: [
        { hid: 'title', name: 'title', content: this.$t('agreeableness.seo.title') },
        { hid: 'description', name: 'description', content: this.$t('agreeableness.seo.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('seo.keywords') },
        // Open Graph
        { hid: 'og:title', name: 'og:title', content: this.$t('agreeableness.seo.title') },
        { hid: 'og:description', name: 'og:description', content: this.$t('agreeableness.seo.description') },
        { hid: 'twitter:title', name: 'twitter:title', content: this.$t('agreeableness.seo.title') },
        { hid: 'twitter:description', name: 'twitter:description', content: this.$t('agreeableness.seo.description') }
      ]
    }
  },
  metaInfo: {
    title: 'Read more about Agreeableness'
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
