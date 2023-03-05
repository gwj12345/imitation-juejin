<template>
  <div>
      <Mainnav/>
      <nuxt/>
  </div>
</template>
<script>

import Mainnav from '@/components/mainnav/MainNav.vue'
export default{
    name: "Home",
    components: {
        Mainnav
    }
}
</script>