const itemKey ='recordList'
const recordStore:RecordStore ={
    recordList:[],
    fetchRecordList(){
        this.recordList=JSON.parse(localStorage.getItem(itemKey)||'[]')
        return this.recordList
    },
    saveRecord(record:RecordItem){
        let record2 = JSON.parse(JSON.stringify(record))
        this.recordList.push(record2)
        localStorage.setItem(itemKey,JSON.stringify(this.recordList))
    }
}
export default recordStore