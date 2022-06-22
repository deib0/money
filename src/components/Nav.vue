
<template>
        <div class="nav">
          <router-link to="/labels">
            labels<Icon :name="'labels'" />
            </router-link>|
          <router-link to="/money">            
            money<Icon :name="'money'" />
            </router-link> |
          <router-link to="/statistics">            
            statistics<Icon :name="'statistics'" />
            </router-link>
    </div>
</template>

<script lang="ts">
export default {
    name:'Nav',
    components:{Icon}
}
import Icon from '@/components/Icons.vue'
</script>
<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 1px solid green;
}
</style>