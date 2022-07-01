<template>
  <div class="numberPad">
    <div class="output">{{output}}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button class="ok" @click="ok">完成</button>
      <button class="zero" @click="inputContent">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component,Prop} from "vue-property-decorator";
@Component
  export default class NumberPad extends Vue {
    @Prop() readonly value!:number
    output:string =this.value.toString()
    inputContent(event:MouseEvent){
    const button =(event.target as HTMLButtonElement)
    const input:string=(button.textContent!)
        if(this.output.length===16){return}
              if(this.output==='0'){
                if('0123456789'.indexOf(input)>=0){
                  this.output=input;
                }else{
                  this.output+=input;
                }
                return;
              }
              if(this.output.indexOf('.')>=0&&input==='.'){return;}
              this.output+=input;
    };
    remove(){
      if(this.output.length===1){
        this.output='0'
        return;
      }
      this.output=this.output.slice(0,-1)
    };
    clear(){
      this.output='0'
    };
    ok(){
      this.$emit('update:value',parseInt(this.output))
      this.$emit('saveRecord')
      this.clear()
    }
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .numberPad {
    .output {
      @extend %clearFix;
      @extend %innerShadow;
      color: #f55c58;
      min-height: 72px;
      font-size: 36px;
      font-family: Consolas, monospace;
      padding: 9px 16px;
      text-align: right;
    }
    .buttons {
      @extend %clearFix;
      > button {
        width: 25%;
        height: 50px;
        float: left;
        font-weight:800;
        font-size: 18px;
        background: transparent;
        border: 1px #e2e2e2 solid;
        &.ok {
          height: 50*2px;
          float: right;
          background: #49ad95;
        }
        &.zero {
          width: 25*2%;
        }
      }
    }
  }
</style>