const itemKey ='recordList'
const recordListModel:RecordListModel ={
    data:[],
    fetch(){
        this.data=JSON.parse(localStorage.getItem(itemKey)||'[]')
        return this.data
    },
    saveRecord(value){
        let value2 = JSON.parse(JSON.stringify(value))
        this.data.push(value2)
        localStorage.setItem(itemKey,JSON.stringify(this.data))
    }
}
export default recordListModel