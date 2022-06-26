let id:number =parseInt(localStorage.getItem('id')||'0')||0
function createId(){
    id++
    localStorage.setItem('id',id.toString())
    return id
}
export default createId