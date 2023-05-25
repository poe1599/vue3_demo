<template>
  <section class="T-section">
    <div class="T-section__head">
      <h3 class="T-section__title">{{ data.title }}</h3>
      <div class="T-section__more" @click="data.afterClickLink">
        {{ data.linkText }}
        <i class="pi pi-chevron-right"></i>
      </div>
    </div>

    <div class="T-section__body">
      <slot></slot>
    </div>
  </section>
</template>
<script>
export default {
  name: 'BaseSectionTemplate',
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
.T-section {
  position: relative;
  padding: var(--section-padding-y) 0;
  width: 100%;
  @include crosswise {
    margin: auto;
    padding: var(--crosswise-section-padding-y) var(--crosswise-section-padding-x);
    max-width: var(--crosswise-container-max-width);
  }

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
    padding: 0 var(--section-padding-x);
    width: 100%;
    @include crosswise {
      padding: 0;
    }
  }

  &__title {
    margin: 0;
    font-size: 1.5rem;
    color: var(--text-color);
    @include crosswise {
      padding: 0 1rem;
      font-size: 2.25rem;
    }
  }

  &__more {
    font-size: 1rem;
    color: #ff725e;
    cursor: pointer;
  }
}
</style>
