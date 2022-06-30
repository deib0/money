import router from '@/router';
import Vue from 'vue'
import Vuex from 'vuex'
import createId from '../lib/createId';
Vue.use(Vuex)

const store= new Vuex.Store({
    state: {
      recordList:[],
      tagList:[]
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
      state.tagList=JSON.parse(localStorage.getItem('tagList')||'[]')  
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
