<template>
  <div class="article">
    <h1>这里是文章</h1>
  </div>
</template>
<script>
import api from "../api/index";
export default {
  data(){
    return {};
  },
  methods: {
    dosome(){
      api.getTopbar();
      api.getAllPaper();
    }
  },
  mounted() {
    this.dosome();
  },
}

</script>

