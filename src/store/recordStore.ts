import recordListModel from "@/models/recordListModel"
const recordStore ={
    recordList:recordListModel.fetch(),
    saveRecord(record:RecordItem){
        recordListModel.saveRecord(record)
    }
}
export default recordStore