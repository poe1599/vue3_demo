<template>
  <span class="themeSwitch">
    <InputSwitch v-model="isDarkMode" @change="themeControl.toggleTheme" />
    <span class="themeSwitch__icon" :class="themeIcon"></span>
  </span>
</template>
<script>
export default {
  name: 'ThemeSwitch',
}
</script>
<script setup>
import { computed, ref, watch } from 'vue'
import { useThemeStore } from '@/stores/theme'

/**
 * theme
 */
const themeControl = useThemeStore()
const isDarkMode = ref(themeControl.theme === 'dark')
watch(
  () => themeControl.theme,
  newVal => {
    isDarkMode.value = newVal === 'dark'
  },
)
const themeIcon = computed(() => `pi ${isDarkMode.value ? 'pi-moon' : 'pi-sun'}`)
</script>
<style lang="scss" scoped>
.themeSwitch {
  position: relative;
  display: inline-flex;
  align-items: center;

  &__icon {
    position: absolute;
    left: 0.25rem;
    margin-left: 0.25rem;
    font-size: 0.75rem;
    color: var(--primary-color);
    transition-duration: 0.2s;
    pointer-events: none;
  }
}

// :root[data-theme='light'] {
//   .themeSwitch__icon {
//   }
// }

:root[data-theme='dark'] {
  .themeSwitch__icon {
    transform: translateX(1.25rem);
  }
}
</style>
