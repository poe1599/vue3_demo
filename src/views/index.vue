<template>
  <div class="page">
    <div class="page__container">
      <div class="page__heroContainer">
        <img class="page__heroImg" :src="heroImg?.Picture?.PictureUrl1" :alt="heroImg?.Picture?.PictureDescription1" />
      </div>
    </div>

    <div v-for="(i, iIdx) in [scenicSpot, activity, restaurant, hotel]" :key="iIdx" class="page__container">
      <div class="carousel">
        <div class="carousel__head">
          <div class="carousel__title">
            <SvgIcon name="location"></SvgIcon>
            <h3>{{ i.title }}</h3>
          </div>
          <!-- todo: 更多XX連結按鈕 -->
          <div class="carousel__link">{{ i.moreButtonDesc }}</div>
        </div>
        <div class="carousel__body">
          <div class="carousel__wrap">
            <InfoCard
              v-for="j in i.list"
              :key="j[i.listKey]"
              class="carousel__item"
              :info="j"
              :type="i.cardType"
            ></InfoCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'IndexPage',
}
</script>
<script setup>
import { computed, onMounted, reactive } from 'vue'
import { getActivity, getHotel, getRestaurant, getScenicSpot } from '@/api/request/tourism'
import InfoCard from '@/components/InfoCard.vue'

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getSkipValue = () => {
  return getRandom(0, 200)
}

const scenicSpot = reactive({
  title: '熱門景點',
  moreButtonDesc: '更多熱門景點',
  cardType: 'landscape',
  listKey: 'ScenicSpotID',
  list: [],
})
const getScenicSpotData = async () => {
  const response = await getScenicSpot({ params: { $top: 3, $skip: getSkipValue() } })
  scenicSpot.list = response
}

const activity = reactive({
  title: '觀光活動',
  moreButtonDesc: '更多觀光活動',
  cardType: 'activity',
  listKey: 'ActivityID',
  list: [],
})
const getActivityData = async () => {
  const response = await getActivity({ params: { $top: 3, $skip: getSkipValue() } })
  activity.list = response
}

const restaurant = reactive({
  title: '美食品嘗',
  moreButtonDesc: '更多美食品嘗',
  cardType: 'restaurant',
  listKey: 'RestaurantID',
  list: [],
})
const getRestaurantData = async () => {
  const response = await getRestaurant({ params: { $top: 3, $skip: getSkipValue() } })
  restaurant.list = response
}

const hotel = reactive({
  title: '住宿推薦',
  moreButtonDesc: '更多住宿推薦',
  cardType: 'hotel',
  listKey: 'HotelID',
  list: [],
})
const getHotelData = async () => {
  const response = await getHotel({ params: { $top: 3, $skip: getSkipValue() } })
  hotel.list = response
}

const heroImg = computed(() => {
  const list = [scenicSpot, activity, restaurant, hotel]
    .reduce((i, j) => i.concat(j.list), [])
    .filter(i => i.Picture.PictureUrl1)
  const randomIndex = getRandom(0, list.length)
  return list[randomIndex]
})

onMounted(async () => {
  await getScenicSpotData()
  await getRestaurantData()
  await getHotelData()
  await getActivityData()
})
</script>
<style lang="scss" scoped>
@mixin contain {
  margin-right: 16px;
  margin-left: 16px;
  @include tablet {
    margin-right: 24px;
    margin-left: 24px;
  }
}

.page {
  &__container {
    margin-bottom: 8px;
  }

  &__heroContainer {
    margin-bottom: 40px;
    height: 152px;

    @include contain;
    @include tablet {
      height: 234px;
    }
    @include laptop {
      height: 336px;
    }
  }

  &__heroImg {
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    box-shadow: $shadow;
    object-position: center center;
    object-fit: cover;
  }
}

.carousel {
  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include contain;

    margin-bottom: 16px;
  }

  &__title {
    display: inline-flex;
    gap: 8px;
    align-items: center;

    svg {
      width: 24px;
      height: 24px;
      color: #c499ff;
    }
  }

  h3 {
    margin: 0;
  }

  &__link {
    font-size: $fz;
    color: $primary-1;
    cursor: pointer;
  }

  &__body {
    display: flex;
    overflow-x: scroll;
    @include tablet {
      overflow: initial;
    }
  }

  &__wrap {
    display: flex;
    flex: 1 0 auto;
    gap: 24px;
    margin-bottom: 32px;
    @include contain;
    @include tablet {
      gap: 16px;
    }
    @include laptop {
      gap: 24px;
    }
  }

  &__item {
    flex: 1 0 auto;
    width: 256px;
    @include tablet {
      width: 220px;
    }
  }
}
</style>
