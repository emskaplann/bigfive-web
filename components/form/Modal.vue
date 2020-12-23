<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <!-- <template #activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Click Me
        </v-btn>
      </template> -->

      <v-card>
        <v-card-title class="headline grey lighten-2">
          <b>Yılbaşı Özel Çekilişi!</b>
        </v-card-title>

        <v-card-text>
          <br>
          Yeni yılda herkes kendini daha iyi tanısın, yeni yıl daha pozitif olsun diye #Kendinitanı olarak bol hediyeli bir çekiliş gerçekleştiriyoruz.
          Sadece bağlantıdan sitemize girin BİG5 kişilik testini çözün hem kişilik raporunuzda kendinizi keşfedin hem de 2021’e renk katacak hediyelerimizi kazanma şansı yakalayın.
          <br><br>
          <b>YENİ YIL HEDİYELERİMİZ:</b>
          20 KİŞİYE 200TL DEĞERİNDE AMAZON GİFTCARD
          80 KİŞİYE PSİKOLOJİ KİTAPLARI.
          <br><br>
          <b>ŞARTLAR:</b>
          LİNKE TIKLADIĞIN TWEETİ RETWEET ETMEK,
          KİŞİLİK TESTİNİ TAMAMLAMAK.
          <br><br>
          “KAZANANLAR GENEL KAPSAMDA DUYURULACAK EK OLARAK ÖZELDEN İLETİŞİME GEÇİLECEKTİR”
          <br><br>
          Lütfen şahsi ve aktif olarak kullandığınız Twitter Adresinizi giriniz, kazananlarla verdikleri Twitter Adresi üzerinden iletişime geçilecektir.
          <br><br>
          Kişilik testi sonucunun tutarlı olması için lütfen özveri ile çözünüz.
          <br><br>
          <b>Son Katılım Tarihi:</b> 05/01/2021
        </v-card-text>

        <v-divider />

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Devam et
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: true
    }
  }
}
</script>
