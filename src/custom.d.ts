type RecordItem={
    selectedTags:string[]
    notes:string
    type:string
    amount:number
    date:string
  }
  type Tag ={
    tagId:string,
    tagName:string,
    iconName:string
}
type RootState={
  recordList:RecordItem[]
  tagList:Tag[]
}

interface Window {
}