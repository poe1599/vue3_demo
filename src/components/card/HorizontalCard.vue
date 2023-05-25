<template>
  <router-link to="" class="H-card">
    <div class="H-card__container">
      <div class="H-card__pic">
        <img class="H-card__img" loading="lazy" :src="data.img" :alt="data.alt" />
      </div>
      <div class="H-card__info">
        <p class="H-card__time">
          <time>{{ data.startTime }}</time>
          -
          <time>{{ data.endTime }}</time>
        </p>
        <p class="H-card__title">{{ data.title }}</p>
        <p class="H-card__desc">{{ data.description }}</p>
        <address class="H-card__address"><i class="pi pi-compass"></i>{{ data.address }}</address>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'HorizontalCard',
}
</script>
<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
})
</script>
<style lang="scss" scoped>
.H-card {
  --img-x: 6rem;
  --img-y: 4rem;

  display: block;
  overflow: hidden;
  text-decoration: none;
  color: var(--surface-900);
  @include tablet {
    --img-x: 12rem;
    --img-y: 9rem;
  }
  @include crosswise {
    background: var(--surface-100);
    border: 0.0625rem solid var(--surface-border);
    border-radius: 0.75rem;
  }

  &__container {
    display: flex;
    width: 100%;
    height: 100%;

    &:hover {
      .H-card__img {
        width: 120%;
        height: 120%;
      }
    }
  }

  &__pic {
    position: relative;
    flex: 0 0 auto;
    overflow: hidden;
    width: var(--img-x);
    height: var(--img-y);
    background: var(--surface-500);
    border-radius: 0.5rem;
    @include crosswise {
      border-radius: 0;
    }
  }

  &__info {
    padding: 0.25rem 1rem;
    width: calc(100% - var(--img-x));
    height: var(--img-y);
    @include tablet {
      padding: 0.25rem 1.5rem;
    }
    @include crosswise {
      padding: 0.5rem 1.5rem;
    }
  }

  &__img {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 100%;
    height: 100%;
    background: var(--surface-50);
    transition: 0.3s;
    object-fit: cover;
    transform: translate(-50%, -50%);
  }

  &__time {
    margin: 0 0 0.25rem;
    font-size: 0.75rem;
    color: var(--surface-700);
    @include tablet {
      margin: 0 0 0.5rem;
      font-size: 1rem;
    }
  }

  &__title {
    overflow: hidden;
    margin: 0 0 0.25rem;
    font-size: 1.125rem;
    font-weight: bold;
    text-overflow: ellipsis;
    white-space: nowrap;
    @include tablet {
      margin: 0 0 0.5rem;
      font-size: 1.5rem;
    }
  }

  &__desc {
    display: none;
    @include tablet {
      display: -webkit-box;
      overflow: hidden;
      margin: 0 0 0.75rem;
      font-size: 1rem;
      text-overflow: ellipsis;
      white-space: pre-wrap;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }

  &__address {
    overflow: hidden;
    margin: 0;
    font-size: 0.75rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-style: normal;
    color: var(--surface-700);
    @include tablet {
      font-size: 1rem;
    }

    .pi {
      vertical-align: top;
      margin-right: 0.5rem;
    }
  }
}
</style>
