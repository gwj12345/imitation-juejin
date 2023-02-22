<template>
    <div>
    <div class="w">
      <div class="row">
        <a href="/" class="logo col-sm-2 col-md-2">
          <img
            src="../../assets/images/logo.svg"
            alt="稀土掘金"
            class="img-fluid"
          />
        </a>
        <div class="nav col-sm-5 col-md-5">
           <div>
        <ul class="nav-list header-nav">
            <!-- <li v-for="item in Hpnames" :key="item.id"><Homepageitem  :name="item.name"/></li> -->
            <!-- <li v-for="item in Itemnames" :key="item.id"><Navitems  :name="item.name"/></li> -->
            <li v-for="item in topbar" :key="item.id">{{item}}</li>
            <!-- <li v-for="item in Nbdnames" :key="item.id"><Noborder  :name="item.name"/></li> -->
            <Clearborder/>
        </ul>
        <!-- <span>{{topbar}}</span> -->
    </div>
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
</template>

<script>
import Homepageitem from "./homepage-item.vue"
import Navitems from "./nav-items/nav-items.vue"
import Clearborder from "./clear-border.vue"

import api from "../../api/index";
export default {
  name: "Mainnav",
  components: { Homepageitem, Navitems,Clearborder },
  data(){
    var topbar = window.localStorage.getItem("topbar");
    return{
        topbar : topbar,
        Hpnames:[
        {
            id:1,
            name:"首页"
          },
        ],
        Itemnames:[
        {
            id:1,
            name:"沸点"
          },
        {
            id:2,
            name:"课程"
          },
          {
            id:3,
            name:"直播"
          },
          {
            id:4,
            name:"活动"
          },
          {
            id:5,
            name:"竞赛"
          },
          {
            id:6,
            name:"商城"
          },
          {
            id:7,
            name:"App"
          },
          {
            id:8,
            name:"插件"
          },
        ],
    
    }
  },
  methods:{
    async gettopbar(){ //promise 类型需要用async和await搭配接收
        let data = await api.getTopbar();
        console.log(data)
        let arr = []
        for( var i in data){
          // let zzz = {id:data[i]['id'], name:data[i]['attributes']['name'] }
          // zzz["id"] = data[i]['id']
          // arr.push(zzz);
          arr.push(data[i]['attributes']['name'])
        }
        console.log(arr)
        localStorage.setItem("topbar", arr);
        // let pic = api.link+ads['0']['attributes']['pics']['data']['attributes']['url']
        // console.log(pic)
        // localStorage.setItem("picurl", pic);
        // return pic;
    }
  },
  mounted () {  
    this.gettopbar() 
  } 
};
</script>
<style scoped>
@import "../../assets/css/main.css";
@import "../../assets/css/index.css";
@import "../../assets/css/font-awesome-4.7.0/css/font-awesome.min.css";
</style>