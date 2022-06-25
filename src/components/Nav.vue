
<template>
        <nav>
          <router-link to="/labels" class="item" active-class="selected">
            labels<Iconfont :name="'labels'"  />
            </router-link>|
          <router-link to="/money" class="item" active-class="selected">            
            money<Iconfont :name="'money'" />
            </router-link> |
          <router-link to="/statistics" class="item" active-class="selected">            
            statistics<Iconfont :name="'statistics'" />
            </router-link>
    </nav>
</template>

<script lang="ts">
export default {
    name:'Nav'
}
</script>
<style lang="scss" scoped>
  nav {
    display: flex;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    flex-direction: row;
    font-size: 12px;
    > .item {
      color:black;
      padding: 2px 0;
      width: 33.33333%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .icon {
        width: 32px;
        height: 32px;
      }
    }
    > .item.selected{
      color: red;
    }
  }
</style>