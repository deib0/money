<template>
<Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" v-on:saveRecord="onSaveRecord" />
    <Types :type.sync="record.type"/>
    <Notes v-on:update:value="onUpdateNotes"/>
    <Tags :dataSource.sync="tags" v-on:update:value="onUpdateTags" />
</Layout>
</template>

<script lang="ts">
type Record={
  tags:string[]
  notes:string
  type:string
  amount:number
}
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
@Component({components:{Tags,NumberPad,Types,Notes}})
export default class Money extends Vue {
  tags=['衣','食','住','行','电动'];
  record:Record={
    tags:[],
  notes:'',
  type:'-',
  amount:0,
  };
  onUpdateTags(tags:string[]){
    this.record.tags=tags
  };
  onUpdateNotes(notes:string){
this.record.notes=notes
  };
  onSaveRecord(){
    console.log(this.record);
  }
}
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>