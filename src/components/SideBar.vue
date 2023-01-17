<template>
  <div class="sideBar">
    <div class="sideBar__container">
      <div class="sideBar__logo"></div>
      <div class="sideBar__location">
        <AreaSelector v-model="area.val"></AreaSelector>
      </div>
      <div class="sideBar__search">
        <SearchInput v-model="keyword.val"></SearchInput>
      </div>
      <div class="sideBar__theme">
        <strong>精選主題</strong>
        <ul class="sideBar__themeList">
          <li v-for="i in theme.list" :key="i.desc">
            <button>
              <div class="sideBar__themeIcon" :style="{ background: i.color }">
                <SvgIcon :name="i.iconName"></SvgIcon>
              </div>
              <div class="sideBar__themeDesc">{{ i.desc }}</div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SideBar',
}
</script>
<script setup>
import { reactive } from 'vue'
import AreaSelector from '@/components/AreaSelector.vue'
import SearchInput from '@/components/SearchInput.vue'

const area = reactive({
  val: [],
})

const keyword = reactive({
  val: '',
})

const theme = reactive({
  val: '',
  list: [
    { iconName: 'zeelandia', desc: '歷史文化', id: '', color: '#3FB195' },
    { iconName: 'bicycle', desc: '戶外踏青', id: '', color: '#C499FF' },
    { iconName: 'lamp', desc: '宗教巡禮', id: '', color: '#FF9999' },
    { iconName: 'museum', desc: '親子活動', id: '', color: '#64C5E3' },
    { iconName: 'queen', desc: '風景區', id: '', color: '#81A4FF' },
    { iconName: 'bubbleTea', desc: '美食品嘗', id: '', color: '#FD975E' },
    { iconName: 'ballon', desc: '住宿推薦', id: '', color: '#C17B53' },
    { iconName: 'hotel', desc: '觀光活動', id: '', color: '#8FCA6B' },
  ],
})
</script>
<style lang="scss" scoped>
.sideBar {
  padding: 40px 24px;

  &__logo {
    margin-bottom: 24px;
    width: 100%;
    height: 48px;
    background: no-repeat left url('@/assets/images/logo.svg');
    background-size: contain;
    cursor: pointer;
  }

  &__location,
  &__search {
    margin-bottom: 24px;
  }

  &__theme {
    padding: 24px 0;
    border-top: 1px solid $line;

    strong {
      display: block;
      margin-bottom: 24px;
      font-size: $fz-l;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      list-style: none;
      gap: 12px 16px;
    }

    li {
      flex: 1 1 40%;
      padding: 8px;
      text-align: center;
    }
  }

  &__themeIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 auto;
    margin: auto auto 8px;
    width: 70px;
    height: 70px;
    border-radius: 50%;

    svg {
      width: 40px;
      height: 40px;
      color: $white;
    }
  }
}
</style>
