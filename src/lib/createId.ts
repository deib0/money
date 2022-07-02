let id:number =parseInt(localStorage.getItem('id')||'12')
function createId(){
    id++
    localStorage.setItem('id',id.toString())
    return id
}
export default createId