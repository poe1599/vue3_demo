<template>
  <SectionTemplate2 :data="scenicSpotData"></SectionTemplate2>
</template>
<script>
export default {
  name: 'ScenicSpotSection',
}
</script>
<script setup>
import { onMounted, reactive } from 'vue'
import SectionTemplate2 from '@/components/section/SectionTemplate2.vue'

const scenicSpotData = reactive({
  title: '熱門打卡景點',
  linkText: '查看更多景點',
  afterClickLink: () => {},
})

onMounted(async () => {})
</script>
<style lang="scss" scoped></style>
