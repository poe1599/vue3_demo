<template>
  <section class="pic">
    <swiper
      :pagination="{ clickable: true }"
      :navigation="true"
      :modules="[Autoplay, Pagination, Navigation]"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :loop="true"
      class="pic__swiper"
    >
      <swiper-slide v-for="i in props.data.list" :key="i.id">
        <div class="pic__slide">
          <img class="pic__img" :src="i.url" :alt="i.desc" />
          <!-- <figcaption class="pic__fig">{{ i.name }}</figcaption> -->
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>
<script>
export default {
  name: 'PicSection',
}
</script>
<script setup>
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '@/css/custom-swiper.css'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
})
</script>
<style lang="scss" scoped>
.pic {
  @include base-section;

  &__swiper {
    width: 100%;
    height: 12rem;
    @include tablet {
      height: 25rem;
    }
  }

  &__slide {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background: $fake-bg-color;
    border: 1px solid $fake-bg-color;
    border-radius: 1rem;
  }

  &__img {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }

  &__fig {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    padding: 0.5rem;
    font-size: 1rem;
    color: var(--surface-a);
    background-color: var(--surface-800);
    border-radius: 0.25rem;
    opacity: 0.7;
    @include tablet {
      font-size: 1.5rem;
    }
    @include crosswise {
      font-size: 2rem;
    }
  }
}
</style>
