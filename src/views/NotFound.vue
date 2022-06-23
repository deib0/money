<template>
  <div>
    <div>当前页面不存在，请检查网址是否正确</div>
    <div>
      <router-link class="index" to="/">返回首页</router-link>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'NotFound'
  };
</script>

<style lang="scss" scoped>
</style>