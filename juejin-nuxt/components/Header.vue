<template>
  <header>
    <Mainnav/>
    <div class="border_top">
        <Navlist/>
    </div>
  </header>
</template>

<script>
import Mainnav from "./mainnav/main-nav.vue";
import Navlist from "./navlist/nav-list.vue";
import Updateicon from "./mainnav/update-icon.vue";
export default {
  name: "Header",
  components: {Mainnav,Navlist,Updateicon},
};
</script>

<style scoped>
@import "../assets/css/main.css";
@import "../assets/css/index.css";
@import "../assets/css/font-awesome-4.7.0/css/font-awesome.min.css";
</style>