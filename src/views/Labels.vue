<template>
<Layout> 
   <ol class="tags">
      <li class="tag" v-for="u in tagList" :key="u.tagId">
         <span>{{u.tagName}}</span>
         <Iconfont name="right"/>
      </li>
   </ol>
       <div class="createTag-wrapper">
      <Button class="createTag" @click="createTag">
        新建标签
      </Button>
    </div>
</Layout>
</template>

<script lang="ts">
import Vue from "vue";
import tagListModel from '@/models/tagListModel';
import { Component } from 'vue-property-decorator'
@Component
export default class Labels extends Vue {
tagList=tagListModel.fetch()
createTag(){
  const newTag =prompt('请你输入新的标签吧')
  if(newTag){
  const message= tagListModel.create(newTag)
  if(message==='duplicated'){alert('已经有这个标签了，换一个把')}
  else if(message === 'success'){alert('创建成功~')}
  }
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
  .createTag {
    background: #767676;
    color: white;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 16px;
    &-wrapper {
      text-align: center;
      padding: 16px;
      margin-top: 44-16px;
    }
  }

</style>