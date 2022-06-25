const itemKey ='tagList'
type TagListModel={
    data:string[],
    fetch():string[],
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
            if(this.data.indexOf(value)>=0){
                return 'duplicated'
            }else{
                this.data.push(value)
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