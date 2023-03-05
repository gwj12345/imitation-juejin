<template>
  <header>
    <Mainnav/>
    <div class="border_top">
        <Navlist/>
    </div>
  </header>
</template>

<script>
import Mainnav from "./mainnav/MainNav.vue";
import Navlist from "./navlist/NavList.vue";
import Updateicon from "./mainnav/UpdateIcon.vue";
export default {
  name: "Header",
  components: {Mainnav,Navlist,Updateicon},
};
</script>

<style scoped>
@import "../assets/css/main.css";
@import "../assets/css/index.css";
@import "../assets/css/bootstrap.css";
@import "../assets/css/font-awesome-4.7.0/css/font-awesome.min.css";

</style>