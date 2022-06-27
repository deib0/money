type RecordItem={
    selectedTags:string[]
    notes:string
    type:string
    amount:number
    date:Date
  }
  type RecordStore={
    data:RecordItem[],
    fetchRecordList():RecordItem[],
    saveRecord(record:RecordItem):void
  }
  type Tag ={
    tagId:string,
    tagName:string
}
type TagStore={
  tagList:Tag[],
  fetchTagList():Tag[],
  createTag(newTag:string):void,
  saveTagList():void,
  updateTag(tagId:string,tagName:string):void
  removeTag(tagId:string):void
}
interface Window {
}