<template>
  <div class="H-card">
    <div class="H-card__container">
      <div class="H-card__pic"></div>
      <div class="H-card__info"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HorizontalCard',
}
</script>
<style lang="scss" scoped>
@mixin fake-property {
  height: 8rem;
  background: $fake-bg-color;
}

.H-card {
  overflow: hidden;
  border-radius: 0.75rem;
  @include fake-property;

  &__container {
    display: flex;
    width: 100%;
  }

  &__pic {
    width: 30%;
  }

  &__info {
    width: 70%;
  }
}
</style>
