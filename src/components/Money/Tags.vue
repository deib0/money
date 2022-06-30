<template>
  <div class="tags">
    <ul class="current"> 
      <li v-for="u in tags" :key="u.tagName" 
      @click="toggle(u.tagName)" 
      :class="selectedTags.indexOf(u.tagName)>=0?'selected':''" >
      <div class="icon">
        <Iconfont name="money"  class="iconfont"/>
      </div>
        <span class="tagname">{{u.tagName}}</span></li>
    </ul>
      <div class="new">
        <button @click="createTag">
      <div class="icon">
        <Iconfont name="money"  class="iconfont"/>
      </div>
      <span class="tagname">新增标签</span>
      </button>
    </div>
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
    border: 1px solid #000;
    display: flex;
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    > .current {
      display: flex;
      flex-wrap: wrap;
      > li {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 70px;
        width: 60px;
        text-align: center;
        margin-right: 12px;
        margin-top: 4px;
        &.selected .icon{
          background: #a4d6c8;
        }
        &.selected .tagname{
          color: #000000;
        }
      }
    }
    .icon {
          .iconfont {
            width: 30px;
            height: 30px;
          }
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #f4f4f4;
        }
        .tagname {
      line-height: 30px;
      font-size: 14px;
      font-weight: 700;
      overflow: hidden;
      color: #999999;
    }
    > .new {
      button {
        background: #f4f4f4;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        margin-top: 4px;
        height: 70px;
        width: 60px;
        border: none;
      }
    }
  }
</style>