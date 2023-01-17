<template>
  <div ref="AreaSelector" class="search">
    <div class="search__group" @click="state.isFolded = !state.isFolded">
      <div class="search__input">
        <span v-show="!selectedArea.length" class="search__placeholder">目的地</span>
        <span v-for="i in selectedArea" :key="i.id" class="search__selected">
          <span>{{ i.name }}</span>
          <button class="search__clear" @click="clickOption(i)">
            <SvgIcon name="cross"></SvgIcon>
          </button>
        </span>
      </div>

      <button class="search__fold">
        <SvgIcon name="boldArrow"></SvgIcon>
      </button>
    </div>

    <transition name="slide--down">
      <div v-if="!state.isFolded" class="search__menu">
        <button v-for="i in state.list" :key="i.id" :class="buttonClass(i)" @click="clickOption(i)">
          {{ i.name }}
        </button>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'AreaSelector',
}
</script>
<script setup>
import { onClickOutside, useVModel } from '@vueuse/core'
import { computed, onMounted, reactive, ref } from 'vue'

const emits = defineEmits(['update:modelValue', 'areaChange'])
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
    required: true,
  },
})
const _modelValue = useVModel(props, 'modelValue', emits)

const AreaSelector = ref(null)
const state = reactive({
  isFolded: true,
  list: [
    // { id: '', name: '' },
  ],
})

const selectedArea = computed(() => {
  return state.list.filter(i => _modelValue.value.includes(i.id))
})

const initAreaList = () => {
  const areas = [
    '基隆',
    '台北',
    '新北',
    '桃園',
    '新竹',
    '苗栗',
    '台中',
    '彰化',
    '雲林',
    '南投',
    '嘉義',
    '台南',
    '高雄',
    '屏東',
    '台東',
    '花蓮',
    '澎湖',
    '綠島',
    '蘭嶼',
    '小琉球',
    '金門',
    '馬祖',
  ]
  state.list = areas.map(i => ({ id: i, name: i }))
}

onMounted(() => {
  initAreaList()
})

const clickOption = ({ id }) => {
  const index = _modelValue.value.findIndex(i => i === id)
  if (index < 0) _modelValue.value.push(id)
  else _modelValue.value.splice(index, 1)

  emits('areaChange', _modelValue.value)
}

const buttonClass = ({ id }) => {
  const index = _modelValue.value.findIndex(i => i === id)
  if (index < 0) return 'hollowButton'
  else return 'solidButton'
}

onClickOutside(AreaSelector, () => {
  state.isFolded = true
})
</script>
<style lang="scss" scoped>
.search {
  position: relative;
  width: 300px;

  &__group {
    display: flex;
    align-items: center;
    padding: 0 12px;
    height: 43px;
    background: $gray;
    border: 1px solid $primary-3;
    border-radius: 8px;
    cursor: pointer;
  }

  &__input {
    flex: 1 1 auto;
    overflow: hidden;
    width: 10px;
    font-size: $fz;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: $secondary-1;
    background: transparent;
    border: none;
    outline: none;
  }

  &__placeholder {
    color: $secondary-3;
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

  &__fold {
    padding: 0;
    color: $primary-1;
    background: transparent;
    border: none;
    cursor: pointer;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  &__menu {
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    padding: 12px;
    gap: 24px;
    background: $white;
    box-shadow: $shadow;

    .hollowButton,
    .solidButton {
      justify-content: center;
      width: calc(33.33% - 16px);
      text-align: center;
    }
  }

  &__selected {
    display: inline-flex;
    align-items: center;
    line-height: 1;
    gap: 2px;
    margin-right: 4px;
  }
}

.slide--down {
  &-enter-active,
  &-leave-active {
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.38, 0, 0.24, 1);
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateY(-1rem);
  }
}
</style>
