// get user name

let userName = localStorage.getItem("name");
let nameTxt = document.getElementById("nametxt");
nameTxt.textContent = userName;

// create btn

let createBtn = document.getElementById("create-btn");
createBtn.addEventListener("click", () => {
  window.location.href = "task.html";
});

// side bar show

let sideBar = document.getElementById("side-bar");
let sideBox = document.getElementById("side-box");
sideBar.addEventListener("click", (e) => {
  sideBox.classList.add("side-show");
  e.stopPropagation();
});
let body = document.getElementById("body");
body.addEventListener("click", () => {
  sideBox.classList.remove("side-show");
});
sideBox.addEventListener("click", (e) => {
  e.stopPropagation();
});

// get task from task.js & show tasks in ui

let allTasks = JSON.parse(localStorage.getItem("all_tasks"));
let listBox = document.getElementById("list-box");

if (allTasks) {
  showUI(allTasks);
}

function showUI(a) {
  listBox.innerHTML = "";
  a.forEach((element) => {
    let li = document.createElement("li");
    let taskTitle = document.createElement("h4");
    let content = document.createElement("div");
    let btnBox = document.createElement("div");
    let taskTime = document.createElement("small");
    let delBtn = document.createElement("button");
    let checkBox = document.createElement("input");
    let delIcon = document.createElement("i");
    let editIcon = document.createElement("i");
    let editBtn = document.createElement("button");

    taskTitle.textContent = element.taskName;
    taskTime = `${element.start} - ${element.end}`;

    checkBox.type = "checkbox";

    li.classList.add("li-box");
    content.classList.add("content");
    taskTitle.classList.add("title");
    btnBox.classList.add("btn-box");
    delBtn.classList.add("del-btn");
    delIcon.className = "fa-solid fa-trash";
    editIcon.className = "fa-solid fa-plus";
    editBtn.classList.add("edit-btn");
    checkBox.classList.add("check-box");

    

    checkBox.addEventListener("change", () => {
      if (checkBox.checked) {
        taskTitle.classList.add("title-cross");
        element.check=true
        localStorage.setItem('all_tasks',JSON.stringify(allTasks))
      } else {
        taskTitle.classList.remove("title-cross");
        element.check=false
        localStorage.setItem('all_tasks',JSON.stringify(allTasks))
      
      }
    });
    
    if(element.check===true){
      taskTitle.classList.add('title-cross')
      checkBox.checked=true
    }


    // delete task

    delBtn.addEventListener("click", () => {
      deleteTask(allTasks);
    });

    function deleteTask(s) {
      s = s.filter((c) => {
        element.taskTitle !== c.taskTitle;
        li.remove();
      });
      localStorage.setItem("all_tasks", JSON.stringify(s));
    }

    // edit task
    editBtn.addEventListener("click", () => {
      let editBox = document.createElement("div");
      let headingTxt = document.createElement("h4");
      let editTitle = document.createElement("input");
      let editStart = document.createElement("input");
      let editEnd = document.createElement("input");
      let saveBtn = document.createElement("button");
      editTitle.value = element.taskName;
      editStart.type = "time";
      editEnd.type = "time";
      editStart.value = element.start;
      editEnd.value = element.end;
      saveBtn.textContent = "Save";
      saveBtn.classList.add("del-btn");
      headingTxt.textContent = "edit box";
      headingTxt.classList.add("edit-head");
      editBox.classList.add("edit-box");
      editBox.append(headingTxt, editTitle, editStart, editEnd, saveBtn);
      document.body.append(editBox);

      saveBtn.addEventListener("click", () => {
        if (
          editTitle.value !== "" &&
          editStart.value !== "" &&
          editEnd.value !== ""
        ) {
          element.taskName = editTitle.value;
          element.start = editStart.value;
          element.end = editEnd.value;
          localStorage.setItem("all_tasks", JSON.stringify(allTasks));
          editBox.remove();
          showUI(allTasks);
        }
      });
    });

    content.append(taskTitle, taskTime);
    delBtn.appendChild(delIcon);
    editBtn.appendChild(editIcon);
    li.appendChild(content);
    btnBox.append(delBtn, editBtn);
    li.appendChild(btnBox);
    li.prepend(checkBox);
    listBox.appendChild(li);
  });
}


// searching 

let searchIcon=document.getElementById('search-icon')
let searchInput=document.getElementById('input-search')

searchIcon.addEventListener('click',()=>{
  searchInput.classList.toggle('search-input-show')
if(searchIcon.className==='fas fa-search'){
  searchIcon.className='fas fa-xmark'
}
else{
  searchIcon.className='fas fa-search'
}
})
searchInput.addEventListener('keyup',()=>{
  if(searchInput.vlaue!==''){
  let query=searchInput.value.trim()
let searchTasks=allTasks.filter(r=>r.taskName.toLowerCase().includes(query.toLowerCase()))
showUI(searchTasks)
  }

})

// category

function category(cat){
   let category=allTasks.filter(ss=>ss.category===cat)
   showUI(category)
}
function allShow(){
  showUI(allTasks)
}


// completed takss 

function completedTask(){
  let completeTask=allTasks.filter(z=>z.check===true)
  showUI(completeTask)
}


// logout

function logout(){
  allTasks=[]
  window.location.href='index.html'
  localStorage.removeItem('all_tasks')
}