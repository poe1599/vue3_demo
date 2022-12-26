<template>
  <div>
    <h1>Components Demo</h1>
    <div>
      <h2>Button</h2>
      <p><button class="hollowButton">Hollow Button</button> <button class="solidButton">Solid Button</button></p>
    </div>

    <div>
      <h2>Svg</h2>
      <p>
        <SvgIcon class="attractions" name="zeelandia"></SvgIcon>
        <SvgIcon class="attractions" name="bicycle"></SvgIcon>
        <SvgIcon class="attractions" name="lamp"></SvgIcon>
        <SvgIcon class="attractions" name="museum"></SvgIcon>
        <SvgIcon class="attractions" name="queen"></SvgIcon>
        <SvgIcon class="attractions" name="bubbleTea"></SvgIcon>
        <SvgIcon class="attractions" name="ballon"></SvgIcon>
        <SvgIcon class="attractions" name="hotel"></SvgIcon>
      </p>
      <p>
        <SvgIcon class="icon" name="boldArrow"></SvgIcon>
        <SvgIcon class="icon" name="search"></SvgIcon>
        <SvgIcon class="icon" name="time"></SvgIcon>
        <SvgIcon class="icon" name="printer"></SvgIcon>
        <SvgIcon class="icon" name="call"></SvgIcon>
        <SvgIcon class="icon" name="share"></SvgIcon>
        <SvgIcon class="icon" name="location"></SvgIcon>
        <SvgIcon class="icon" name="chevron"></SvgIcon>
        <SvgIcon class="icon" name="sort"></SvgIcon>
        <SvgIcon class="icon" name="setting"></SvgIcon>
      </p>
      <p>
        <img src="@/assets/images/logo.svg" alt="logo" />
      </p>
    </div>

    <div>
      <h2>SearchInput</h2>
      <div>
        <SearchInput></SearchInput>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DemoIndex',
}
</script>
<script setup>
import SearchInput from '@/components/SearchInput.vue'
</script>
<style lang="scss" scoped>
.attractions {
  width: 64px;
  height: 64px;
  color: $primary-1;
}

.icon {
  width: 24px;
  height: 24px;
  color: $primary-1;
}
</style>
