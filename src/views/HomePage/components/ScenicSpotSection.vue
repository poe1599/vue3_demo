<template>
  <SectionTemplate2 :title="'熱門打卡景點'" :link-text="'查看更多景點'" :after-click-link="() => {}"></SectionTemplate2>
</template>
<script>
export default {
  name: 'ScenicSpotSection',
}
</script>
<script setup>
import SectionTemplate2 from '@/components/section/SectionTemplate2.vue'
</script>
<style lang="scss" scoped></style>
