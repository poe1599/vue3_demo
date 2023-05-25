<template>
  <SectionTemplate1 :data="activityData"></SectionTemplate1>
</template>
<script>
export default {
  name: 'ActivitySection',
}
</script>
<script setup>
import dayjs from 'dayjs'
import { onMounted, reactive } from 'vue'
import { getActivity } from '@/api/request/tourism'
import SectionTemplate1 from '@/components/section/SectionTemplate1.vue'
import mockActivity from '@/mock/mockActivity'
import getRandom from '@/plugins/getRandom'

const activityData = reactive({
  title: '近期活動',
  linkText: '查看更多活動',
  afterClickLink: () => {},
  list: [],
  isUsedMock: false,
})

const getActivityData = async () => {
  if (activityData.isUsedMock) return

  const $skip = getRandom(0, 500)
  const response = await getActivity({ params: { $skip, $top: 50 } })
  if (!response) {
    // mock
    activityData.list = mockActivity
    activityData.isUsedMock = true
    filterData()
    return
  }

  activityData.list = response
  filterData()
}

const filterData = async () => {
  const displayNum = 4
  activityData.list = activityData.list.filter(i => i.Picture.PictureUrl1).filter((i, iIdx) => iIdx < displayNum)
  const shouldRefreshData = activityData.list.length < displayNum && !activityData.isUsedMock
  if (shouldRefreshData) await getActivityData()
  else formatData()
}

const formatData = () => {
  activityData.list = activityData.list.map(i => {
    return {
      key: i.ActivityID,
      img: i.Picture.PictureUrl1,
      alt: i.Picture.PictureDescription1,
      startTime: dayjs(i.StartTime).format('YYYY/MM/DD'),
      endTime: dayjs(i.EndTime).format('YYYY/MM/DD'),
      title: i.ActivityName,
      description: i.Description,
      address: i.Address,
    }
  })
}

onMounted(async () => {
  await getActivityData()
})
</script>
<style lang="scss" scoped></style>
