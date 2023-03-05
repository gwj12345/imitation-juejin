<template>
  <div>
    <Header />
    <div class="content_box">
      <div class="container">
          <div
            class="row index mt-1"
            :style="{
              position: 'relative',
              height:'1000px',
            }"
          >
          
            <div class="col-lg-8 col-md-10 col-sm-12 col-xs-12 index-main">
                <Item/>
            </div>
            <div class=" col-md-4 col-lg-3 index-aside">
              <div class="aside-top rounded">
                <SigninTip/>
              </div>
              <div class="aside-banner">
                <Ad/>
              </div>
              <QrcodeDownload/>
              <More/>
            </div>
          </div>
        </div>
      </div>
  </div>
  
</template>

<script>
import Header from "../components/Header.vue";
import SigninTip from "../components/SigninTip.vue";
import Ad from "../components/Ad.vue";
import QrcodeDownload from '@/components/qrcode/QrcodeDownload.vue'
import More from "../components/More.vue";
import Item from "../components/homeitems/MyItem.vue";
export default {
  name: "Home",
  components: { Header, SigninTip, Ad, QrcodeDownload, More,Item },
};
</script>

<style scoped>
@import "../assets/css/main.css";
@import "../assets/css/index.css";
@import "../assets/css/bootstrap.css";
@import "../assets/css/font-awesome-4.7.0/css/font-awesome.min.css";
</style>