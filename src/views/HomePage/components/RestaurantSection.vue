<template>
  <SectionTemplate2 :data="restaurantData"></SectionTemplate2>
</template>
<script>
export default {
  name: 'RestaurantSection',
}
</script>
<script setup>
import { onMounted, reactive } from 'vue'
import SectionTemplate2 from '@/components/section/SectionTemplate2.vue'

const restaurantData = reactive({
  title: '一再回訪美食',
  linkText: '查看更多美食',
  afterClickLink: () => {},
})

onMounted(async () => {})
</script>
<style lang="scss" scoped></style>
