<template>
  <section class="S-banner">
    <swiper
      :pagination="{ clickable: true }"
      :navigation="true"
      :modules="[Pagination, Navigation]"
      class="S-banner__swiper"
    >
      <swiper-slide v-for="i in 10" :key="i">
        <div class="S-banner__slide"></div>
      </swiper-slide>
    </swiper>
  </section>
</template>
<script>
export default {
  name: 'BannerSection',
}
</script>
<script setup>
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
</script>
<style lang="scss" scoped>
.S-banner {
  @include base-section;

  &__swiper {
    width: 100%;
    height: 12rem;
    @include tablet {
      height: 25rem;
    }
  }

  &__slide {
    overflow: hidden;
    width: 100%;
    height: 100%;
    background: $fake-bg-color;
    border: 1px solid $fake-bg-color;
    border-radius: 1rem;
  }
}
</style>
