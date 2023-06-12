<template>
  <div class="breadcrumb">
    <router-link v-for="i in props.breadcrumbs" :key="i.name" class="breadcrumb__link" :to="i">
      {{ i.text }}
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'BreadcrumbIndex',
}
</script>
<script setup>
const props = defineProps({
  breadcrumbs: {
    type: Array,
    default: () => [],
  },
})
</script>
<style lang="scss" scoped>
.breadcrumb {
  @include base-section;

  &__link {
    font-size: 0.75rem;
    text-decoration: none;
    color: var(--primary-color);

    &:hover {
      color: var(--highlight-text-color);
    }

    &:not(:last-child)::after {
      content: '/';
      margin: 0 0.5rem;
      pointer-events: none;
      cursor: auto;
      color: var(--gray-900);
    }
  }
}
</style>
