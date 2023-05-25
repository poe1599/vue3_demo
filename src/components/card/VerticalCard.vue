<template>
  <router-link to="" class="V-card">
    <div class="V-card__container">
      <div class="V-card__pic">
        <img class="V-card__img" loading="lazy" :src="data.img" :alt="data.alt" />
      </div>
      <div class="V-card__info">
        <p class="V-card__title">{{ data.title }}</p>
        <address class="V-card__address"><i class="pi pi-compass"></i>{{ data.address }}</address>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'VerticalCard',
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
.V-card {
  --img-y: 40vw;

  display: block;
  overflow: hidden;
  text-decoration: none;
  color: var(--surface-900);
  @include crosswise {
    --img-y: 12rem;
  }

  &__container {
    &:hover {
      .V-card__img {
        width: 120%;
        height: 120%;
      }
    }
  }

  &__pic {
    position: relative;
    overflow: hidden;
    height: var(--img-y);
    background: var(--surface-500);
    border-radius: 0.5rem;
  }

  &__info {
    padding: 0.5rem 0.25rem;
    @include tablet {
      padding: 1rem 0.5rem;
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

  &__title {
    overflow: hidden;
    margin: 0 0 0.5rem;
    font-size: 1.125rem;
    font-weight: bold;
    text-overflow: ellipsis;
    white-space: nowrap;
    @include tablet {
      margin: 0 0 1rem;
      font-size: 1.5rem;
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
