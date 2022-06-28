<template>
<Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" v-on:saveRecord="onSaveRecord" />
    <Tabs class="money"
    :types="types" :selectedType.sync="record.type" />
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
  import TextInput from '@/components/Money/TextInput.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Tabs from '@/components/Tabs.vue';
import Vue from 'vue';
import { Component} from 'vue-property-decorator';
@Component({components:{Tags,NumberPad,Tabs,TextInput},
})
export default class Money extends Vue {
  get recordList(){
    return this.$store.state.recordList
  }
  get tags(){
    return this.$store.state.tagList
  }
  types=['支出','收入']
  record:RecordItem={
  selectedTags:[],
  notes:'',
  type:'支出',
  amount:0,
  date:new Date()
  };
  onCreateTag($event:string){
    this.$store.commit('createTag',$event)
  };
  created(){
        this.$store.commit('fetchRecordList')
        this.$store.commit('fetchTagList')
  }
  onSaveRecord(){
    this.$store.commit('saveRecord',this.record)
  }
}
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>