<template>
    <div class="container gd" ref="nav">
        <ul class="nav-list clearfix">
          <li v-for="item in Tpnames" :key="item.id"><Textprimary  :name="item.name"/></li>
          <li v-for="item in Ordnames" :key="item.id"><Ordinary  :name="item.name"/></li>
          <li v-for="item in Widennames" :key="item.id"><Widen :name="item.name"/></li>
          <li v-for="item in Rightitem" :key="item.id"><Rightitem :name="item.name"/></li>
          <!-- <li v-for="item in names" :key="item.id"><Ordinary {{item.name}} /></li> 这里不能用插值语法绑定属性-->
        </ul>
      </div>
</template>
<script>
import Textprimary from "./text-primary.vue"
import Ordinary from "./ordinary.vue"
import Widen from "./widen.vue"
import Rightitem from "./right-item.vue"

export default {
  name: "Navlist",
  components: { Textprimary,Ordinary,Widen ,Rightitem },
  data(){
    return{
        Tpnames:[
          {
            id:1,
            name:"综合"
          },
        ],
        Ordnames:[
          {
            id:1,
            name:"前端"
          },
          {
            id:2,
            name:"后端"
          },
          {
            id:3,
            name:"ios"
          },
          {
            id:4,
            name:"阅读"
          },
          
        ],
        Widennames:[
          {
            id:1,
            name:"Android"
          },
          {
            id:2,
            name:"人工智能"
          },
          {
            id:3,
            name:"开发工具"
          },
          {
            id:4,
            name:"代码人生"
          },
          
        ],
        Rightitem:[
          {
            id:1,
            name:"标签管理"
          },
        ],
    }
  }
};
</script>
<style scoped>
@import "../../assets/css/main.css";
@import "../../assets/css/index.css";
@import "../../assets/css/font-awesome-4.7.0/css/font-awesome.min.css";
</style>