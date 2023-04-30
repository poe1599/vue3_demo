<template>
  <BaseSectionTemplate :title="title" :link-text="linkText" :after-click-link="afterClickLink">
    <div class="B-info1">
      <div class="B-info1__wrap">
        <HorizontalCard v-for="i in 4" :key="i" class="B-info1__card"></HorizontalCard>
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
  title: {
    type: String,
    default: '',
  },
  linkText: {
    type: String,
    default: '',
  },
  afterClickLink: {
    type: Function,
    default: () => {},
  },
})
</script>
<style lang="scss" scoped>
$card-gap: 0.5rem;

.B-info1 {
  padding: 0 var(--section-padding-x);
  @include crosswise {
    padding: 0;
  }

  &__wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: $card-gap;
    @include crosswise {
      flex-flow: row wrap;
    }
  }

  &__card {
    width: 100%;
    @include crosswise {
      width: calc((100% - $card-gap) / 2);
    }
  }
}
</style>
