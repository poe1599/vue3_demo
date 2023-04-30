<template>
  <SectionTemplate1 :title="'近期活動'" :link-text="'查看更多活動'" :after-click-link="() => {}"></SectionTemplate1>
</template>
<script>
export default {
  name: 'ActivitySection',
}
</script>
<script setup>
import SectionTemplate1 from '@/components/section/SectionTemplate1.vue'
</script>
<style lang="scss" scoped></style>
