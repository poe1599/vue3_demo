<template>
  <BaseSectionTemplate :data="data">
    <div class="B-info1">
      <div class="B-info1__wrap">
        <HorizontalCard v-for="i in data.list" :key="i.key" :data="i" class="B-info1__card"></HorizontalCard>
      </div>
    </div>
  </BaseSectionTemplate>
</template>
<script>
export default {
  name: 'SectionTemplate1',
}
</script>
<script setup>
import HorizontalCard from '@/components/card/HorizontalCard.vue'
import BaseSectionTemplate from '@/components/section/BaseSectionTemplate.vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
})
</script>
<style lang="scss" scoped>
.B-info1 {
  --card-gap: 0.5rem;

  padding: 0 var(--section-padding-x);
  @include tablet {
    --card-gap: 1rem;
  }
  @include crosswise {
    padding: 0;
  }

  &__wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: var(--card-gap);
    @include crosswise {
      flex-flow: row wrap;
    }
  }

  &__card {
    width: 100%;
    @include crosswise {
      width: calc((100% - var(--card-gap)) / 2);
    }
  }
}
</style>
