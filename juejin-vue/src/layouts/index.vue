<template>
  <div>
    <header>
      <Mainnav />
    </header>
    <main>
      <slot></slot>
    </main>
    <footer></footer>
  </div>
</template>
<script setup>
import Mainnav from '@/components/mainnav/main-nav.vue'
</script>

<style></style>