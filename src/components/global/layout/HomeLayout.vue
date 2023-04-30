<template>
  <div class="layout">
    <Header></Header>
    <div class="layout__container">
      <router-view></router-view>
    </div>
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
  width: 100%;
  min-height: 100vh;

  &__container {
    @include crosswise {
      padding-top: 5rem;
    }
  }
}
</style>
