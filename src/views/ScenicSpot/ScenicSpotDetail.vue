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
  picSection: {},
  descSection: {},
})

const getData = async () => {
  const $filter = `ScenicSpotID eq '${ScenicSpotID}'`
  const response = await getScenicSpot({ params: { $filter, $top: 1 } })
  if (!response?.length) return
  formatData(response[0])
}

const formatData = data => {
  Object.assign(ScenicSpot.data, data)
  formatPicSection()
  formatDescSection()
  ScenicSpot.isLoading = false
}

const formatPicSection = () => {
  const picSection = {
    list: [],
  }

  const { PictureUrl1, PictureDescription1, PictureUrl2, PictureDescription2, PictureUrl3, PictureDescription3 } =
    ScenicSpot.data.Picture

  if (PictureUrl1)
    picSection.list.push({ id: 'PictureUrl1', name: PictureDescription1, desc: PictureDescription1, url: PictureUrl1 })

  if (PictureUrl2)
    picSection.list.push({ id: 'PictureUrl2', name: PictureDescription2, desc: PictureDescription2, url: PictureUrl2 })

  if (PictureUrl3)
    picSection.list.push({ id: 'PictureUrl3', name: PictureDescription3, desc: PictureDescription3, url: PictureUrl3 })

  Object.assign(ScenicSpot.picSection, picSection)
}

const formatDescSection = () => {
  const { ScenicSpotName, DescriptionDetail, Class1, Class2, Class3, Keyword } = ScenicSpot.data
  const tags = [Class1, Class2, Class3].filter(i => i)
  Keyword?.split(/[,、]/)
    .map(i => i.trim())
    .forEach(i => tags.push(i))
  const descSection = {
    pageTitle: ScenicSpotName,
    tags,
    descTitle: '景點介紹：',
    desc: DescriptionDetail,
  }
  Object.assign(ScenicSpot.descSection, descSection)
}

const updateBreadcrumbs = () => {
  ScenicSpot.breadcrumbs.push({
    name: 'ScenicSpotDetail',
    param: { ScenicSpotID },
    text: ScenicSpot.data.ScenicSpotName,
  })
}

onMounted(async () => {
  await getData()
  updateBreadcrumbs()
})
</script>
