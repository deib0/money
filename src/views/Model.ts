const itemKey ='recordList'
const Model ={
    fetch(){
        return JSON.parse(localStorage.getItem(itemKey)||'[]') as RecordItem[]
    },
    copy(value:RecordItem[]|RecordItem){
        return JSON.parse(JSON.stringify(value)) as RecordItem
    }
    ,
    set(value:RecordItem[]){
        const string = JSON.stringify(value)
        localStorage.setItem(itemKey,string)
    }
}
export default Model