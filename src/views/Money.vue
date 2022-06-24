<template>
<Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" v-on:saveRecord="onSaveRecord" />
    <Types :type.sync="record.type"/>
    <Notes v-on:update:value="onUpdateNotes"/>
    <Tags :dataSource.sync="tags" v-on:update:value="onUpdateTags" />
</Layout>
</template>

<script lang="ts">
import Model from '@/views/Model';
const recordList = Model.fetch();
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';
import Vue from 'vue';
import { Component,Watch } from 'vue-property-decorator';
@Component({components:{Tags,NumberPad,Types,Notes}})
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
  onUpdateNotes(notes:string){
this.record.notes=notes
  };
  onSaveRecord(){
      const record2: RecordItem = Model.copy(this.record);//  深拷贝
      this.recordList.push(record2);
  }
  @Watch('recordList')
      onRecordListChange() {
        Model.set(this.recordList)
    }
}
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>