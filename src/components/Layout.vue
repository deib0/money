<template>
  <div ref="wrapper" class="layout-wrapper" :class="classPrefix && `${classPrefix}-wrapper`">
    <div class="content" :class="classPrefix && `${classPrefix}-content`   ">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>
<script >
export default {
    name:'Layout',
    props: ['classPrefix'],
    mounted(){
        const height = document.documentElement.clientHeight;
        (this.$refs.wrapper).style.height=`${height}px`;    }
}
</script>
<style lang="scss" scoped>
  .layout-wrapper {
    display: flex;
    flex-direction: column;
  }
  .content {
    overflow: auto;
    flex-grow: 1;
  }
</style>