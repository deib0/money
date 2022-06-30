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
    iconName:string,
    type:string
}
type RootState={
  recordList:RecordItem[]
  tagList:Tag[]
}
type Icon={
  iconName:string
  type:string
}

interface Window {
}