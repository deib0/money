<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <ul class="current"> 
      <li v-for="tag in dataSource" :key="tag"
      :class="selectedTags.indexOf(tag)>=0?'selected':''"
      @click="toggle(tag)"
      >{{tag}}</li>
    </ul>
  </div>

</template>

<script lang="ts">
import Vue from "vue";
import {Component,Prop} from 'vue-property-decorator'
@Component
export default class Tags extends Vue {
  @Prop() dataSource: string[]|undefined;
  selectedTags:string[]=[];
  toggle(tag:string){
    const index=this.selectedTags.indexOf(tag)
        if(index>=0){
        this.selectedTags.splice(index,1)   
        }else{
    this.selectedTags.push(tag)
        }
        this.$emit('update:value',this.selectedTags)
  };
  create(){
    const tag=prompt('请输入新的标签')
    if(tag===''){
      alert('标签名不能为空')
      return}
    else if(this.dataSource){
      this.$emit('update:dataSource',[...this.dataSource,tag])
    }
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