<template>
  <article class="P-detail">
    <div class="P-detail__breadcrumb">
      <Breadcrumb :breadcrumbs="props.page.breadcrumbs" />
    </div>
    <div class="P-detail__pic">
      <PicSection :data="props.page.picSection" />
    </div>
    <div class="P-detail__desc">
      <DescSection :data="props.page.descSection" />
    </div>
    <div class="P-detail__map">
      <MapSection />
    </div>
    <div class="P-detail__links"></div>
  </article>
</template>
<script>
export default {
  name: 'DetailPage',
}
</script>
<script setup>
import { useRoute, useRouter } from 'vue-router'
import Breadcrumb from '@/components/misc/Breadcrumb.vue'
import DescSection from '@/components/misc/DetailPage/DescSection.vue'
import MapSection from '@/components/misc/DetailPage/MapSection.vue'
import PicSection from '@/components/misc/DetailPage/PicSection.vue'

const props = defineProps({
  page: {
    type: Object,
    default: () => ({}),
    required: true,
  },
})

/**
 * 共用工具
 */
const route = useRoute()
const router = useRouter()
</script>
<style lang="scss" scoped>
.P-detail {
  // padding: 1.5rem 0;

  // &__breadcrumb {
  //   margin: 0 1rem 1rem;
  // }

  // &__pic {
  //   margin-bottom: 1rem;
  // }

  // &__desc {
  //   margin-bottom: 2rem;
  // }

  // &__map {
  //   margin-bottom: 2rem;
  // }
}
</style>
