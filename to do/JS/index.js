// get username for greeting

let name=document.getElementById('input-name')
let getBtn=document.getElementById('get-btn')
getBtn.disabled=true

name.addEventListener('keyup',()=>{
if(name.value.trim()!==''){
    getBtn.disabled=false
}
else{
    getBtn.disabled=true
}
})

getBtn.addEventListener('click',()=>{
    let Name=name.value.trim()

   localStorage.setItem('name',Name)
   window.location.href='home.html'

})