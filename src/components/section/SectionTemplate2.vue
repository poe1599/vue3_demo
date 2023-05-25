<template>
  <BaseSectionTemplate :data="data">
    <swiper
      :slides-per-view="1.2"
      :space-between="16"
      :centered-slides="true"
      :pagination="{ clickable: true }"
      :navigation="true"
      :modules="[Pagination, Navigation]"
      class="B-swiper"
    >
      <swiper-slide v-for="i in data.list" :key="i.key">
        <div class="B-swiper__slide">
          <VerticalCard :data="i"></VerticalCard>
        </div>
      </swiper-slide>
    </swiper>
    <div class="B-info">
      <div class="B-info__wrap">
        <div v-for="i in data.list" :key="i.key" class="B-info__card">
          <VerticalCard :data="i"></VerticalCard>
        </div>
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
  data: {
    type: Object,
    default: () => ({}),
  },
})
</script>
<style lang="scss" scoped>
.B-swiper {
  @include crosswise {
    display: none;
  }

  &__slide {
    padding-bottom: 2rem;
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
    flex: 1 0 auto;
    width: 20%;
  }
}
</style>
