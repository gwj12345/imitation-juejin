<template>
    <button id="theme-toggle"  @click="switchs"> 
        <div class="theme">  
            <!-- <img src="@/assets/images/sun.png" alt="theme"/> -->
            <img :src="toggleIcon(icon)" alt="">
        </div> 
    </button>
</template>

<script>
import cut from "@/assets/js/themes.js";
export default {
    name: "Theme",
    data() {
        return {
            cutcheck: false, //主题切换
            imglogo1:["logo.svg"],
            imglogo2:["5.png"],
            icon:["moon.png"],
            icon1:["sun.png"],
            icon2:["moon.png"],
        };
    },
    methods: {
    // 切换主题
        switchs(){
            if(!this.cutcheck){
                cut(!this.cutcheck);
                this.cutcheck=true
                // this.imglogo=['4.png']  //这样仅仅是父组件传值给子组件，
                //如果使用$emit的话可以使子组件传值影响父组件
                this.$emit('changeLogo',this.imglogo2)
                this.icon=this.icon1
            }
            else{
                cut(!this.cutcheck)
                this.cutcheck=false
                this.$emit('changeLogo',this.imglogo1)
                this.icon=this.icon2
            }
            console.log(this.cutcheck,this.imglogo1,this.imglogo2)
        },
        toggleIcon(icon){
            return require("@/assets/images/"+icon);
        },
    },
    // props:[
    //     'imglogo'
    // ]
};
</script>
<style scoped>

    button{
        width:40px;
        height: 60px;
        border:none;
        background-color: var(--buttonColor);

    }
    button .theme{
        position: relative;
        top:-20px
    }
    .homepage button img{
        width:30px;
    }
</style>