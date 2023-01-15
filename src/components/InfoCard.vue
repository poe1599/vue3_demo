<template>
  <div class="card">
    <div class="card__head">
      <img
        class="card__img"
        src="https://images.pexels.com/photos/2406395/pexels-photo-2406395.jpeg"
      />
      <a href="" class="card__link">
        <SvgIcon name="share"></SvgIcon>
      </a>
    </div>
    <div class="card__body">
      <div class="card__title">天長地久橋</div>

      <div v-if="props.type === 'landscape'" class="card__landscape">
        <div class="card__desc--dull">
          <SvgIcon name="location"></SvgIcon>
          嘉義縣
        </div>
        <div class="card__desc--dull">
          <SvgIcon name="time"></SvgIcon>
          每日開放
        </div>
      </div>
      <div v-else-if="props.type === 'activity'" class="card__activity">
        <div class="card__desc">
          <SvgIcon name="time"></SvgIcon>
          2021-12-17 ~ 2021-12-26
        </div>
        <div class="card__desc--dull">
          <SvgIcon name="location"></SvgIcon>
          臺北市 萬華區
        </div>
      </div>
      <div v-else-if="props.type === 'restaurant'" class="card__restaurant">
        <div class="card__desc">
          <SvgIcon name="time"></SvgIcon>
          週一~週五：10:00~15:00（週二公休） 週六~週日：10:00~21:00
        </div>
        <div class="card__desc--dull">
          <SvgIcon name="location"></SvgIcon>
          臺南市724七股區中寮里8-41號（七股鹽山光復國小旁）
        </div>
      </div>
      <div v-else-if="props.type === 'hotel'" class="card__hotel">
        <div class="card__desc">
          <SvgIcon name="call"></SvgIcon>
          886-4-25855997
        </div>
        <div class="card__desc--dull">
          <SvgIcon name="location"></SvgIcon>
          臺南市724七股區中寮里8-41號（七股鹽山光復國小旁）
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
</script>
<style lang="scss" scoped>
.card {
  overflow: hidden;
  width: 330px;
  border-radius: 16px;
  box-shadow: $shadow;
  cursor: pointer;

  &__head {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 168px;
  }

  &__img {
    position: absolute;
    object-fit: cover;
    top: 50%;
    left: 50%;
    display: block;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    transition: 0.3s;

    &:hover {
      width: 125%;
      height: 125%;
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

    svg {
      width: 16px;
      height: 16px;
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

  &__landscape {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

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
