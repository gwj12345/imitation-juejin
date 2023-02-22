<template>
    <div>
          <ul class="nav-list header-nav">
            <li v-for="item in Hpnames" :key="item.id"><Homepageitem  :name="item.name"/></li>
            <li v-for="item in Itemnames" :key="item.id"><Navitems  :name="item.name"/></li>
            <li v-for="item in Nbdnames" :key="item.id"><Noborder  :name="item.name"/></li>
            <Clearborder/>
        </ul>
    </div>
</template>

<script>
import Homepageitem from "./homepage-item.vue"
import Navitems from "./nav-items/nav-items.vue"
import Clearborder from "./clear-border.vue"
export default {
  name: "Mainnav",
  components: { Homepageitem, Navitems,Clearborder },
  data(){
    return{
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

};
</script>
<style scoped>
@import "../../assets/css/main.css";
@import "../../assets/css/index.css";
@import "../../assets/css/font-awesome-4.7.0/css/font-awesome.min.css";
</style>