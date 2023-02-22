<template>
  <div class="sidebar-block app-download-sidebar-block sidebar-block shadow">
    <!---->
    <div class="block-body">
      <a href="https://juejin.cn/app" target="_blank" class=""
        ><div class="app-link">
          <img
            src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png"
            class="qr-img"
          />
          <div class="content-box">
            <div class="headline">下载稀土掘金APP</div>
            <div class="desc">一个帮助开发者成长的社区</div>
          </div>
        </div></a
      >
    </div>
  </div>
</template>
<style>
.sidebar-block {
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  margin-bottom: 1.3rem;
  font-size: 1.16rem;
  line-height: 1.29;
  color: #333;
  position: relative;
  margin-bottom: 1.5rem;
  border-radius: 2px;
}
.sidebar-block ::after {
    display: table;
    content: '';
    clear: both;
  }
.sidebar-block a{
    text-decoration: none;
  }
.app-link {
  display: flex;
  align-items: center;
  padding: 1rem;
}
.qr-img {
  margin-right: 16px;
  width: 4.167rem;
  height: 4.167rem;
}
.headline {
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #1d2129;
}
.desc {
  margin-top: 0.5rem;
  font-size: 12px;
  line-height: 20px;
  color: #86909c;
}
</style>
