<template>
  <BaseSectionTemplate :title="title" :link-text="linkText" :after-click-link="afterClickLink">
    <swiper
      :slides-per-view="1.2"
      :space-between="16"
      :centered-slides="true"
      :pagination="{ clickable: true }"
      :navigation="true"
      :modules="[Pagination, Navigation]"
      class="B-swiper"
    >
      <swiper-slide v-for="i in 4" :key="i">
        <VerticalCard class="B-swiper__slide"></VerticalCard>
      </swiper-slide>
    </swiper>
    <div class="B-info">
      <div class="B-info__wrap">
        <VerticalCard v-for="i in 4" :key="i" class="B-info__card"></VerticalCard>
      </div>
    </div>
  </BaseSectionTemplate>
</template>
<script>
export default {
  name: 'SectionTemplate2',
}
</script>
<script setup>
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import VerticalCard from '@/components/card/VerticalCard.vue'
import BaseSectionTemplate from '@/components/section/BaseSectionTemplate.vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  linkText: {
    type: String,
    default: '',
  },
  afterClickLink: {
    type: Function,
    default: () => {},
  },
})
</script>
<style lang="scss" scoped>
.B-swiper {
  @include crosswise {
    display: none;
  }
}

.B-info {
  display: none;
  @include crosswise {
    display: block;
  }

  &__wrap {
    display: flex;
    width: 100%;
    gap: 1rem;
  }

  &__card {
    flex: 1 1 auto;
  }
}
</style>
