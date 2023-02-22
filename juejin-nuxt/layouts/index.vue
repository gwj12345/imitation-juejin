<template>
  <div>
      <!-- <Header/> -->
      <Mainnav />
      <nuxt/>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import SigninTip from "../components/signin-tip.vue";
import Ad from "../components/ad.vue";
import QrcodeDownload from '@/components/qrcode/qrcode-download.vue'
import More from "../components/more.vue";
import Mainnav from '@/components/mainnav/main-nav.vue'
export default{
    name: "Home",
    components: {
        Header,SigninTip, Ad, QrcodeDownload, More
    }
}
</script>
