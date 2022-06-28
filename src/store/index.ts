import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recordList:[] as RecordItem[]
  },
  mutations: {
    fetchRecordList(state){
      state.recordList=JSON.parse(localStorage.getItem('recordList')||'[]')
      return this.recordList
  },
    saveRecord(state,record:RecordItem){
      let record2 = JSON.parse(JSON.stringify(record))as RecordItem
      state.recordList.push(record2)
      localStorage.setItem('recordList',JSON.stringify(state.recordList))
  }
  },
  actions: {
  },
  modules: {
  }
})
