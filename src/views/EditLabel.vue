<template>
<Layout>
    <div class="navBar">
      <Iconfont class="leftIcon" name="left"/>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="input-wrapper">
      <TextInput 
    inputTitle="标签名" placeHolder="请输入标签名" class="input" />
    </div>
    <div class="button-wrapper">
      <Button>删除标签</Button>
    </div>
</Layout>
</template>

<script lang="ts">
import tagListModel from "@/models/tagListModel";
import Vue from "vue";
import { Component } from 'vue-property-decorator'
import TextInput from '../components/Money/TextInput.vue'
import Button from '../components/Button.vue'
@Component({components:{TextInput,Button}})
export default class Labels extends Vue {
created(){
    const id = this.$route.params.id
    tagListModel.fetch()
    const tags =tagListModel.data
    const tag = tags.filter(item=>item.tagId===id)[0]
    if(tag){console.log(tag);
    }else{
        this.$router.replace('/404')
    }
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
  .button-wrapper{
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
</style>