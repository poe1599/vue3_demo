<template>
  <div class="card" @click="clickCard">
    <div class="card__head">
      <img
        class="card__img"
        :class="{ 'card__img--logo': !props.info.Picture?.PictureUrl1 }"
        :src="props.info.Picture?.PictureUrl1 || logo"
        :alt="props.info.Picture?.PictureDescription1"
      />
      <!-- todo: 點擊複製卡片超連結 -->
      <button href="/vue3_demo/demo/" class="card__link" @click.stop="clickCardLinkButton">
        <SvgIcon name="share"></SvgIcon>
      </button>
    </div>
    <div class="card__body">
      <div class="card__title">{{ cardTitle }}</div>

      <div v-if="props.type === 'landscape'" class="card__landscape">
        <div class="card__desc--dull">
          <SvgIcon name="location"></SvgIcon>
          {{ props.info.Address }}
        </div>
        <div class="card__desc--dull">
          <SvgIcon name="time"></SvgIcon>
          {{ props.info.OpenTime }}
        </div>
      </div>

      <div v-else-if="props.type === 'activity'" class="card__activity">
        <div class="card__desc">
          <SvgIcon name="time"></SvgIcon>
          {{ getTimeDurationDesc(props.info.StartTime, props.info.EndTime) }}
        </div>
        <div class="card__desc--dull">
          <SvgIcon name="location"></SvgIcon>
          {{ props.info.Location }}
        </div>
      </div>

      <div v-else-if="props.type === 'restaurant'" class="card__restaurant">
        <div class="card__desc">
          <SvgIcon name="time"></SvgIcon>
          {{ props.info.OpenTime }}
        </div>
        <div class="card__desc--dull">
          <SvgIcon name="location"></SvgIcon>
          {{ props.info.Address }}
        </div>
      </div>

      <div v-else-if="props.type === 'hotel'" class="card__hotel">
        <div class="card__desc">
          <SvgIcon name="call"></SvgIcon>
          {{ props.info.Phone }}
        </div>
        <div class="card__desc--dull">
          <SvgIcon name="location"></SvgIcon>
          {{ props.info.Address }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InfoCard',
}
</script>
<script setup>
import { computed } from 'vue'
import logo from '@/assets/images/logo.svg'
import filterFactory from '@/setting/filterFactory'

const props = defineProps({
  type: {
    type: String,
    default: 'landscape',
  },
  info: {
    type: Object,
    default: () => ({}),
  },
})

const { modDate } = filterFactory

const cardTitle = computed(() => {
  const key = {
    landscape: 'ScenicSpotName',
    activity: 'ActivityName',
    restaurant: 'RestaurantName',
    hotel: 'HotelName',
  }[props.type]
  return props.info[key]
})

const getTimeDurationDesc = (StartTime, EndTime) => {
  let text = ''
  if (StartTime || EndTime) {
    text = ' ~ '
    if (StartTime) text = modDate(StartTime) + text
    if (EndTime) text = text + modDate(EndTime)
  } else text = '--'

  return text
}


const clickCard = () => {
  // 導向內容
}

const clickCardLinkButton = () => {
  // 複製連結
  // navigator.clipboard.writeText('123')
}
</script>
<style lang="scss" scoped>
.card {
  overflow: hidden;
  width: 330px;
  border: 2px solid transparent;
  border-radius: 16px;
  box-shadow: $shadow;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    border: 2px solid $primary-1;
    box-shadow: $heavy-shadow;
  }

  &__head {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 168px;
  }

  &__img {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 100%;
    height: 100%;
    background: #fff;
    transition: 0.3s;
    object-fit: cover;
    transform: translate(-50%, -50%);

    &:hover {
      width: 125%;
      height: 125%;
    }

    &--logo {
      object-fit: contain;
      width: 50%;
      height: 50%;

      &:hover {
        width: 80%;
        height: 80%;
      }
    }
  }

  &__link {
    position: absolute;
    top: 12px;
    right: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    color: $white;
    background: rgba(63, 177, 149, 0.2);
    border-radius: 12px;
    transition: 0.3s;

    svg {
      width: 16px;
      height: 16px;
    }

    &:hover {
      background: rgba(63, 177, 149, 1);
    }
  }

  &__body {
    padding: 12px;
    background: $white;

    svg {
      position: absolute;
      left: 0;
      width: 24px;
      height: 24px;
      color: $primary-1;
    }
  }

  &__title {
    margin-bottom: 8px;
    font-size: $fz-l;
    font-weight: bold;
  }

  &__landscape,
  &__activity,
  &__restaurant,
  &__hotel {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  %desc {
    position: relative;
    padding-left: 32px;
    line-height: 1.5;
    font-size: $fz-s;
  }

  &__desc {
    @extend %desc;

    &--dull {
      @extend %desc;

      color: $secondary-2;
    }
  }
}
</style>
