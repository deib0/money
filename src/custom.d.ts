type RecordItem={
    selectedTags:string[]
    notes:string
    type:string
    amount:number
    date:Date
  }
  type Tag ={
    tagId:string,
    tagName:string
}
type TagListModel={
    data:Tag[],
    fetch():Tag[],
    create(value:string):'success'|'duplicated',//  联合类型
    save():void,
    update(tagId:string,tagName:string):void,
    remove(tagId:string):string

}