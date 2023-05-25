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
import { getRestaurant } from '@/api/request/tourism'
import SectionTemplate2 from '@/components/section/SectionTemplate2.vue'
import getRandom from '@/plugins/getRandom'
import mockData from '@/views/HomePage/components/mockRestaurant'

const restaurantData = reactive({
  title: '一再回訪美食',
  linkText: '查看更多美食',
  afterClickLink: () => {},
  list: [],
})

const getRestaurantData = async () => {
  const $skip = getRandom(0, 500)
  const response = await getRestaurant({ params: { $skip, $top: 20 } })
  if (!response) {
    // mock
    restaurantData.list = mockData
    return
  }

  restaurantData.list = response
}

const formatData = () => {
  restaurantData.list = restaurantData.list
    .filter(i => i.Picture.PictureUrl1)
    .filter((i, iIdx) => iIdx < 4)
    .map(i => {
      return {
        key: i.RestaurantID,
        img: i.Picture.PictureUrl1,
        alt: i.Picture.PictureDescription1,
        title: i.RestaurantName,
        description: i.Description,
        address: i.Address,
      }
    })
}

onMounted(async () => {
  await getRestaurantData()
  formatData()
})
</script>
<style lang="scss" scoped></style>
