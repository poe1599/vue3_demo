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
import { getScenicSpot } from '@/api/request/tourism'
import SectionTemplate2 from '@/components/section/SectionTemplate2.vue'
import mockActivity from '@/mock/mockActivity'
import getRandom from '@/plugins/getRandom'

const scenicSpotData = reactive({
  title: '熱門打卡景點',
  linkText: '查看更多景點',
  afterClickLink: () => {},
  list: [],
})

const getScenicSpotData = async () => {
  const $skip = getRandom(0, 500)
  const response = await getScenicSpot({ params: { $skip, $top: 20 } })
  if (!response) {
    // mock
    scenicSpotData.list = mockActivity
    return
  }

  scenicSpotData.list = response
}

const formatData = () => {
  scenicSpotData.list = scenicSpotData.list
    .filter(i => i.Picture.PictureUrl1)
    .filter((i, iIdx) => iIdx < 4)
    .map(i => {
      return {
        key: i.ScenicSpotID,
        img: i.Picture.PictureUrl1,
        alt: i.Picture.PictureDescription1,
        title: i.ScenicSpotName,
        description: i.Description,
        address: i.Address,
      }
    })
}

onMounted(async () => {
  await getScenicSpotData()
  formatData()
})
</script>
<style lang="scss" scoped></style>
