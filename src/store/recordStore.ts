const itemKey ='recordList'
const recordStore:RecordStore ={
    data:[],
    fetchRecordList(){
        this.data=JSON.parse(localStorage.getItem(itemKey)||'[]')
        return this.data
    },
    saveRecord(record:RecordItem){
        let record2 = JSON.parse(JSON.stringify(record))
        this.data.push(record2)
        localStorage.setItem(itemKey,JSON.stringify(this.data))
    }
}
export default recordStore