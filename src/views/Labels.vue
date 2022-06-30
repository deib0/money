<template>
<Layout> 
   <div class="tags">
      <router-link class="tag" v-for="u in tagList" :key="u.tagId" 
      :to="`/labels/editLabel/${u.tagId}`">
         <span>{{u.tagName}}</span>
         <Iconfont name="right"/>
      </router-link>
   </div>
   <router-link :to="`/labels/editLabel/0`" class="button-wrapper">
        <Button class="button">新增标签</Button>
    </router-link>
</Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from 'vue-property-decorator'
import Button from '../components/Button.vue'
import Tabs from '../components/Tabs.vue';
@Component({components:{Button,Tabs}})
export default class Labels extends Vue {
get tagList(){
  return this.$store.state.tagList
}
created(){
  this.$store.commit('fetchTagList')
}
}
</script>

<style lang="scss" scoped>
.tags {
    background: white;
    font-size: 16px;
    padding-left: 16px;
    > .tag {
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e6e6e6;
      svg {
        width: 18px;
        height: 18px;
        color: #666;
        margin-right: 16px;
      }
    }
  }
  .button-wrapper{
    display: flex;
    font-display: row;
    justify-content: center;
    padding: 100px;
  }

</style>