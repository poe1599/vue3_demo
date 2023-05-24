<template>
  <section class="S-banner">
    <swiper
      :pagination="{ clickable: true }"
      :navigation="true"
      :modules="[Autoplay, Pagination, Navigation]"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :loop="true"
      class="S-banner__swiper"
    >
      <swiper-slide v-for="i in BannerData.list" :key="i.ScenicSpotID">
        <div class="S-banner__slide">
          <img class="S-banner__img" :src="i.Picture.PictureUrl1" :alt="i.Picture.PictureDescription1" />
          <figcaption class="S-banner__fig">{{ i.ScenicSpotName }}</figcaption>
        </div>
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
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '@/css/custom-swiper.css'
import { onMounted, reactive } from 'vue'
import { getScenicSpot } from '@/api/request/tourism'
import getRandom from '@/plugins/getRandom'
import mockData from '@/views/HomePage/components/mockBanner'

const BannerData = reactive({
  list: [],
})

const getScenicSpotBannerData = async () => {
  const $skip = getRandom(0, 500)
  const response = await getScenicSpot({ params: { $skip, $top: 30 } })
  if (!response) {
    // mock
    BannerData.list.push(...mockData)
    return
  }

  BannerData.list.push(...response)
}

const formateData = () => {
  BannerData.list = BannerData.list.filter(i => i.Picture.PictureUrl1).filter((i, iIdx) => iIdx < 10)
}

onMounted(async () => {
  await getScenicSpotBannerData()
  formateData()
})
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
