// back home btn 

let backBtn=document.getElementById('back-btn')
backBtn.addEventListener('click',()=>{
    window.location.href='home.html'
})

// post the tasks 
let category1=document.getElementById('category')
let task=document.getElementById('task')
let start=document.getElementById('start')
let end=document.getElementById('end')
let repeat=document.getElementById('repeat')
let addBtn=document.getElementById('add-btn')
let allTaskss=JSON.parse(localStorage.getItem('all_tasks'))||[]
addBtn.addEventListener('click',()=>{
   let catvalue=category1.value 
   let taskValue=task.value.trim() 
   let startValue=start.value 
   let endValue=end.value 
   let repeatValue=repeat.value
    let tasks={
        category:catvalue,
        taskName:taskValue,
        start:startValue,
        end:endValue,
        repeat:repeatValue,
        check:false
    }
    if(taskValue!==''&&startValue!==''&&endValue!==''){
    allTaskss.push(tasks)
    window.location.reload()
    console.log(allTaskss)
    localStorage.setItem('all_tasks',JSON.stringify(allTaskss))
    let toast=document.getElementById('toast')
    toast.classList.add('toast-show')
    setTimeout(() => {
        toast.classList.remove('toast-show')
    },1000);
}

})

let form=document.getElementById('form').addEventListener('submit',(e)=>{
   e.preventDefault()
})