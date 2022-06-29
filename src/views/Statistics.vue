<template>
    <Layout>
        <Tabs class="money"
        :types="moneyTypes" :selectedType.sync="moneySelectedType" />        
        <ol>
            <li v-for="(value,name) in result" :key="name"> 
            <h3 class="title">{{name}}</h3> 
            <ol>
                <li v-for="(u,index) in value" :key="index" 
                class="record">
                <span>{{u.selectedTags}}</span>
                <span>{{u.notes}}</span>
                <span>￥{{u.amount}}</span>
                </li>
            </ol>
            </li>
        </ol>
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
hashTable={}
get recordList(){return this.$store.state.recordList}
get result(){
    const hashTable:{[key:string]:RecordItem[]} = {}
    const {recordList}=this
    for(let i=1; i<recordList.length;i++){
        let [day,time] = recordList[i].date.split('T')
        hashTable[day]=hashTable[day]||[]
        hashTable[day].push(recordList[i])
    }
    return hashTable

}
created(){
    this.$store.commit('fetchRecordList')
}

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
  %u {
    padding: 8px 16px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .title {
    @extend %u;
  }
  .record {
    background: white;
    @extend %u;
  }
  .notes {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }

</style>