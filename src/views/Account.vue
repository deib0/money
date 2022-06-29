<template>
    <Layout>
        <Tabs class="money"
        :types="moneyTypes" :selectedType.sync="moneySelectedType" />        
        <ol>
            <li v-for="(u,index) in result" :key="index"> 
            <h3 class="title">{{showDay(u.title)}}<span>￥{{showTotal(u.items)}}</span></h3> 
            <ol>
                <li v-for="(u2,index2) in u.items" :key="index2" 
                class="record">
                <span>{{showTags(u2.selectedTags)}}</span>
                <span>{{u2.notes}}</span>
                <span>￥{{u2.amount}}</span>
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
import dayjs from 'dayjs';
@Component({components:{Tabs,Layout}})
export default class Account extends Vue {
    moneyTypes=['支出','收入']
    moneySelectedType='支出'
hashTable={}
get recordList(){return (this.$store.state as RootState).recordList}
get result(){
        const {recordList}=this
        const recordList2 = recordList.filter((item)=>item.type===this.moneySelectedType)
        .sort((a, b) => dayjs(b.date).valueOf() - dayjs(a.date).valueOf());
    type HashTable ={title:string,total?:number,items:RecordItem[]}[]
    const hashTable:HashTable=[{title:dayjs(recordList2[0].date).format('YYYY-MM-DD'),items:[recordList2[0]]}]
    for(let i=1; i<recordList2.length;i++){
        const current =recordList2[i]
        const last = hashTable[hashTable.length-1]
        if(dayjs(last.title).isSame(dayjs(current.date),'day')){
            last.items.push(current)
        }else{
            hashTable.push({title:dayjs(current.date).format('YYYY-MM-DD'),items:[current]})
        }
    }
    return hashTable

}
showTags(tags:string[]){
    let string ='无'
    if(tags.length>0){
     string=tags.join(',')
    }
    return string
}
showDay(date:string|number){
    let now = dayjs()
    if(dayjs(date).isSame(now,'day')){
        return '今天'
    }else if(dayjs(date).isSame(now.subtract(1,'day'),'day')){
        return '昨天'
    }else if(dayjs(date).isSame(now.subtract(2,'day'),'day')){
        return '前天'
    }
    else{
        return date
    }
}
showTotal(items:RecordItem[]){
    let amount = 0
    items.map(item=>amount+=item.amount)
    return amount
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