//  Home Page
let name2 = localStorage.getItem("name");
console.log(name2);

let welcome = document.getElementById("welcome");
welcome.textContent = ` Hello ${name2} Welcome`;

let search = document.getElementById("search");
let searchIcon = document.getElementById("searchicon");
searchIcon.addEventListener("click", () => {
  search.classList.toggle("serch");
  if (searchIcon.className === "fas fa-search") {
    searchIcon.className = "fas fa-xmark";
  } else {
    searchIcon.className = "fas fa-search";
  }
});

let taskBtn = document.getElementById("addbtn");
taskBtn.addEventListener("click", () => {
  window.location.href = "task.html";
});

let list = JSON.parse(localStorage.getItem("taskss")) || [];
let lists = document.getElementById("listt");

if (list) {
  lists.innerHTML = "";
  ui(list);
}

function ui(a) {
  a.forEach((b) => {
    let li = document.createElement("li");
    let check = document.createElement("input");
    let del = document.createElement("button");
    let time = document.createElement("p");
    let content = document.createElement("div");
    time.textContent = `
${b.start}-${b.end}
`;
    check.addEventListener("change", () => {
      if (check.checked) {
        content.classList.add("chec");
        console.log("check");
      } else {
        content.classList.remove("chec");
      }
    });
    time.className = "time";
    content.className = "content";
    del.textContent = "delete";
    del.onclick = () => {
      list = list.filter((t) => t.name !== b.name);
      li.remove();
      localStorage.setItem("taskss", JSON.stringify(list));
    };
    del.classList.add("del");
    li.className = "task";
    content.textContent = b.name;
    content.style.width = "200px";
    check.type = "checkbox";
    check.classList.add("checkbox");
    lists.appendChild(li);
    li.appendChild(content);
    li.prepend(check);
    content.appendChild(time);
    li.appendChild(del);
    li.classList.add("li");
  });
}

console.log(list);

search.addEventListener("input", () => {
  console.log(list);

  let query = search.value.trim().toLowerCase();

  let newlist = list.filter((x) => x.name.toLowerCase().includes(query));
  console.log(newlist);
  lists.innerHTML = "";
  ui(newlist);
});

let humberIcon = document.getElementById("bar");
let blok = document.getElementById("bar2");
humberIcon.addEventListener("click", (e) => {
  blok.classList.toggle("humber");
  e.stopPropagation();
});

let bod = document.getElementById("body");
bod.addEventListener("click", () => {
  blok.classList.remove("humber");
  theme.classList.remove("theme");
});
function logout() {
  localStorage.removeItem("name2");
  localStorage.removeItem("taskss");
  window.location.href = "index.html";
}

let theme = document.getElementById("theme");
let themee = document.getElementById("link");
themee.addEventListener("click", (e) => {
  theme.classList.toggle("theme");
  e.stopPropagation();
});

let light = document.getElementById("light");
let dark = document.getElementById("dark");
dark.addEventListener("click", () => {
  bod.classList.add("night");
});
light.addEventListener("click", () => {
  bod.classList.remove("night");
});

let dmode = document.getElementById("dmode");
dmode.addEventListener("click", () => {
  dmode.textContent = "light mode";
  bod.classList.toggle("night");
});
