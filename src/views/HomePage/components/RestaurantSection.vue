<template>
  <SectionTemplate2 :title="'一再回訪美食'" :link-text="'查看更多美食'" :after-click-link="() => {}"></SectionTemplate2>
</template>
<script>
export default {
  name: 'RestaurantSection',
}
</script>
<script setup>
import SectionTemplate2 from '@/components/section/SectionTemplate2.vue'
</script>
<style lang="scss" scoped></style>
