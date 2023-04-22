<template>
  <div class="pagination">
    <button class="solidButton">1</button>
    <button class="hollowButton">2</button>
    <button class="hollowButton">3</button>
    <span>...</span>
    <button class="hollowButton">20</button>
  </div>
</template>
<script>
export default {
  name: 'PaginationIndex',
}
</script>
<script setup></script>
<style lang="scss" scoped>
.pagination {
  display: flex;
  gap: 12px;
  align-items: center;
  color: $primary-1;

  button {
    justify-content: center;
    flex: 0 0 auto;
    min-width: 44px;
    height: 44px;
    text-align: center;
  }

  .hollowButton {
    color: $primary-1;
  }
}
</style>
