<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current"> 
      <li v-for="u in tags" :key="u.tagName" 
      @click="toggle(u.tagName)" 
      :class="selectedTags.indexOf(u.tagName)>=0?'selected':''" >
      {{u.tagName}}</li>
    </ul>
  </div>

</template>

<script lang="ts">
import Vue from "vue";
import {Component,Prop} from 'vue-property-decorator'
@Component
export default class Tags extends Vue {
  @Prop() tags: Tag[]|undefined
  selectedTags:string[]=[]
  createTag(){
    const tagName=prompt('请输入标签名')
    if(tagName===''){return}
    this.$emit('update:newTag',tagName)
  }
  toggle(tagName:string){
    let index=this.selectedTags.indexOf(tagName)
    if(index>=0){
      this.selectedTags.splice(index,1)
    }else{
      this.selectedTags.push(tagName)
    }
    this.$emit('update:selectedTag',this.selectedTags)
  } 
}
</script>

<style lang="scss" scoped>
  .tags {
    font-size: 14px;
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
    > .current {
      display: flex;
      flex-wrap: wrap;
      > li {
        background: #d9d9d9;
        $h: 24px;
        height: $h;
        line-height: $h;
        border-radius: calc($h/2);
        padding: 0 16px;
        margin-right: 12px;
        margin-top: 4px;
        &.selected {
          background: #000;
          color: white;
        }
      }
    }
    > .new {
      padding-top: 16px;
      button {
        background: transparent;
        border: none;
        color: #999;
        border-bottom: 1px solid;
        padding: 0 4px;
      }
    }
  }
</style>