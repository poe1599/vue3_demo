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
import mockRestaurant from '@/mock/mockRestaurant'
import getRandom from '@/plugins/getRandom'

const restaurantData = reactive({
  title: '一再回訪美食',
  linkText: '查看更多美食',
  afterClickLink: () => {},
  list: [],
  isUsedMock: false,
})

const getRestaurantData = async () => {
  if (restaurantData.isUsedMock) return

  const $skip = getRandom(0, 500)
  const response = await getRestaurant({ params: { $skip, $top: 50 } })
  if (!response) {
    // mock
    restaurantData.list = mockRestaurant
    restaurantData.isUsedMock = true
    filterData()
    return
  }

  restaurantData.list = response
  filterData()
}

const filterData = async () => {
  const displayNum = 4
  restaurantData.list = restaurantData.list.filter(i => i.Picture.PictureUrl1).filter((i, iIdx) => iIdx < displayNum)
  const shouldRefreshData = restaurantData.list.length < displayNum && !restaurantData.isUsedMock
  if (shouldRefreshData) await getRestaurantData()
  else formatData()
}

const formatData = () => {
  restaurantData.list = restaurantData.list.map(i => {
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
})
</script>
<style lang="scss" scoped></style>
