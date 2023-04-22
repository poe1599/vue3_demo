<template>
  <div>
    <h1>Components Demo</h1>
    <div>
      <h2>Button</h2>
      <p><button class="hollowButton">Hollow Button</button> <button class="solidButton">Solid Button</button></p>
    </div>

    <div>
      <h2>Svg</h2>
      <p>
        <SvgIcon class="attractions" name="zeelandia"></SvgIcon>
        <SvgIcon class="attractions" name="bicycle"></SvgIcon>
        <SvgIcon class="attractions" name="lamp"></SvgIcon>
        <SvgIcon class="attractions" name="museum"></SvgIcon>
        <SvgIcon class="attractions" name="queen"></SvgIcon>
        <SvgIcon class="attractions" name="bubbleTea"></SvgIcon>
        <SvgIcon class="attractions" name="ballon"></SvgIcon>
        <SvgIcon class="attractions" name="hotel"></SvgIcon>
      </p>
      <p>
        <SvgIcon class="icon" name="boldArrow"></SvgIcon>
        <SvgIcon class="icon" name="search"></SvgIcon>
        <SvgIcon class="icon" name="time"></SvgIcon>
        <SvgIcon class="icon" name="printer"></SvgIcon>
        <SvgIcon class="icon" name="call"></SvgIcon>
        <SvgIcon class="icon" name="share"></SvgIcon>
        <SvgIcon class="icon" name="location"></SvgIcon>
        <SvgIcon class="icon" name="chevron"></SvgIcon>
        <SvgIcon class="icon" name="sort"></SvgIcon>
        <SvgIcon class="icon" name="setting"></SvgIcon>
      </p>
      <p>
        <img src="@/assets/images/logo.svg" alt="logo" />
      </p>
    </div>

    <div>
      <h2>Pagination</h2>
      <p>
        <Pagination></Pagination>
      </p>
    </div>

    <div>
      <h2>SearchInput</h2>
      <div>
        <SearchInput></SearchInput>
      </div>
    </div>

    <div>
      <h2>AreaSelector</h2>
      <div>
        <AreaSelector v-model="areaVal"></AreaSelector>
      </div>
    </div>

    <div>
      <h2>InfoCard</h2>
      <div>
        <InfoCard type="landscape"></InfoCard>
        <InfoCard type="activity"></InfoCard>
        <InfoCard type="restaurant"></InfoCard>
        <InfoCard type="hotel"></InfoCard>
      </div>
    </div>

    <div>
      <h2>API</h2>
      <button class="hollowButton" @click="getScenicSpotData">觀光景點</button>
      <button class="hollowButton" @click="getRestaurantData">觀光餐飲</button>
      <button class="hollowButton" @click="getHotelData">觀光旅宿</button>
      <button class="hollowButton" @click="getActivityData">觀光活動</button>
      <br />
      <br />
      {{ apiData }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'DemoIndex',
}
</script>
<script setup>
import { reactive, ref } from 'vue'
import { getActivity, getHotel, getRestaurant, getScenicSpot } from '@/api/request/tourism'
import AreaSelector from '@/components/AreaSelector.vue'
import InfoCard from '@/components/InfoCard.vue'
import Pagination from '@/components/Pagination.vue'
import SearchInput from '@/components/SearchInput.vue'

const areaVal = reactive([])

const apiData = ref('')
const getScenicSpotData = async () => {
  const response = await getScenicSpot({ params: { $top: 1 } })
  if (!response) return
  apiData.value = JSON.stringify(response)
}
const getRestaurantData = async () => {
  const response = await getRestaurant({ params: { $top: 1 } })
  if (!response) return
  apiData.value = JSON.stringify(response)
}
const getHotelData = async () => {
  const response = await getHotel({ params: { $top: 1 } })
  if (!response) return
  apiData.value = JSON.stringify(response)
}
const getActivityData = async () => {
  const response = await getActivity({ params: { $top: 1 } })
  if (!response) return
  apiData.value = JSON.stringify(response)
}
</script>
<style lang="scss" scoped>
.attractions {
  width: 64px;
  height: 64px;
  color: $primary-1;
}

.icon {
  width: 24px;
  height: 24px;
  color: $primary-1;
}
</style>
