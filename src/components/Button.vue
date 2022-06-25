	<template>
    <div class="createTag-wrapper">
      <Button class="createTag" @click="$emit('click')">
        <slot></slot>
      </Button>
    </div>
	</template>
	<script lang="ts">
	import Vue from "vue";
	import { Component } from 'vue-property-decorator'
	@Component
	export default class Labels extends Vue {}
	</script>
	<style lang="scss" scoped>
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
