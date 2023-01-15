<template>
  <div class="search">
    <div class="search__group">
      <input type="text" class="search__input" placeholder="搜尋關鍵字" />
      <button class="search__clear">
        <SvgIcon name="cross"></SvgIcon>
      </button>
      <span class="search__magnifier">
        <SvgIcon name="search"></SvgIcon>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchInput',
}
</script>
<style lang="scss" scoped>
.search {
  width: 300px;

  &__group {
    display: flex;
    align-items: center;
    padding: 0 12px;
    height: 43px;
    background: $gray;
    border: 1px solid $primary-3;
    border-radius: 8px;
  }

  &__input {
    flex: 1 1 auto;
    width: 10px;
    font-size: $fz;
    color: $secondary-1;
    background: transparent;
    border: none;
    outline: none;

    &::placeholder {
      color: $secondary-3;
    }
  }

  &__clear {
    padding: 0;
    background: transparent;
    border: none;
    cursor: pointer;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  &__magnifier {
    color: $primary-1;

    svg {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
