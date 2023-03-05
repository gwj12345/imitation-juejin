<template>
  <div class="home">
    <img alt="Vue logo" src="../static/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/nuxt/HelloWorld.vue'
import api from '../api/index'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data(){
    return {};
  },
  methods: {
    async dosome(){
      var data = await api.getTopbar();
      console.log(data)
    }
  },
  mounted() {
    this.dosome();
  },
}


</script>
