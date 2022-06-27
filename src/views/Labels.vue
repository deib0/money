<template>
<Layout> 
   <div class="tags">
      <router-link class="tag" v-for="u in tagList" :key="u.tagId" 
      :to="`/labels/editLabel/${u.tagId}`">
         <span>{{u.tagName}}</span>
         <Iconfont name="right"/>
      </router-link>
   </div>
       <div class="createTag-wrapper">
        <Button @click="createTag">新增标签</Button>
    </div>
</Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from 'vue-property-decorator'
import Button from '../components/Button.vue'
import store from "@/store/index2";
@Component({components:{Button}})
export default class Labels extends Vue {
tagList=store.fetchTagList()
createTag(){
    const newTag =prompt('请你输入新的标签吧')||''
    store.createTag(newTag)
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

</style>