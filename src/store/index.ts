import Vue from 'vue'
import Vuex from 'vuex'
import createId from '../lib/createId';
Vue.use(Vuex)

const store= new Vuex.Store({
    state: {
      recordList:[] as RecordItem[],
      tagList:[] as Tag[]
    },
    mutations: {
      updateTag(state,[tagId,tagName]:string[]){
        let tagIds =state.tagList.map(item=>item.tagId);
        let index = tagIds.indexOf(tagId);
        if(index>=0){
            state.tagList[index].tagName=tagName
        }
        store.commit('saveTagList')
      },
      fetchRecordList(state){
        state.recordList=JSON.parse(localStorage.getItem('recordList')||'[]')
    },
      saveRecord(state,record:RecordItem){
        let record2 = JSON.parse(JSON.stringify(record))as RecordItem
        state.recordList.push(record2)
        localStorage.setItem('recordList',JSON.stringify(state.recordList))
    },
    fetchTagList(state){
      state.tagList=JSON.parse(localStorage.getItem('tagList')||'[]')  
    },
    createTag(state,newTag){
      if(newTag){
          let names =state.tagList.map(item=>item.tagName)
              if(names.indexOf(newTag)>=0){
                  alert('换一个名字把')
              }else{
                  let id= createId().toString()
                  let obj ={tagId:id,tagName:newTag}
                  state.tagList.push(obj)
                  store.commit('saveTagList')
                  alert('创建成功')
              }
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
      alert('删除成功')
    },
  },
  actions: {
  },
  modules: {
  }
})

export default store
