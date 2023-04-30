<template>
  <section class="S-kv">
    <div class="S-kv__wrap">
      <div class="S-kv__descGroup">
        <p class="S-kv__title" title="探索台灣之美 讓我們更親近這片土地">
          探索<ins>台灣之美</ins><br />
          讓我們更親近這片土地
        </p>
        <span class="ky__subTitle" title="台灣旅遊景點導覽 Taiwan Travel Guide">
          <i class="pi pi-map-marker"></i>
          台灣旅遊景點導覽 Taiwan Travel Guide
        </span>
      </div>

      <div class="S-kv__searchGroup">
        <Dropdown
          v-model="searchSelect.val"
          :options="searchSelect.options"
          :option-label="searchSelect.optionLabel"
          :option-value="searchSelect.optionValue"
        />
        <InputText v-model="searchInp.val" placeholder="搜尋關鍵字" type="text" />
        <Button label="搜尋" icon="pi pi-search"></Button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'KvSection',
}
</script>
<script setup>
import { reactive } from 'vue'

const searchSelect = reactive({
  val: 'ScenicSpot',
  options: [
    { name: '探索景點', code: 'ScenicSpot' },
    { name: '探索美食', code: 'Restaurant' },
  ],
  optionLabel: 'name',
  optionValue: 'code',
})

const searchInp = reactive({
  val: '',
})
</script>
<style lang="scss" scoped>
$crosswise-group-margin-to-container: 60px;

.S-kv {
  @include base-section;
  @include crosswise {
    height: 21rem;
  }

  &__wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    @include crosswise {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      margin: auto;
      max-width: 62.5rem;
      height: 100%;
    }
  }

  &__descGroup {
    text-align: center;
    @include crosswise {
      text-align: left;
    }
  }

  &__title {
    margin: 0 auto 1rem;
    font-size: 1.75rem;
    color: var(--text-color);
    line-height: 1.5;
    @include crosswise {
      font-size: 3rem;
    }

    ins {
      text-underline-offset: 0.5rem;
      text-decoration-color: yellow;
    }
  }

  &__subTitle {
    font-size: 0.875rem;
    color: var(--text-color);
    @include crosswise {
      font-size: 1.25rem;
    }
  }

  &__searchGroup {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 22.5rem;
    gap: 0.5rem;
  }
}
</style>
