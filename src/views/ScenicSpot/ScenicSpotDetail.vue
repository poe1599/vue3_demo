<template>
  <DetailPage :page="ScenicSpot" />
</template>
<script>
export default {
  name: 'ScenicSpotDetail',
}
</script>
<script setup>
import { onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getScenicSpot } from '@/api/request/tourism'
import DetailPage from '@/components/misc/DetailPage/DetailPage.vue'

/**
 * 共用工具
 */
const route = useRoute()
const router = useRouter()

const ScenicSpotID = route.params.ScenicSpotID
if (!ScenicSpotID) {
  router.push({ name: 'index' })
}

const ScenicSpot = reactive({
  isLoading: true,
  breadcrumbs: [
    { name: 'index', text: '首頁' },
    { name: 'index', text: '節慶活動' },
  ],
  data: {},
  oriData: {},
})

const getData = async () => {
  const $filter = `ScenicSpotID eq '${ScenicSpotID}'`
  const response = await getScenicSpot({ params: { $filter, $top: 1 } })
  if (!response?.length) return
  formatData(response[0])
}

const formatData = oriData => {
  Object.assign(ScenicSpot.oriData, oriData)
  const data = {}
  Object.assign(ScenicSpot.data, data)
  ScenicSpot.isLoading = false
}

const updateBreadcrumbs = () => {
  ScenicSpot.breadcrumbs.push({
    name: 'ScenicSpotDetail',
    param: { ScenicSpotID },
    text: ScenicSpot.oriData.ScenicSpotName,
  })
}

onMounted(async () => {
  await getData()
  updateBreadcrumbs()
})
</script>
