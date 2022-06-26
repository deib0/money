<template>
  <div>
    <label class="notes">
      <span class="name">{{inputTitle}}</span>
      <input type="text" :placeHolder="placeHolder" 
      @input="onChangeValue($event.target.value)" :value="value" />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component,Prop, Watch} from "vue-property-decorator";
@Component
  export default class TextInput extends Vue {
    @Prop() readonly inputTitle!:string
    @Prop() readonly placeHolder!:string
    @Prop() readonly value!:string
    onChangeValue(value:string){
      this.$emit('update:value',value)
    }
}
</script>

<style lang="scss" scoped>
  .notes {
    font-size: 14px;
    background: inherit;
    padding-left: 16px;
    display: flex;
    align-items: center;
    .name {
      padding-right: 16px;
    }
    input {
      height: 64px;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }
</style>