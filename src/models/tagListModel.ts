import createId from '../lib/createId';
const itemKey ='tagList'
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
const tagListModel:TagListModel ={
    data:[],
    fetch(){
        this.data=JSON.parse(localStorage.getItem(itemKey)||'[]') 
        return this.data
    },
    create(value){
        let id= createId().toString()
        let names =this.data.map(item=>item.tagName)
            if(names.indexOf(value)>=0){
                return 'duplicated'
            }else{
                let obj ={tagId:id,tagName:value}
                this.data.push(obj)
                this.save()
                return 'success'
            }
    },
    save(){
        let string = JSON.stringify(this.data)
        localStorage.setItem(itemKey,string)
    },
    update(tagId,tagName){
        let tagIds =this.data.map(item=>item.tagId)
        let index = tagIds.indexOf(tagId)
        if(index>=0){
            this.data[index].tagName=tagName
        }
        this.save()
    },
    remove(tagId){
        let tagIds =this.data.map(item=>item.tagId)
        let index = tagIds.indexOf(tagId)
        this.data.splice(index,1)
        this.save()
        return 'success'
    }
}
export default tagListModel