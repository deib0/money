import createId from "@/lib/createId"
const itemKey ='tagList'
const tagStore:TagStore ={
    tagList:[],
    fetchTagList(){
        this.tagList=JSON.parse(localStorage.getItem(itemKey)||'[]') 
        return this.tagList       
    },
    createTag(newTag){
        if(newTag){
            let names =this.tagList.map(item=>item.tagName)
                if(names.indexOf(newTag)>=0){
                    alert('换一个名字把')
                }else{
                    let id= createId().toString()
                    let obj ={tagId:id,tagName:newTag}
                    this.tagList.push(obj)
                    this.saveTagList()
                    alert('创建成功')
                }
            }
    },
    saveTagList(){
        localStorage.setItem(itemKey,JSON.stringify(this.tagList))
    },
    updateTag(tagId,tagName){
        let tagIds =this.tagList.map(item=>item.tagId)
        let index = tagIds.indexOf(tagId)
        if(index>=0){
            this.tagList[index].tagName=tagName
        }
        this.saveTagList()
    },
    removeTag(tagId){
        let tagIds =this.tagList.map(item=>item.tagId)
        let index = tagIds.indexOf(tagId)
        this.tagList.splice(index,1)
        this.saveTagList()
        alert('删除成功')
    }
}
export default tagStore