<template>
  <div>
    <Header />
    <div class="boxx">

    </div>
    <div class="content_box">
        <div class="container">
          <div class="row index mt-1"
            :style="{position: 'relative',height:'1000px',}">
            <div class="col-lg-8 col-md-10 col-sm-12 col-xs-12 index-main"  id="left">
                article
            </div>
            <div class="col-md-4 col-lg-3 index-aside" id="right">
              <!-- <div class="aside-top rounded"> -->
                <SigninTip/>
              <!-- </div> -->
              <!-- <div class="aside-banner"> -->
                <Ad/>
              <!-- </div> -->
              <QrcodeDownload/>
            </div>
            <More/>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import SigninTip from "../components/signin-tip.vue";
import Ad from "../components/ad.vue";
import QrcodeDownload from '@/components/qrcode/qrcode-download.vue'
import More from "../components/more.vue";
export default {
  name: "Home",
  components: { Header, SigninTip, Ad, QrcodeDownload, More },
};
</script>

<style scoped>
@import "../assets/css/main.css";
@import "../assets/css/index.css";
@import "../assets/css/font-awesome-4.7.0/css/font-awesome.min.css";

.boxx{
  height: 150px;
}

#aside{
  width: 500px;
}

.content_box{
  display: flex;
}

#left {
  float: left;
  width: 700px;
  height: 1000px;
  background-color: lightblue;
}
#right {
  overflow: hidden;
  height: 1000px;
  background-color: lightgreen;
}


</style>

