	<template>
    <Layout class="Layout">
        <div class="amount">
            <div class="out-amount">
                <h4>支出</h4>
                <p>{{inAmount}}</p>
                </div>
            <div class="in-amount">
                 <h4>收入</h4>
                <p>{{outAmount}}</p>
                </div>
            <div class="all-amount">
                 <h4>结余</h4>
                <p>{{allAmount}}</p>
                </div>
        </div>
        <div class="Echarts-wrapper">
        <Echarts class="Echarts" :option="option1" :type="'支出'" />
        <Echarts class="Echarts" :option="option2" :type="'收入'"/>
        </div>
    </Layout>
	</template>
	<script lang="ts">
    type Data = {name:string,value:number}[]
	import Vue from "vue";
    import Echarts from "../components/Echarts.vue";
    import store from "@/store/index";
	import { Component } from 'vue-property-decorator'
    @Component({components:{Echarts}})
	export default class Statistics extends Vue {
      get recordList(){        
      return store.state.recordList as RecordItem[]
      }
      get inAmount(){
        let amount =0.00
        let recordList =this.recordList.filter(item=>item.type==='收入')
        recordList.map(item=>amount+=item.amount)
        return amount
      }
      get outAmount(){
        let amount =0.00
        let recordList =this.recordList.filter(item=>item.type==='支出')
        recordList.map(item=>amount+=item.amount)
        return amount
      }
      get allAmount(){
        return this.inAmount-this.outAmount
      }
     get data1(){
            let recordList = this.recordList.filter(item=>item.type==='支出')
            let data:Data=[]
            recordList.map(
                (item)=>{
                    let names:string[] =[]
                    data.map(item2=>names.push(item2.name))
                    let name =item.selectedTags.join(',')
                    let index = names.indexOf(name)
                    if(index>0){
                        data[index].value+=item.amount
                    }else{
                        data.push({name:name,value:item.amount})
                    }
                }
            ) 
            return data
    }
            get data2(){
            let recordList = this.recordList.filter(item=>item.type==='收入')
            let data:Data=[]
            recordList.map(
                (item)=>{
                    let names:string[] =[]
                    data.map(item2=>names.push(item2.name))
                    let name =item.selectedTags.join(',')
                    let index = names.indexOf(name)
                    if(index>0){
                        data[index].value+=item.amount
                    }else{
                        data.push({name:name,value:item.amount})
                    }
                }
            ) 
            return data
    }
    created(){
        store.commit('fetchRecordList')      
    }
       get option1(){return {
        series: [
            {
            type: 'pie',
            data:this.data1
            }
        ]
        }} 
       get option2(){return {
        series: [
            {
            type: 'pie',
            data:this.data2
            }
        ]
        }
       } 
    }
	</script>
	<style lang="scss" scoped>
    .amount{
        display: flex;
        width: 90%;
        margin-left: 5%;
        height: 75px;
        border-radius: 10px;
        background: #49ad95;
        margin-top: 10px;
        div {
            width: 33.333%;
            height: 100%;
            text-align: center;
            padding-top: 10px;
            color: #ffffff;
            p {
                font-weight: 700;
            }
        }
    }
    .Echarts-wrapper{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 300px;
        .Echarts{
            margin-top: 40px;
        }
    }
    </style>