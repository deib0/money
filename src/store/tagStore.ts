import tagListModel from "@/models/tagListModel"
const tagStore ={
    tagList:tagListModel.fetch(),
    createTag(newTag:string){
        if(newTag){
            const message= tagListModel.create(newTag)
            if(message==='duplicated'){alert('已经有这个标签了，换一个把')}
            else if(message === 'success'){alert('创建成功~')}
            }
    },
    removeTag(tagId:string){
        let message= tagListModel.remove(tagId)
        if(message==='success'){alert('删除成功')
        }else{
          alert('没有该标签')
        } 
    },
    updateTag(tagId:string,tagName:string){
        tagListModel.update(tagId,tagName)
    }
}
export default tagStore