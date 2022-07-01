import router from '@/router';
import Vue from 'vue'
import Vuex from 'vuex'
import createId from '../lib/createId';
Vue.use(Vuex)

const store= new Vuex.Store({
    state: {
      recordList:[],
      tagList:[],
      tagListDefault:[
        {tagId:'1',tagName:'游戏',iconName:'game',type:'支出'},
        {tagId:'2',tagName:'美食',iconName:'food',type:'支出'},
        {tagId:'3',tagName:'教育',iconName:'education',type:'支出'},
        {tagId:'4',tagName:'购物',iconName:'shopping',type:'支出'},
        {tagId:'5',tagName:'出行',iconName:'traffic',type:'支出'},
        {tagId:'6',tagName:'送礼',iconName:'gift',type:'支出'},
        {tagId:'7',tagName:'啤酒',iconName:'beer',type:'支出'},
        {tagId:'8',tagName:'借钱',iconName:'borrow',type:'收入'},
        {tagId:'9',tagName:'奖金',iconName:'prize',type:'收入'},
        {tagId:'10',tagName:'礼金',iconName:'friend',type:'收入'},
        {tagId:'11',tagName:'出二手',iconName:'second',type:'收入'},
        {tagId:'12',tagName:'工资',iconName:'salary',type:'收入'},
        
      ]
    } as RootState,
    mutations: {
      updateTag(state,[tagId,tagName,iconName,type]){
        let tagNames= state.tagList.filter(item=>item.tagName===tagName)
        if(tagId==='0'){
          if(tagNames.length>0){
            alert('换一个名字吧')
          }else{
            tagId = createId().toString()
            const newTag = {tagId:tagId,tagName:tagName,iconName:iconName,type:type} 
            state.tagList.push(newTag)
            store.commit('saveTagList')
            router.back()
          }
      }else{
        if(tagNames.length>1){
          alert('换一个名字吧')
        }else{
          let tagIds =state.tagList.map(item=>item.tagId);
          let index = tagIds.indexOf(tagId);
          state.tagList[index].tagName=tagName
          state.tagList[index].iconName=iconName
          store.commit('saveTagList')
          router.back()
        }
      }
      },
      fetchRecordList(state){
        state.recordList=JSON.parse(localStorage.getItem('recordList')||'[]')
    },
      saveRecord(state,record:RecordItem){
        record.date=new Date().toISOString()
        let record2 = JSON.parse(JSON.stringify(record))as RecordItem
        state.recordList.push(record2)
        localStorage.setItem('recordList',JSON.stringify(state.recordList))
    },
    fetchTagList(state){
      if(localStorage.getItem('tagList')){
        state.tagList=JSON.parse(localStorage.getItem('tagList')!)
      }else{
        state.tagList=state.tagListDefault  
      }
    },
    saveTagList(state){
      localStorage.setItem('tagList',JSON.stringify(state.tagList))
    },
    removeTag(state,tagId){
      let tagIds =state.tagList.map(item=>item.tagId)
      let index = tagIds.indexOf(tagId)
      state.tagList.splice(index,1)
      store.commit('saveTagList') 
    },
  },
  actions: {
  },
  modules: {
  }
})

export default store
