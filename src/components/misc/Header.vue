<template>
  <header class="header">
    <div class="header__container">
      <router-link class="header__logo" :to="{ name: 'index' }"></router-link>
      <div class="header__group">
        <nav class="header__nav">
          <router-link class="header__link" :to="{ name: 'index' }">探索景點</router-link>
          <router-link class="header__link" :to="{ name: 'index' }">探索景點</router-link>
          <router-link class="header__link" :to="{ name: 'index' }">探索景點</router-link>
        </nav>
        <ThemeSwitch></ThemeSwitch>
      </div>
    </div>
  </header>

  <div class="sideBarGroup" :class="{ 'sideBarGroup--isOpen': isMenuOpen }">
    <div class="sideBarGroup__modal" @click="toggleMenuOpen"></div>
    <div class="sideBar">
      <div class="sideBar__head">
        <router-link class="sideBar__logo" :to="{ name: 'index' }"></router-link>
      </div>
      <nav class="sideBar__nav">
        <router-link class="sideBar__link" :to="{ name: 'index' }">探索景點</router-link>
        <router-link class="sideBar__link" :to="{ name: 'index' }">探索景點</router-link>
        <router-link class="sideBar__link" :to="{ name: 'index' }">探索景點</router-link>
      </nav>
      <div class="sideBar__foot">
        <ThemeSwitch></ThemeSwitch>
      </div>
    </div>
    <Button class="sideBarGroup__menuButton" :icon="menuIcon" aria-label="menu" @click="toggleMenuOpen"></Button>
  </div>
</template>
<script>
export default {
  name: 'HeaderComponent',
}
</script>
<script setup>
import { computed, ref } from 'vue'
import ThemeSwitch from '@/components/misc/ThemeSwitch.vue'

const isMenuOpen = ref(false)

const toggleMenuOpen = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const menuIcon = computed(() => `pi ${isMenuOpen.value ? 'pi-times' : 'pi-align-right'}`)
</script>
<style lang="scss" scoped>
@mixin sidebar-transition {
  transition-duration: 0.3s;
  transition-timing-function: ease;
}

.header {
  padding: 0.5rem;
  width: 100%;
  height: 4rem;
  background: var(--surface-ground);
  @include crosswise {
    position: fixed;
    top: 0;
    left: 0;
    padding: 0.5rem 3rem;
    height: 5rem;
    border-bottom: 1px solid var(--surface-border);
    z-index: $z-index-fixed;
  }

  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    @include crosswise {
      justify-content: space-between;
      margin: auto;
      max-width: var(--crosswise-container-max-width);
    }
  }

  &__logo {
    width: 7.5rem;
    height: 1.875rem;
    background-color: var(--primary-color);
    mask: url('@/assets/images/logo.svg') no-repeat center;
    mask-size: contain;
  }

  &__group {
    display: none;
    @include crosswise {
      display: flex;
      align-items: center;
      line-height: 1;
    }
  }

  &__nav {
    display: flex;
    padding: 0 0.5rem;
  }

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0.5rem;
    font-size: 1.25rem;
    text-align: center;
    text-decoration: none;
    color: var(--primary-color);

    &:hover {
      color: var(--highlight-text-color);
    }
  }
}

.sideBarGroup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: $z-index-fixed - 1;
  @include crosswise {
    display: none;
  }

  &__modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px);
    opacity: 0;
    pointer-events: none;
    @include sidebar-transition;
  }

  &__menuButton {
    position: fixed;
    top: 0.5rem;
    right: 0.5rem;
    height: 3rem;

    :deep(.pi) {
      font-size: 1.25rem;
    }
  }
}

.sideBar {
  position: absolute;
  top: 0;
  right: -100%;
  overflow: hidden;
  padding-bottom: 2rem;
  width: 17.25rem;
  background: var(--surface-section);
  border-radius: 0 0 0 1rem;
  @include sidebar-transition;

  &__head {
    display: flex;
    align-items: center;
    padding: 0 2rem;
    height: 4rem;
  }

  &__logo {
    width: 7.5rem;
    height: 1.875rem;
    background-color: var(--primary-color);
    mask: url('@/assets/images/logo.svg') no-repeat center;
    mask-size: contain;
  }

  &__nav {
    padding: 0 0.5rem;
  }

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0;
    font-size: 1.25rem;
    text-align: center;
    text-decoration: none;
    color: var(--primary-color);

    &:hover {
      color: var(--highlight-text-color);
    }
  }

  &__link:not(:last-child) {
    border-bottom: 1px solid var(--primary-color);
  }

  &__foot {
    padding: 0 0.5rem;
    text-align: center;
  }
}

.sideBarGroup--isOpen {
  .sideBarGroup {
    &__modal {
      opacity: 1;
      pointer-events: auto;
    }
  }

  .sideBar {
    right: 0;
  }
}
</style>
