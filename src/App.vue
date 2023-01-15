<template>
  <component :is="layout"></component>
</template>
<script>
export default {
  name: 'App',
}
</script>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

/**
 * 共用工具
 */
const route = useRoute()

/**
 * dynamic layout
 */
const layout = computed(() => route.meta.layout)
</script>
<style lang="css" src="@/css/normalize.css"></style>
<style lang="scss">
h1 {
  font-size: 3.625rem; // 58px
}

h2 {
  font-size: 2.063rem; // 33px
}

h3 {
  font-size: 1.5rem; // 24px
}

#app {
  font-family: 'Noto Sans TC', serif, monospace;
}

* {
  box-sizing: border-box;
}
</style>
