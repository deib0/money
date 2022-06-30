	<template>
      <Button class="createTag" @click="$emit('click')">
        <slot></slot>
      </Button>
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
  }
	</style>
