<template>
  <div class="layout">
    <div class="layout__container">
      <div ref="menu" class="layout__side" :class="{ 'layout__side--open': isMenuOpen }"></div>
      <div class="layout__main">
        <div class="layout__head">
          <button class="layout__setting" @click="isMenuOpen = !isMenuOpen">
            <SvgIcon name="setting"></SvgIcon>
          </button>
          <img src="@/assets/images/logo.svg" alt="logo" />
        </div>
        <div class="layout__body">
          <router-view></router-view>
        </div>
        <div class="layout__foot">TAIWAN TRAVEL</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MainLayout',
}
</script>
<script setup>
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

const isMenuOpen = ref(false)
const menu = ref(null)

onClickOutside(menu, () => {
  isMenuOpen.value = false
})
</script>
<style lang="scss" scoped>
$head-h: 56px;
$foot-h: 36px;

.layout {
  position: relative;
  width: 100%;
  min-height: 100vh;

  &__container {
    width: 100%;
    @include laptop {
      padding-left: 354px;
    }
  }

  &__side {
    position: fixed;
    left: -100%;
    width: 100%;
    max-width: 354px;
    height: 100vh;
    background: $white;
    z-index: $z-index-modal-backdrop;
    box-shadow: $shadow;
    transition: 0.3s;

    @include laptop {
      left: 0;
    }

    &--open {
      left: 0;
    }
  }

  &__main {
    width: 100%;
  }

  &__head {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: $head-h;
    text-align: center;
    border-bottom: 1px solid $gray;
    box-shadow: $shadow;

    img {
      display: block;
      height: 40px;
    }
  }

  &__setting {
    position: absolute;
    left: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    color: $primary-1;
    background: $primary-2;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  &__body {
    padding: 24px 0 80px;
    width: 100%;
    min-height: calc(100vh - $head-h - $foot-h);
  }

  &__foot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: $foot-h;
    font-size: $fz-s;
    text-align: center;
    color: $white;
    background: $primary-1;
  }
}
</style>
