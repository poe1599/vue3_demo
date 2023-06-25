<template>
  <main class="S-desc">
    <h1 class="S-desc__pageTitle">{{ props.data.pageTitle }}</h1>
    <div class="S-desc__tagWrapper">
      <span v-for="(tag, tagIndex) in props.data.tags" :key="tagIndex" class="S-desc__tag">{{ tag }}</span>
    </div>
    <div>
      <h2 class="S-desc__descTitle">{{ props.data.descTitle }}</h2>
      <p class="S-desc__desc">{{ props.data.desc }}</p>
    </div>
  </main>
</template>
<script>
export default {
  name: 'DescSection',
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
.S-desc {
  @include base-section;

  &__pageTitle {
    margin: 0 0 1rem;
    font-size: 2rem;
    @include tablet {
      font-size: 2.5rem;
    }
    @include crosswise {
      font-size: 3rem;
    }
  }

  &__tagWrapper {
    display: flex;
    margin-bottom: 2rem;
    width: 100%;
    gap: 0.5rem;
  }

  &__tag {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    color: var(--yellow-700);
    background: var(--yellow-100);
    border: 1px solid var(--yellow-700);
    border-radius: 1rem;

    &::before {
      content: '# ';
    }
  }

  &__descTitle {
    margin: 0 0 0.5rem;
    font-size: 1.5rem;
    @include tablet {
      margin: 0 0 0.75rem;
      font-size: 1.75rem;
    }
    @include crosswise {
      margin: 0 0 1rem;
      font-size: 2rem;
    }
  }

  &__desc {
    margin: 0;
    line-height: 1.5;
  }
}
</style>
