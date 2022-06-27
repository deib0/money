<template>
<Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" v-on:saveRecord="onSaveRecord" />
    <Types :type.sync="record.type"/>
    <TextInput v-on:update:value="record.notes=$event" :value="record.notes"  
    inputTitle="备注" placeHolder="请输入备注" />
    <Tags 
    :tags="tags" v-on:update:newTag="onCreateTag"
    v-on:update:selectedTag="record.selectedTags=$event"

    />
</Layout>
</template>

<script lang="ts">
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import TextInput from '@/components/Money/TextInput.vue';
  import Tags from '@/components/Money/Tags.vue';
import Vue from 'vue';
import { Component} from 'vue-property-decorator';
import store from '@/store/index2';
@Component({components:{Tags,NumberPad,Types,TextInput}})
export default class Money extends Vue {
  tags=store.fetchTagList()
  record:RecordItem={
  selectedTags:[],
  notes:'',
  type:'-',
  amount:0,
  date:new Date()
  };
  recordList=store.fetchRecordList()
  onCreateTag($event:string){
    store.createTag($event)
  }
  onSaveRecord(){
    store.saveRecord(this.record)
  }
}
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>