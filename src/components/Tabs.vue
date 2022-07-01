<template>
  <div>
    <ul class="types">
      <li v-for="u in types" :key="u" 
      :class="u===selectedType?'selected':''"
      @click="changeType"
      >{{u}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  @Component
  export default class Tabs extends Vue {
   @Prop()selectedType:string|undefined
   @Prop()types:[]|undefined
   changeType($event:MouseEvent){
    let el=$event.target as HTMLElement
    this.$emit('update:selectedType',el.textContent)
   }
  }
</script>

<style lang="scss" scoped>
  .types {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 20px;
    > li {
      width: 30%;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #4dab93;
      }
    }
  }
</style>