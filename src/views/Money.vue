<template>
<Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" v-on:saveRecord="onSaveRecord" />
    <Types :type.sync="record.type"/>
    <TextInput v-on:update:value="record.notes=$event" :value="record.notes"  
    inputTitle="备注" placeHolder="请输入备注" />
    <Tags :dataSource.sync="tags" v-on:update:value="onUpdateTags" />
</Layout>
</template>

<script lang="ts">
import recordListModel from '@/models/recordListModel';
const recordList = recordListModel.fetch();
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import TextInput from '@/components/Money/TextInput.vue';
  import Tags from '@/components/Money/Tags.vue';
import Vue from 'vue';
import { Component,Watch } from 'vue-property-decorator';
@Component({components:{Tags,NumberPad,Types,TextInput}})
export default class Money extends Vue {
  tags=['衣','食','住','行','电动'];
  record:RecordItem={
    tags:[],
  notes:'',
  type:'-',
  amount:0,
  date:new Date()
  };
  recordList=recordList
  onUpdateTags(tags:string[]){
    this.record.tags=tags
  };
  onSaveRecord(){
      const record2: RecordItem = recordListModel.copy(this.record);//  深拷贝
      this.recordList.push(record2);
  }
  @Watch('recordList')
      onRecordListChange() {
        recordListModel.set(this.recordList)
    }
}
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>