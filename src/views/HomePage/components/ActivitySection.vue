<template>
  <SectionTemplate1 :data="activityData"></SectionTemplate1>
</template>
<script>
export default {
  name: 'ActivitySection',
}
</script>
<script setup>
import { onMounted, reactive } from 'vue'
import SectionTemplate1 from '@/components/section/SectionTemplate1.vue'

const activityData = reactive({
  title: '近期活動',
  linkText: '查看更多活動',
  afterClickLink: () => {},
})

onMounted(async () => {})
</script>
<style lang="scss" scoped></style>
