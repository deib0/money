let id:number =parseInt(localStorage.getItem('id')||'1')
function createId(){
    id++
    localStorage.setItem('id',id.toString())
    return id
}
export default createId