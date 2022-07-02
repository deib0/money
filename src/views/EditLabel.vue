<template>
<Layout>
    <div class="navBar">
      <Iconfont class="leftIcon" name="left" @click="getBack" />
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="input-wrapper">
      <TextInput 
    inputTitle="标签名" placeHolder="请输入标签名" 
    :value.sync="tagName"/>
    </div>
    <div class="icons">
      <div class="head">
        <div class="select-icon">
                  选择图标
        </div>
        <div class="types">
        <p :class="type==='支出'?'selected-type':''"
        @click="type='支出'"
        >支出</p>
        <p :class="type==='收入'?'selected-type':''"
        @click="type='收入'"
        >收入</p>   
        </div>
      </div>
      <div class="icon-wrapper" 
      v-for="u in icons" :key="u.iconName" >
      <Iconfont  class="icon" @click="toggle(u.iconName)" 
      :class="selectedIcon.indexOf(u.iconName)>=0?'selected':''" :name="u.iconName"/>
      </div>
    </div>
    <div class="button-wrapper" >
            <Button @click="updateTag" class="button">完成</Button>
            <Button v-if="tagId !=='0'"
            @click="removeTag" class="removeTag button">删除</Button>
    </div>
</Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from 'vue-property-decorator'
import TextInput from '../components/Money/TextInput.vue'
import Button from '../components/Button.vue'
@Component({components:{TextInput,Button}})
export default class Labels extends Vue {
    tagId=''
    tagName=''
    get icons(){
      return this.iconBase.filter(item=>item.type===this.type)
      }
    type ='支出'
    get tagList(){
      return this.$store.state.tagList as Tag[]
    }
    get iconBase(){
      return this.$store.state.iconBase as Icon[]
    }
    selectedIcon='food'
    toggle(iconName:string){
      this.selectedIcon=iconName
    }
  created(){
    
    this.$store.commit('fetchTagList')
    this.tagId = this.$route.params.id
    if(this.tagId!=='0'){
    let tagName =this.tagList.filter(item=>item.tagId===this.tagId)[0].tagName
    this.tagName=tagName
    }
    };
  updateTag(){
    this.$store.commit('updateTag',[this.tagId,this.tagName,this.selectedIcon,this.type])
  };
    removeTag(){
    this.$store.commit('removeTag',this.tagId)
    this.$router.back()
    };
    getBack(){
      this.$router.back()
    }
}
</script>
<style lang="scss" scoped>
 .navBar {
    text-align: center;
    font-size: 16px;
    padding: 12px 16px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > .leftIcon {
      width: 24px;
      height: 24px;
    }
    > .rightIcon {
      width: 24px;
      height: 24px;
    }
  }
  .input-wrapper{
    margin-top: 8px;
    background-color: #ffffff;
  }
  .icons {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    background: #ffffff;
    .head {
      padding: 5px 16px;
      font-size: 16px;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content:space-between;
      .select-icon{
        width: 6em;
      }
      .types{
        display: flex;
      flex-direction: row;
      justify-content:space-between;
        width: 6em;
        border-radius: 3px;
        border: 1px solid #4aac93;
        p {
          width: 3em;
          text-align: center;
          background: #edf6f5;
          font-weight: 700;
          &.selected-type{
            background: #4aac93;
            color: #ffffff;
          }
        }
      }
    }
    .icon-wrapper{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 20%;
      height: 80px;
    .icon {
      width: 60%;
      height: 40px;
      border-radius: 50%;
      &.selected{
      background: #a4d6c8;

      }
    }
    }

  }
  .button-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: center;
    .button {
      margin: 50px 20px;
    }

  }
  ::v-deep .removeTag {
      background: #f55c58;
  } 
</style>