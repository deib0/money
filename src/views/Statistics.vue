<template>
    <Layout>
        <Tabs class="money"
        :types="moneyTypes" :selectedType.sync="moneySelectedType" />
        <Tabs class="date"
        :types="dataTypes" :selectedType.sync="dateSelectedType" />
    </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from 'vue-property-decorator'
import Tabs from '../components/Tabs.vue';
import Layout from "@/components/Layout.vue";
@Component({components:{Tabs,Layout}})
export default class Statistics extends Vue {
    moneyTypes=['支出','收入']
    moneySelectedType='支出'
    dataTypes=['按天','按周','按月']
    dateSelectedType='按天'
}
</script>
<style lang="scss" scoped>

::v-deep .money{
    .types{
    background:#f4f4f4;
    }
    .selected{
    background: #c4c4c4;
    &::after{
        display: none;
    }
}
}
::v-deep .date{
    >.types>li{
        height: 48px;
    }
}


</style>