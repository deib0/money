const itemKey ='tagList'
type Tag ={
    tagId:string,
    tagName:string
}
type TagListModel={
    data:Tag[],
    fetch():Tag[],
    create(value:string):'success'|'duplicated',//  联合类型
    save():void

}
const tagListModel:TagListModel ={
    data:[],
    fetch(){
        this.data=JSON.parse(localStorage.getItem(itemKey)||'[]') 
        return this.data
    },
    create(value){
        let names =this.data.map(item=>item.tagName)
            if(names.indexOf(value)>=0){
                return 'duplicated'
            }else{
                let obj ={tagId:value,tagName:value}
                this.data.push(obj)
                this.save()
                return 'success'
            }
    },
    save(){
        let string = JSON.stringify(this.data)
        localStorage.setItem(itemKey,string)
    }
}
export default tagListModel