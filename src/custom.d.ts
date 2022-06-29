type RecordItem={
    selectedTags:string[]
    notes:string
    type:string
    amount:number
    date:string
  }
  type Tag ={
    tagId:string,
    tagName:string
}
type RootState={
  recordList:RecordItem[]
  tagList:Tag[]
}

interface Window {
}