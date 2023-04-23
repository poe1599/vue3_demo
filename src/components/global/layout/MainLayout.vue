<template>
  <div class="layout">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'MainLayout',
}
</script>
<script setup>
import Header from '@/components/misc/Header.vue'
</script>
<style lang="scss" scoped>
.layout {
  height: 6000px;
}
</style>
