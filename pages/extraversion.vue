<template>
  <v-card>
    <v-img
      :src="require('@/assets/extraversion.jpg')"
      height="200px"
      lazy
    >
      <v-card-title
        class="image-title"
        v-html="$t('extraversion.title')"
      />
    </v-img>
    <v-card-text>
      <p>
        Bu boyut, kişilerin ne kadar sosyal, aktif, kararlı, konuşkan ve girişgen olduğunu, ayrıca insanları ve büyük grupları ne 
        kadar sevdiklerini göstermektedir. Fazla dışa dönük tipler genellikle mutlu, enerji dolu, sempatik ve sevimli kişilerdir. 
        Düşük dışa dönük tipler ise, genellikle bu özellikleri göstermezler ama asosyal kişiler de değildirler. Bir grup 
        araştırmacının gözlemlediğine göre, “içedönükler soğuk değil çekingen, izleyici değil bağımsız, uyuşuk değil ağır adımlı 
        insanlardır”. Dışa dönük kişiler atılgan, aktif, konuşkan, şen şakrak, iyimser ve enerjiktirler; eğlence ve hareketten 
        hoşlanırlar. Dışadönüklerin pozitif ve enerjik özellikleri daha çok çatışma ve kolaylıklarla ilgilidir. Daha yüksek 
        enerji potansiyeli sayesinde, dışadönükler verilen zamanda daha fazla tasarı üretebilir ve içedönüklere göre daha az 
        yorgunluk hissi duyabilirler. Araştırmacılara göre, dışadönükler daha fazla pozitif etkiye, daha fazla pozitif olay 
        beklentisine ve daha güçlü tepkiye ve içedönüklerden daha fazla enerjiye sahiptirler Olumlu duygularla dışadönüklük 
        arasındaki ilişkiyi doğrulayan araştırmalar Beş Temel Kişilik faktörünün kapsamını netleştirmektedir. Neşeli, istekli, 
        arkadaşça gibi enerjik olumlu duyguların ağırlıklı olarak dışadönüklük ve ikincil olarak da yumuşak Üniversite Öğrencilerinin 
        Beş Faktör Kişilik Kuramı’na Göre Kişilik Özellikleri Alt Boyutlarının Bazı Değişkenlere Göre İncelenmesi 
        başlılık/uzlaşılabilirlik faktörlerinden yük alırken, cömert ve sıcak gibi daha ılımlı, olumlu duyguların, ağırlıklı 
        olarak yumuşak başlılıktan ve ikincil olarak dışadönüklükten yük aldıklarını belirtmektedirler. Eysenck’e göre, dışadönük 
        bireyler, sosyal, çeşitli gruplara ve eğlence partilerine katılmayı seven, çok sayıda arkadaşa sahip olan, 
        kendi başlarına kalmayı, okumayı ve yalnız ders çalışmayı sevmeyen kişilerdir. Heyecan ve coşkuyu tercih eden, tehlikeli 
        durumlara atılmaktan çekinmeyen, ani karar verip atak davranabilen, şaka yapmaktan ve konuşmaktan hoşlanan kimselerdir. 
        Kolay iletişim kurarlar, kolay arkadaş edinirler, geçimli, iyimser, gülmeyi güldürmeyi seven insanlardır. Genellikle 
        değişiklikten hoşlanırlar, kaygısız, kayıtsız ve sıkıntısızdırlar fakat kolay sinirlenip kendini kaybedip, duygularını 
        kontrol etmede ve kendilerini engellemede her zaman başarılı değildirler. İçedönük kişiliğe sahip olan bireyler ise, daha 
        çok kendi başlarına kalmayı tercih eden, çekingen, mahcup, sessiz, ciddi, dış gerçeklikten çok iç gerçekliğe yönelimli, 
        içe kapanık iç gözlem yaparak kendi kendilerini inceleyen, insanlardan çok kitaplardan hoşlanan, çok yakın ve özel 
        arkadaşları dışında diğer insanlara karşı mesafeli davranan, ihtiyatlı kimselerdir. Bu insanlar ilerisi için plan yapmayı, 
        konuşmadan önce düşünmeyi, harekete geçmeden önce enine boyuna düşünmeyi, heyecanla yapılan ani hareketlerden kaçınmayı 
        tercih ederler. Heyecanı ve coşkuyu sevmezler. Günlük yaşamın olağan sorunlarını çok ciddiye alır ve düzenli yaşamdan 
        hoşlanırlar.
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiFormatQuoteOpen, mdiFormatQuoteClose } from '@mdi/js'

export default {
  name: 'Extraversion',
  data: () => ({
    mdiFormatQuoteClose,
    mdiFormatQuoteOpen
  }),
  head () {
    return {
      title: this.$t('extraversion.seo.title'),
      meta: [
        { hid: 'title', name: 'title', content: this.$t('extraversion.seo.title') },
        { hid: 'description', name: 'description', content: this.$t('extraversion.seo.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('seo.keywords') },
        // Open Graph
        { hid: 'og:title', name: 'og:title', content: this.$t('extraversion.seo.title') },
        { hid: 'og:description', name: 'og:description', content: this.$t('extraversion.seo.description') },
        { hid: 'twitter:title', name: 'twitter:title', content: this.$t('extraversion.seo.title') },
        { hid: 'twitter:description', name: 'twitter:description', content: this.$t('extraversion.seo.description') }
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
