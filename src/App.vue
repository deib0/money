<template>
  <div id="app">
        <router-view/>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="scss">
  @import "~@/assets/style/helper.scss";
  @import "~@/assets/style/reset.scss";
  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    background: #f4f4f4;
    font-family: $font-hei;
    font-size: 16px;
    line-height: 1.5;
  }
</style>
