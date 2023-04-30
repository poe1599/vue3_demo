<template>
  <div class="V-card">
    <div class="V-card__pic"></div>
    <div class="V-card__info"></div>
  </div>
</template>
<script>
export default {
  name: 'VerticalCard',
}
</script>
<style lang="scss" scoped>
@mixin fake-property {
  height: 16rem;
  background: $fake-bg-color;
}

.V-card {
  overflow: hidden;
  border-radius: 0.75rem;
  @include fake-property;

  // &__pic {
  // }

  // &__info {
  // }
}
</style>
