<template>
  <div class="page">
    <div class="page__container">
      <div class="page__heroContainer">
        <img
          class="page__heroImg"
          src="https://images.pexels.com/photos/1126386/pexels-photo-1126386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="hero image"
        />
      </div>
    </div>

    <div class="page__container">
      <div class="carousel">
        <div class="carousel__head">
          <div class="carousel__title">
            <SvgIcon name="location"></SvgIcon>
            <h3>熱門景點</h3>
          </div>
          <div class="carousel__link">更多熱門景點</div>
        </div>
        <div class="carousel__body">
          <div class="carousel__wrap">
            <InfoCard class="carousel__item" type="landscape"></InfoCard>
            <InfoCard class="carousel__item" type="landscape"></InfoCard>
            <InfoCard class="carousel__item" type="landscape"></InfoCard>
          </div>
        </div>
      </div>
    </div>

    <div class="page__container">
      <div class="carousel">
        <div class="carousel__head">
          <div class="carousel__title">
            <SvgIcon name="location"></SvgIcon>
            <h3>觀光活動</h3>
          </div>
          <div class="carousel__link">更多觀光活動</div>
        </div>
        <div class="carousel__body">
          <div class="carousel__wrap">
            <InfoCard class="carousel__item" type="activity"></InfoCard>
            <InfoCard class="carousel__item" type="activity"></InfoCard>
            <InfoCard class="carousel__item" type="activity"></InfoCard>
          </div>
        </div>
      </div>
    </div>

    <div class="page__container">
      <div class="carousel">
        <div class="carousel__head">
          <div class="carousel__title">
            <SvgIcon name="location"></SvgIcon>
            <h3>美食品嘗</h3>
          </div>
          <div class="carousel__link">更多美食品嘗</div>
        </div>
        <div class="carousel__body">
          <div class="carousel__wrap">
            <InfoCard class="carousel__item" type="restaurant"></InfoCard>
            <InfoCard class="carousel__item" type="restaurant"></InfoCard>
            <InfoCard class="carousel__item" type="restaurant"></InfoCard>
          </div>
        </div>
      </div>
    </div>

    <div class="page__container">
      <div class="carousel">
        <div class="carousel__head">
          <div class="carousel__title">
            <SvgIcon name="location"></SvgIcon>
            <h3>住宿推薦</h3>
          </div>
          <div class="carousel__link">更多住宿推薦</div>
        </div>
        <div class="carousel__body">
          <div class="carousel__wrap">
            <InfoCard class="carousel__item" type="hotel"></InfoCard>
            <InfoCard class="carousel__item" type="hotel"></InfoCard>
            <InfoCard class="carousel__item" type="hotel"></InfoCard>
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
import InfoCard from '@/components/InfoCard.vue'
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
