
<template>
        <nav>
          <router-link to="/labels" class="item" active-class="selected">
            <Iconfont :name="'labels'"  />
            </router-link>
          <router-link to="/money" class="item" active-class="selected">            
            <Iconfont :name="'money'" />
            </router-link>
          <router-link to="/account" class="item" active-class="selected">            
            <Iconfont :name="'account'" />
            </router-link>
            <router-link to="/statistics" class="item" active-class="selected">            
            <Iconfont :name="'statistics'" />
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
      color:#959595;
      padding: 10px 0;
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      &:active{
        background: #c9c9c9;
      }
      .icon {
        width: 38px;
        height: 32px;
      }
    }
    > .item.selected{
      color: #4ca98f;
    }
  }
</style>