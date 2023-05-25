<template>
  <main>
    <KvSection></KvSection>
    <BannerSection></BannerSection>
    <ActivitySection></ActivitySection>
    <ScenicSpotSection></ScenicSpotSection>
    <RestaurantSection></RestaurantSection>
  </main>
</template>
<script>
export default {
  name: 'IndexPage',
}
</script>
<script setup>
import { reactive } from 'vue'
import ActivitySection from '@/views/HomePage/components/ActivitySection.vue'
import BannerSection from '@/views/HomePage/components/BannerSection.vue'
import KvSection from '@/views/HomePage/components/KvSection.vue'
import RestaurantSection from '@/views/HomePage/components/RestaurantSection.vue'
import ScenicSpotSection from '@/views/HomePage/components/ScenicSpotSection.vue'
</script>
<style lang="scss" scoped></style>
