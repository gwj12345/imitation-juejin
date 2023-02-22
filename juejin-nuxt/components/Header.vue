<template>
  <header>
    <div>
    <div class="w">
      <div class="row">
        <a href="/" class="logo col-sm-2 col-md-2">
          <img
            src="../assets/images/logo.svg"
            alt="稀土掘金"
            class="img-fluid"
          />
        </a>
        <div class="nav col-sm-5 col-md-5">
          <Mainnav/>
        </div>
        <div class="col-sm-4 col-md-4 nav-input input-group ">
            <input class="mt-4 search" type="text" placeholder="搜索" />
            <span class="input-group-text mt-4 "
            ><i class="fa fa-search fa-fw"></i
            ></span>
            <button class="btn">创作者中心</button>
            <Updateicon/>
            <div class="btn">
             <i class="fa fa-caret-down" aria-hidden="true"></i>
            </div>
        </div> 
      </div>
    </div>
    <!-- 头像通知 -->
    <div class="homepage">
      <span
        ><a href="https://juejin.cn/notification"
          ><i class="fa fa-bell" aria-hidden="true"></i></a
      ></span>
      <span
        ><a href="https://juejin.cn/user/3602460700059213"
          ><img
            src="https://pic.imgdb.cn/item/63eb263ef144a01007104f0c.png"
            alt="" /></a
      ></span>
    </div>
</div>
    <div class="border_top">
        <Navlist/>
    </div>
  </header>
</template>

<script>
import Mainnav from "./mainnav/main-nav.vue";
import Navlist from "./navlist/nav-list.vue";
import Updateicon from "./update-icon.vue";
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