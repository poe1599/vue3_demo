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
  isUsedMock: false,
})

const getScenicSpotData = async () => {
  if (scenicSpotData.isUsedMock) return

  const $skip = getRandom(0, 500)
  const response = await getScenicSpot({ params: { $skip, $top: 50 } })
  if (!response) {
    // mock
    scenicSpotData.list = mockActivity
    scenicSpotData.isUsedMock = true
    filterData()
    return
  }

  scenicSpotData.list = response
  filterData()
}

const filterData = async () => {
  const displayNum = 4
  scenicSpotData.list = scenicSpotData.list.filter(i => i.Picture.PictureUrl1).filter((i, iIdx) => iIdx < displayNum)
  const shouldRefreshData = scenicSpotData.list.length < displayNum && !scenicSpotData.isUsedMock
  if (shouldRefreshData) await getScenicSpotData()
  else formatData()
}

const formatData = () => {
  scenicSpotData.list = scenicSpotData.list.map(i => {
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
})
</script>
<style lang="scss" scoped></style>
