	<template>
    <Layout class="Layout">
        <Echarts class="Echarts" :option="option" />
    </Layout>
	</template>
	<script lang="ts">
	import Vue from "vue";
	import { Component } from 'vue-property-decorator'
    import Echarts from "../components/Echarts.vue";
    @Component({components:{Echarts}})
	export default class Statistics extends Vue {
        option = {
        series: [
            {
            type: 'pie',
            data: [
                {
                value: 335,
                name: '直接访问'
                },
                {
                value: 234,
                name: '联盟广告'
                },
                {
                value: 1548,
                name: '搜索引擎'
                }
            ]
            }
        ]
        }
    }
	</script>
	<style lang="scss" scoped>
    </style>